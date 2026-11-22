import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const source = readFileSync(new URL('../public/measurement.js', import.meta.url), 'utf8');
function browser(session = new Map(), local = new Map([['springwell.measurement.v1', 'granted']])) {
  const scripts = [];
  const storage = map => ({getItem: key => map.get(key), setItem: (key,value) => map.set(key,value), removeItem: key => map.delete(key)});
  const window = {
    location: {pathname:'/care/fertility-ivf-support', search:'?email=private@example.com&diagnosis=private'},
    localStorage: storage(local), sessionStorage: storage(session)
  };
  const document = {head:{appendChild:script => scripts.push(script)},createElement:()=>({})};
  const context = vm.createContext({window,document});
  vm.runInContext(source, context);
  return {window,local,scripts,session,commands:()=>window.dataLayer.map(command=>Array.from(command)),runAgain:()=>vm.runInContext(source,context)};
}
test('automatic GA4 initialization has no Ads web configuration or conversion', () => {
  const b=browser();
  assert.equal(b.scripts.length,1);
  assert.equal(b.scripts[0].src,'https://www.googletagmanager.com/gtag/js?id=G-ZSK3ESH5HP');
  assert.equal(b.scripts[0].referrerPolicy,'no-referrer');
  const calls=b.commands(),config=calls.filter(c=>c[0]==='config');
  assert.equal(config.length,1);assert.equal(config[0][1],'G-ZSK3ESH5HP');
  assert.equal(config[0][2].send_page_view,false);
  assert.equal(config[0][2].allow_enhanced_conversions,false);
  assert(!calls.some(c=>c[0]==='event'&&c[1]==='conversion'));
  assert(!b.local.has('springwell.measurement.v1'));
});
test('restricted consent and sanitized commands precede the external loader',()=>{
  const calls=browser().commands();
  assert.equal(calls[0][0],'consent');assert.equal(calls[0][1],'default');
  assert.equal(calls[0][2].ad_storage,'granted');assert.equal(calls[0][2].analytics_storage,'granted');
  assert.equal(calls[0][2].ad_user_data,'denied');assert.equal(calls[0][2].ad_personalization,'denied');
  for(const c of calls.filter(c=>['set','config','event'].includes(c[0]))) {
    const p=c[0]==='set'?c[1]:c[2];
    assert.equal(p.page_location,'https://springwellacu.com/');assert.equal(p.page_title,'SpringWell Acupuncture');assert.equal(p.page_referrer,'');
  }
  assert.doesNotMatch(JSON.stringify(calls),/fertility|diagnosis|private@example|ivf/i);
});
test('own visit event is once per session and duplicate script execution is inert',()=>{
  const b=browser();assert.equal(b.commands().filter(c=>c[0]==='event').length,1);
  const before=b.commands().length;b.runAgain();assert.equal(b.commands().length,before);assert.equal(b.scripts.length,1);
  assert.equal(browser(b.session).commands().filter(c=>c[0]==='event').length,0);
});

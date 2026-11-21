import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const source = readFileSync(new URL('../public/measurement.js', import.meta.url), 'utf8');
function browser(path = '/', local = new Map(), session = new Map()) {
  const listeners = {}, clicks = {}, scripts = [];
  const storage = map => ({getItem: k => map.get(k) ?? null, setItem: (k,v) => map.set(k,v)});
  class Element { constructor(phone) { this.phone = phone; } closest() { return this.phone ? {} : null; } }
  const window = {
    location: {pathname: path, search: '?email=private@example.com&diagnosis=private'},
    localStorage: storage(local), sessionStorage: storage(session),
    addEventListener: (k,v) => { listeners[k] = v; }, dispatchEvent: e => listeners[e.type]?.(e)
  };
  const document = {head: {appendChild: x => scripts.push(x)}, createElement: () => ({}), addEventListener: (k,v) => { clicks[k] = v; }};
  vm.runInNewContext(source, {window, document, Element, Event: class {constructor(type){this.type=type;}}, Set, Date});
  return {window, scripts, session, local, commands: () => window.dataLayer.map(x => Array.from(x)), click: () => clicks.click({target: new Element(true)})};
}
test('no external tag or events before consent, including decline', () => {
  const b = browser('/care/fertility-ivf-support');
  b.window.springwellMeasurement.route(); b.click(); b.window.springwellMeasurement.choose(false);
  assert.equal(b.scripts.length,0);
  assert.equal(b.commands().filter(x => x[0] === 'event' || x[0] === 'config').length,0);
  assert.equal(b.commands()[0][1],'default');
  assert.equal(b.commands()[0][2].ad_user_data,'denied');
});
test('consent precedes config; direct page load emits one conversion with sanitized fields', () => {
  const b = browser('/care/fertility-ivf-support'); b.window.springwellMeasurement.choose(true);
  assert.equal(b.scripts.length,1);
  const commands=b.commands();
  assert.ok(commands.findIndex(x=>x[0]==='consent' && x[1]==='update') < commands.findIndex(x=>x[0]==='config'));
  const conversion=commands.filter(x=>x[0]==='event' && x[1]==='conversion');
  assert.equal(conversion.length,1);
  assert.equal(conversion[0][2].send_to,'AW-18378983115/l1GICOrCurMdEMuN5LtE');
  for(const c of commands.filter(x=>x[0]==='event' || x[0]==='config')) {
    assert.equal(c[2].page_location,'https://springwellacu.com/');
    assert.equal(c[2].page_referrer,'');
    assert.equal(c[2].page_title,'SpringWell Acupuncture');
    assert.doesNotMatch(JSON.stringify(c),/private@example|diagnosis|fertility|ivf/i);
  }
});
test('SPA route, repeated visits, reload and phone clicks are deduplicated', () => {
  const b=browser('/'); b.window.springwellMeasurement.choose(true);
  b.window.location.pathname='/care/fertility-ivf-support/';
  b.window.dispatchEvent({type:'springwell:route'});
  b.window.springwellMeasurement.route(); b.click(); b.click();
  assert.equal(b.commands().filter(x=>x[0]==='event' && x[1]==='conversion').length,2);
  const reload=browser('/care/fertility-ivf-support',b.local,b.session);
  assert.equal(reload.commands().filter(x=>x[0]==='event').length,0);
});
test('lookalike paths do not match and withdrawal stops further events', () => {
  const b=browser('/care/fertility-ivf-support-extra'); b.window.springwellMeasurement.choose(true);
  assert.equal(b.commands().filter(x=>x[1]==='conversion').length,0);
  b.window.springwellMeasurement.choose(false);
  b.window.location.pathname='/care/fertility-ivf-support';
  b.window.springwellMeasurement.route(); b.click();
  assert.equal(b.commands().filter(x=>x[1]==='conversion').length,0);
});

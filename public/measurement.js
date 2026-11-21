(function (w, d) {
  'use strict';
  if (w.springwellMeasurement) return;
  var choiceKey = 'springwell.measurement.v1';
  var granted = false, initialized = false;
  var sent = new Set();
  var safePage = {
    page_location: 'https://springwellacu.com/',
    page_referrer: '',
    page_title: 'SpringWell Acupuncture'
  };
  w.dataLayer = w.dataLayer || [];
  w.gtag = function () { w.dataLayer.push(arguments); };
  var gtag = w.gtag;
  gtag('consent', 'default', {
    ad_storage: 'denied', analytics_storage: 'denied',
    ad_user_data: 'denied', ad_personalization: 'denied'
  });
  gtag('set', Object.assign({}, safePage, {
    ads_data_redaction: true, url_passthrough: false,
    allow_google_signals: false, allow_ad_personalization_signals: false
  }));

  function readChoice() {
    try { return w.localStorage.getItem(choiceKey); } catch (_) { return null; }
  }
  function once(key, callback) {
    if (!granted || sent.has(key)) return;
    try {
      if (w.sessionStorage.getItem('sw.sent.' + key)) return;
    } catch (_) {}
    sent.add(key);
    callback();
    try { w.sessionStorage.setItem('sw.sent.' + key, '1'); } catch (_) {}
  }
  function conversion(key, label) {
    once(key, function () {
      gtag('event', 'conversion', Object.assign({}, safePage, {
        send_to: 'AW-18378983115/' + label
      }));
    });
  }
  function route() {
    if (!granted) return;
    // The path is used locally only. No path, query, title, form or referrer is sent.
    var path = w.location.pathname.replace(/\/+$/, '') || '/';
    once('visit', function () {
      gtag('event', 'page_view', Object.assign({}, safePage, { send_to: 'G-ZSK3ESH5HP' }));
    });
    if (path === '/care/fertility-ivf-support') {
      conversion('page-a', 'l1GICOrCurMdEMuN5LtE');
    } else if (path === '/care/womens-health') {
      conversion('page-b', 'QRv_CIHTu7MdEMuN5LtE');
    }
  }
  function apply(allow) {
    granted = allow === true;
    try { w.localStorage.setItem(choiceKey, granted ? 'granted' : 'denied'); } catch (_) {}
    gtag('consent', 'update', {
      ad_storage: granted ? 'granted' : 'denied',
      analytics_storage: granted ? 'granted' : 'denied',
      ad_user_data: 'denied', ad_personalization: 'denied'
    });
    if (granted && !initialized) {
      initialized = true;
      gtag('js', new Date());
      var config = Object.assign({}, safePage, {
        send_page_view: false, allow_enhanced_conversions: false,
        allow_google_signals: false, allow_ad_personalization_signals: false
      });
      gtag('config', 'GT-KT45HCVM', config);
      gtag('config', 'G-ZSK3ESH5HP', config);
      var script = d.createElement('script');
      script.id = 'google-tag-loader'; script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=GT-KT45HCVM';
      script.referrerPolicy = 'no-referrer';
      d.head.appendChild(script);
    }
    route();
    w.dispatchEvent(new Event('springwell:consent-changed'));
  }
  w.springwellMeasurement = { choose: apply, choice: readChoice, route: route };
  w.addEventListener('springwell:route', route);
  d.addEventListener('click', function (event) {
    var target = event.target;
    if (!granted || !(target instanceof Element)) return;
    if (target.closest('a[href^="tel:"]')) {
      // Never include the dialled number, link text, page, or patient information.
      conversion('phone', 'SkwXC0CO-egCEMuN5LtE');
    }
  }, true);
  if (readChoice() === 'granted') apply(true);
})(window, document);

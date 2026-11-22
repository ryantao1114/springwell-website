(function (w, d) {
  'use strict';
  if (w.springwellMeasurement) return;
  w.springwellMeasurement = { enabled: true };
  try { w.localStorage.removeItem('springwell.measurement.v1'); } catch (_) {}
  var safePage = {
    page_location: 'https://springwellacu.com/',
    page_referrer: '', page_title: 'SpringWell Acupuncture'
  };
  w.dataLayer = w.dataLayer || [];
  w.gtag = function () { w.dataLayer.push(arguments); };
  w.gtag('consent', 'default', {
    ad_storage: 'granted', analytics_storage: 'granted',
    ad_user_data: 'denied', ad_personalization: 'denied'
  });
  w.gtag('set', Object.assign({}, safePage, {
    ads_data_redaction: true, url_passthrough: false,
    allow_google_signals: false, allow_ad_personalization_signals: false
  }));
  w.gtag('js', new Date());
  var config = Object.assign({}, safePage, {
    send_page_view: false, allow_enhanced_conversions: false,
    allow_google_signals: false, allow_ad_personalization_signals: false
  });
  // Ads config pings ignore page_location redaction and expose medical routes.
  // Keep Ads call-asset measurement in Google Ads; do not initialize its web tag.
  w.gtag('config', 'G-ZSK3ESH5HP', config);
  // One generic visit per session. No medical route or page-specific conversion.
  var recorded = false;
  try { recorded = w.sessionStorage.getItem('sw.generic.visit.v2') === '1'; } catch (_) {}
  if (!recorded) {
    w.gtag('event', 'page_view', Object.assign({}, safePage, {send_to: 'G-ZSK3ESH5HP'}));
    try { w.sessionStorage.setItem('sw.generic.visit.v2', '1'); } catch (_) {}
  }
  var script = d.createElement('script');
  script.id = 'google-tag-loader'; script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-ZSK3ESH5HP';
  script.referrerPolicy = 'no-referrer';
  d.head.appendChild(script);
})(window, document);

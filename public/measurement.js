(function (w) {
  'use strict';
  // No optional measurement UI or third-party measurement is enabled.
  // A previously saved choice must not silently enable tracking without controls.
  try { w.localStorage.removeItem('springwell.measurement.v1'); } catch (_) {}
  w.dataLayer = w.dataLayer || [];
  w.gtag = function () { w.dataLayer.push(arguments); };
  w.gtag('consent', 'default', {
    ad_storage: 'denied', analytics_storage: 'denied',
    ad_user_data: 'denied', ad_personalization: 'denied'
  });
  w.gtag('set', {
    ads_data_redaction: true, url_passthrough: false,
    allow_google_signals: false, allow_ad_personalization_signals: false
  });
})(window);

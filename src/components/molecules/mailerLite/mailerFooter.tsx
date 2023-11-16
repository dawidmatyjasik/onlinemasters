// @ts-nocheck
import React, { useEffect } from 'react';

export const MailerFooter = () => {
  useEffect(() => {
    (function (w, d, e, u, f, l, n) {
      w[f] =
        w[f] ||
        function () {
          (w[f].q = w[f].q || []).push(arguments);
        };
      l = d.createElement(e);
      l.async = 1;
      l.src = u;
      n = d.getElementsByTagName(e)[0];
      n.parentNode.insertBefore(l, n);
    })(window, document, 'script', 'https://assets.mailerlite.com/js/universal.js', 'ml');
    ml('account', '617439');
  }, []);

  return <div className="ml-embedded -ml-5 w-max" data-form="Yxdmea" />;
};

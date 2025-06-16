import React, { useEffect } from 'react';
import { Calendar } from 'lucide-react';

const RegistrationForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.type = 'text/javascript';
    script.async = true;
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: '7729491',
          formId: '206d5801-69e0-4b05-a54e-0aad3ead61ec',
          region: 'na1',
          target: '#hubspot-form'
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center md:text-left mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-800">
            Reserve Your Child's Spot
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Secure your place in this exclusive learning experience
          </p>
        </div>

        {/* Form Wrapper */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Calendar className="w-4 h-4 inline mr-2" />
                Event Selection
              </label>
              <p className="text-sm text-gray-500 mb-4">Fill out the HubSpot form below to register:</p>
            </div>

            {/* HubSpot form will render here */}
            <div id="hubspot-form" className="space-y-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;

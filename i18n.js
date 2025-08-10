import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import mkTranslation from './locales/mk/translation.json';
import sqTranslation from './locales/sq/translation.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            mk: { translation: mkTranslation },
            sq: { translation: sqTranslation }
        },
        lng: 'mk',           // Set default language here ("mk" or "sq")
        fallbackLng: 'mk',   // Fallback if translation missing
        interpolation: { escapeValue: false }
    });

export default i18n;
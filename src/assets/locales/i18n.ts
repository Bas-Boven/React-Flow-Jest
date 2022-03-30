import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import common from './en/common.json'

export const resources = {
    en: {
        common: common,
    },
} as const;

i18n
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        lng: 'en',
        fallbackLng: 'en',
        debug: false,

        interpolation: {
            escapeValue: false, // not needed for react!!
        },
        ns: ['common'],
        resources,

        // react i18next special options (optional)
        // override if needed - omit if ok with defaults

        // react: {
        //     transSupportBasicHtmlNodes: true,
        //    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
        // bindI18n: 'languageChanged',
        // bindI18nStore: '',
        // transEmptyNodeValue: '',
        // transSupportBasicHtmlNodes: true,
        // transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
        // useSuspense: true,
        // }

    });


export default i18n;

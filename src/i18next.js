import i18n from "i18next";
import {  initReactI18next } from "react-i18next";




i18n
  .use(initReactI18next) 
  .init({
    lng: 'tr', 
    fallbackLng:'tr',
    resources: {
     en:{
         translation: require('./constants/language/en.json')
         
     },
     fr:{
        translation: require('./constants/language/fr.json')
        
    },
    tr:{
        translation: require('./constants/language/tr.json')
    
    },
  


  },
  debug:true,
  interpolation: {
    escapeValue: false 
  }
    // ns: ["translation"],
    // defaultNS: "translation"
    });

        i18n.languages = ["en", "tr", "fr"];
        
        export default i18n;
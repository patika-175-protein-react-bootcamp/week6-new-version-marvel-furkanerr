import React from 'react';
import i18n from '../../i18next';
import './style.css';

function Language() {
  const languages = ['tr', 'en','fr']

  const handleLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }
  return (
    
        <div className='languageContainer'>
      {languages.map((language, index) => (
      
          <div className='language'onClick={()=>handleLanguage(language)} key={index}>{language.toUpperCase()}</div>
          
      ))}
</div>
   
  )
}

export default Language
import React,{useEffect,useState} from 'react';
import { useTranslation } from 'react-i18next';
import SearchDelete from '../../constants/Icons/searchDelete';
import api from '../../services/api';
import {Link} from 'react-router-dom';
import './style.css';
function SearchBar() {
  const { t } = useTranslation();
    const [search, setSearch] = useState('');
    const [characters, setCharacters] = useState([]);

    const handleSearch = (e) => {
        setSearch(e.target.value);
        
    }
    const handleSearchCancel = () => {
        setSearch('');
    }



  useEffect(() => {

      const fetchData = async () => {
        await api.getCharacterByName(search).then(response => {
          setCharacters(response.data.data.results);
          console.log(characters);
        });
      };
      if(search){
        fetchData();
      }
  }, [search])
  

 

  return (
    <>
    <div className='SearchBarContainer'>
        <div className='CharacterSearchText'>{t('KarakterAra')}</div>
        <input type='text' value={search} onChange={(e)=> handleSearch(e)} placeholder={t('PlaceholderSearch')} className='SearchBar'/>
        {
          search &&<div className="searchCancelIcon" onClick={handleSearchCancel}><SearchDelete /></div>
        }
        
        
        {
          search.length > 0 && characters.length > 0 &&
          characters !== null ? <div className='FoundCharactersContainer'>
          {
            characters.map((character) => (
              
              <Link to={`/detail/${character.id}`} style={{textDecoration:'none'}}>
                <div className='CharacterName' key={character.id}>{t('CharacterName')}:{character.name}</div>
                </Link>
                
            ))

          }
            <div className='FoundCharacters'></div>


        </div> : search==='' ? null: <div className='CharacterNotFound'>{t('CharacterNotFound')}</div>
        
        }
        
        
    </div>
    </>
  )
}

export default SearchBar
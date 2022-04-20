import React, { useEffect } from "react";
import "./style.css";
import { useCharacterDetailContext } from "../../context/characterDetailContext";

import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import Language from "../../components/SwitchLanguage/Language";
import { useTranslation } from "react-i18next";
function CharacterDetailPage() {
  const { fetchData, characterDetail } = useCharacterDetailContext();

  const { id } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    console.log(id);
    fetchData(id);
  }, [id]);

  console.log(characterDetail);

  return (
    <divc className="characterDetailContainer">
      <Header />
      <div className="SearchAndLanguageContainer">
        <div className="searchBar">
          <SearchBar />
        </div>
        <div className="language">
          <Language />
        </div>
       
      </div>
      <div className="NavigateToHomePageButton">
        
          <Link style={{textDecoration:'none'}} to="/">
            <div>{t("HomePage")}</div>
          </Link>
        
      </div> 
      <div className="HeroContainer">
        <img
          src={characterDetail[0]?.thumbnail?.path + "/portrait_uncanny.jpg"}
          className="HeroImage"
        />

        <div className="characterInfos">
          <div className="characterName">{characterDetail[0]?.name}</div>
          <div className="heroDescription">
            {characterDetail[0]?.description}
          </div>

          <div className="Comics">
            <h3 className="comicsTitle">{t("Comics")}</h3>
            {characterDetail[0]?.comics?.items
              ?.slice(0, 10)
              ?.map((comic, index) => (
                <div className="comic" key={index}>
                  <span className="comicName">{comic?.name}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </divc>
  );
}

export default CharacterDetailPage;

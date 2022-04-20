import React, { useEffect, useState } from "react";
import api from "../services/api";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import { useContextValue } from "../context/paginationContext";
import style from "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Pagination from "../components/Pagination/Pagination";
import SearchBar from "../components/SearchBar/SearchBar";
import Language from "../components/SwitchLanguage/Language";
const HomePage = () => {
  const { heros } = useContextValue();

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="SearchAndLanguageContainer">
        <div className="searchBar">
          <SearchBar />
        </div>
        <div className="language">
          <Language />
        </div>
      </div>
      <div className="container">
        {heros.map(
          (
            hero,
            index // map heros to card
          ) => (
            <Card key={index} hero={hero} />
          )
        )}
      </div>
      <div className="paginationContainer">
        <Pagination />
      </div>
    </div>
  );
};

export default HomePage;

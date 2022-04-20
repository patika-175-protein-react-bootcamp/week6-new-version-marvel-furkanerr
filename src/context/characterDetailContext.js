import React from "react";
import { useContext, useState,createContext } from "react";
import api from "../services/api"; 
const CharacterDetailContext = createContext();

const CharacterDetailProvider =({children}) => {

    const [characterDetail, setcharacterDetail] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState(false);

   
        const fetchData = async (id) => {
            await api.getCharacter(id).then((res) => {
                setcharacterDetail(res.data.data.results);
                setloading(false);
            }).catch(() => {
                seterror(true);
                setloading(false);
            });
        };
        

    

    const value = {
        characterDetail,
        loading,
        error,
        fetchData
    };

    return (
        <CharacterDetailContext.Provider value={value}>
            {children}
        </CharacterDetailContext.Provider>
    );

};
const useCharacterDetailContext = () => useContext(CharacterDetailContext);
    export {CharacterDetailProvider, useCharacterDetailContext}; 


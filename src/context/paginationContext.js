import React from "react";
import { useContext, useState,createContext,useEffect } from "react";
import api from "../services/api";
const PaginationContext = createContext();

    const PaginationProvider = ({children}) => {
        const [currentPage, setcurrentPage] = useState(1);
        const [offset, setoffset] = useState(0);
        const [heros, setheros] = useState([]);
        

        useEffect(() => {
          // scroll to top after every change of page
          window.scrollTo(0, 0)
          // fetch data from api
          const fetchData = async () => {
            await api.getAllCharacters(offset).then((res) => {
              setheros(res.data.data.results);
              localStorage.setItem(
                `Page${currentPage}`,
                JSON.stringify(res.data.data.results)
              );
            });
          };
          // fetch data from local storage and set heros if exist
          if (localStorage.getItem(`Page${currentPage}`) !== null) {
            setheros(JSON.parse(localStorage.getItem(`Page${currentPage}`)));
          } else {
            // fetch data from api if local storage is empty
            fetchData();
          }
        }, [currentPage]);

        const handleNextIcon = () => {// handle next icon click
    
            setcurrentPage(currentPage + 1);
            setoffset(offset + 20);
          };
          const handlePreviousIcon = () => {// handle previous icon click
            setcurrentPage(currentPage - 1);
            setoffset(offset - 20);
          };
          const handleNext = (Event) => {// handle next click
            Event.preventDefault();// prevent default behaviour
            let targetPage = Event.target.innerHTML;  // get target page number
            setcurrentPage(parseInt(targetPage));// set current page to target page
            setoffset((targetPage - 1) * 20);// calculate offset
          };
        
          const handlePrevious = (Event) => {
            Event.preventDefault();
            let targetPage = Event.target.innerHTML;
            setcurrentPage(parseInt(targetPage));
            setoffset((targetPage - 1) * 20);
            
          };

          const value = {
            currentPage,
            offset,
            handleNextIcon,
            handlePreviousIcon,
            handleNext,
            handlePrevious,
            heros
            };
        return (
            <PaginationContext.Provider value={value}>
                {children}
            </PaginationContext.Provider>
        );
    };
    const useContextValue = () => useContext(PaginationContext);


export { PaginationProvider, useContextValue };
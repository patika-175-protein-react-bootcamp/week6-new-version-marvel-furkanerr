import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CharacterDetailPage from '../pages/CharacterDetail/CharacterDetailPage';
import HomePage from '../pages/HomePage';
function Routers() {
    return (
     <Routes>
         <Route path="/" element={<HomePage/>} />
         <Route path='/detail/:id' element={<CharacterDetailPage/>}/>
     </Routes>
    )
  }
  
  export default Routers
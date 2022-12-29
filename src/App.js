import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import ShopPage from './Pages/ShopPage/shopPage.Components'
import HomePage from './Pages/Homepage/homepage.components';
// import { atsPage } from './Pages/hATS/hatsPage';


function App() {
  return (
    <div >
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route path='/shop' element={<ShopPage/>} />
      </Routes>
    </div>
  );
}

export default App;

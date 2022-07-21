import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Home from '../body/home/Home';
import Kids from '../body/kids/Kids';
import Men from '../body/men/Men';
import Occasion from '../body/occasion/Occasion';
import Women from '../body/women/Women';
import Additems from '../body/additems/Additems';
import Viewbooked from '../body/viewbooked/Viewbooked';
import Detailed from '../body/detailed/Detailed'
import Account from '../body/Account/Account';

const Mainpage = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/women' element={<Women/>}/>
        <Route path='/kids' element={<Kids/>}/>
        <Route path='/occasion' element={<Occasion/>}/>
        <Route path='/viewbooked' element={<Viewbooked/>}/>
        <Route path='/additems' element={<Additems/>}/>
        <Route path='/detailed' element={<Detailed/>}/>
        <Route path="/account" element={<Account/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default Mainpage

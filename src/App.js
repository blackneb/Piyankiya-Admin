import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/body/home/Home';
import Kids from './components/body/kids/Kids';
import Men from './components/body/men/Men';
import Occasion from './components/body/occasion/Occasion';
import Women from './components/body/women/Women';
import Additems from './components/body/additems/Additems';
import Viewbooked from './components/body/viewbooked/Viewbooked';
import Detailed from './components/body/detailed/Detailed'

function App() {
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
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import Home from './home';
import Projects from './projects';
import Footer from './components/Footer';
import Developer from './developer';




function App() {
  return (
    <div className='bg-gray-50'>
     <Navbar/>

     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/developer' element={<Developer/>}/>
     </Routes>
     <Footer/>
  
    </div>
  );
}

export default App;

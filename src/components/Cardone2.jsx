import React from 'react';
import Figma from '../assets/figma.png';
import Reactlogo from '../assets/reactlogo.png';

const Cardone2 = () => {
  return (
    <div className='max-w-[1240px] hidden sm:visible mx-auto md:grid md:grid-cols-2 '>
    <div className='w-full py-30 px-4'>
        <div className='w-[80%] mx-auto my-5 rounded-3xl py-3 px-3'>

      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 col-span-2'>

      <img className='sm:w-[60%] w-[20%] mx-auto my-3 transform hover:bg-z-600 transition duration-500 hover:scale-105 ' src={Figma} alt='/' />
        <div className='flex flex-col '>
          <h1 className='md:text-xl sm:text-xl text-xl font-bold px-3 py-3'>Everyone loves figma</h1>
          <p className='px-3 '>
The best software for UI UX
          </p>
          <h1 className='text-transparent text-1xl bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 w-[200px] rounded-md font-medium my-2x mx-3 py-3'>Watch site</h1>
           </div>
        </div>
      </div>
      </div>
      <div className='w-[80%] mx-auto my-5 rounded-3xl py-3 px-3 '>
        
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
        
      <img className='sm:w-[60%]  w-[20%] mx-auto my-3 transform hover:bg-z-600 transition duration-500 hover:scale-105 ' src={Reactlogo} alt='/' />
        <div className='flex flex-col'>
          <h1 className='md:text-xl sm:text-xl text-xl font-bold px-3 py-3'>Developer</h1>
          <p className='px-3 '>
Máster en Design Thinking y Diseño UX/UI
          </p>
          <h1 className='text-transparent text-1xl bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 w-[200px] rounded-md font-medium my-2x mx-3 py-3'>Watch site</h1>
          </div>
          </div>
        </div>
      
      
    </div>
    
    
    
  );
};

export default Cardone2;
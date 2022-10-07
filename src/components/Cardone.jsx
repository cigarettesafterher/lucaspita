import React from 'react';
import Twitch from '../assets/twitch.png';
import Barreira from '../assets/barreira.png';

const Cardone = () => {
  return (
    <div className='max-w-[1240px] hidden sm:visible mx-auto sm:grid md:grid-cols-2 '>
    <div className='w-full  px-4'>
        <div className='w-[80%] mx-auto rounded-3xl py-5 px-3'>

      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 col-span-2 '>

        <img className='w-[60%] mx-auto  pt-5' src={Twitch} alt='/' />
        <div className='flex flex-col justify-center'>
          <h1 className='md:text-xl sm:text-base text-base font-bold px-3 py-3'>Watch how I work live!</h1>
          <p className='px-3 '>
          Streaming creative process 
          </p>
          <h1 className='text-transparent text-base bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 w-[200px] rounded-md font-medium my-2x mx-3 py-3'>soon</h1>
        </div>
        </div>
      </div>
      </div>
      <div className='w-[80%] mx-auto  rounded-3xl py-5 px-3 '>
        
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
        
      <img className='w-[60%] mx-auto' src={Barreira} alt='/' />
        <div className='flex flex-col justify-center '>
          <h1 className='md:text-xl sm:text-xl text-xl font-bold px-3 py-3'>Studying at +Barreira</h1>
          <p className='px-3 '>
Máster en Design Thinking y Diseño UX/UI
          </p>
          <a href="https://barreira.edu.es/estudiar-diseno-grafico/master-ux-ui/#plan-estudios">
          <h1 className='text-transparent text-1xl bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 w-[200px] rounded-md font-medium my-2x mx-3 py-3'>Watch site</h1>
          </a>
          </div>
          </div>
        </div>
      
      
    </div>
    
    
    
  );
};

export default Cardone;
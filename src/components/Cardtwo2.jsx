import React from 'react';
import Twitch from '../assets/twitch.png';

const Cardtwo = () => {
  return (
    <div className='w-full py-30 px-4  transform   hover:bg-z-600 transition duration-500 hover:scale-105'>
        <div className='w-[80%] mx-auto my-20 bg-white rounded-3xl drop-shadow-2xl '>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[40%] mx-auto ' src={Twitch} alt='/' />
        <div className='flex flex-col justify-center'>

          <h1 className='md:text-2xl sm:text-xl text-base font-bold px-3 py-3'>You can watch my own proyects here</h1>
          <p className='px-3 '>
          You can watch my own proyects here
          </p>
          <h1 className='text-transparent text-base bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 w-[200px] rounded-md font-medium my-2x mx-3 py-3'>See them</h1>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Cardtwo;
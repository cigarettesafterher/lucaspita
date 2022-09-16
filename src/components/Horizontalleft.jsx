

import React from 'react';
import Mobile from '../assets/Mobile.jpg';

const HorizontalLeft = () => {
  return (
    <div className='w-full py-30 px-4  transform   hover:bg-z-600 transition duration-500 hover:scale-105'>
        <div className='w-[80%] mx-auto my-20 py-3 px-3'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[40%] mx-auto my-3' src={Mobile} alt='/' />
        <div className='flex flex-col justify-center'>

          <h1 className='md:text-2xl sm:text-1xl text-xl font-bold px-3 py-3'>You can watch my own proyects here</h1>
          <p className='px-3 '>
          You can watch my own proyects here
          </p>
          <h1 className='text-transparent text-1xl bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 w-[200px] rounded-md font-medium my-2x mx-3 py-3'>See them</h1>
        </div>
      </div>
      </div>
    </div>
  );
};

export default HorizontalLeft;
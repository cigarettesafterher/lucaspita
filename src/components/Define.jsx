
import React from 'react';
import Lens from '../assets/flowchart.png';

const Define= () => {
  return (
    <div className='w-[90%] mx-auto rounded-3xl drop-shadow-2xl px-3 transform hover:bg-z-600 transition duration-500 hover:scale-105'>
      <div className='w-[100%] mx-auto px-3 '>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
        <div className='flex flex-col justify-center'>


<div className='text-center'>
  <h1 className='md:text-3xl sm:text-2xl text-xl font-bold px-3 '>Stakeholders</h1>
  <p className='text-center mx-8 md:text-lg text-lg'>
  Detectar un problema y una solución puede parecer tarea fácil, sin embargo, muchos negocios fracasan debido a una aproximación errónea.
  </p>
  <h1 className='md:text-xl text-lg text-transparent  bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 rounded-md font-medium mx-3'>Get Started</h1>

</div>

</div>
          <img className='w-[80%] mx-auto  ' src={Lens} alt='/' />
         
        </div>
      </div>
    </div>
  );
};

export default Define;
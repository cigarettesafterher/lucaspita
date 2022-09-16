
import React from 'react';
import Eljardin from '../assets/reversephone.png';

const Pictureandtextlaluz= () => {
  return (
    <div className='w-[80%] mx-auto my-20 rounded-3xl drop-shadow-2xl py-3 px-3 transform hover:bg-z-600 transition duration-500 hover:scale-105'>
      <div className='w-[80%] mx-auto my-10 py-3 px-3 '>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
        <div className='flex flex-col justify-center'>


<div className='text-center '>
  <h1 className='md:text-3xl sm:text-2xl text-xl font-bold px-3 py-3'>El Jardin, my latest proyect!</h1>

  <p className='mx-3 md:text-xl text-lg '>
    El Jardín permitirá crear una conexión entre todos los artistas y es nuestro trabajo, crear ese vínculo.
  </p>
  <h1 className='md:text-xl text-lg text-transparent  bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 rounded-md font-medium  my-2x mx-3 py-6  '>Get Started</h1>

</div>

</div>
          <img className='w-[50%] mx-auto my-3 ' src={Eljardin} alt='/' />
         
        </div>
      </div>
    </div>
  );
};

export default Pictureandtextlaluz;
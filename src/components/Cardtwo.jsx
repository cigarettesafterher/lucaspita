import React from 'react';
import Mobile from '../assets/reversephone.png';

const Cardtwo = () => {
  return (
    <div className='w-full py-30 px-4  transform   hover:bg-z-600 transition duration-500 hover:scale-105'>
        <div className='w-[90%] mx-auto my-20 bg-white rounded-3xl md:drop-shadow-2xl drop-shadow-xl '>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[40%] mx-auto ' src={Mobile} alt='/' />
        <div className='flex flex-col justify-center'>
          <h1 className='md:text-2xl sm:text-xl text-base font-bold  mx-8 py-3'>You can watch my own proyects here</h1>
          <ul class="list-disc mx-10">
  <li>Case studies</li>
 
</ul>

<ol class="list-disc mx-10" >

  <li>UX Notion research</li>

</ol>

<ul class="list-disc mx-10">
  <li>UI designs</li>
  
</ul>
          <h1 className='text-transparent text-base  bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 w-[200px] rounded-md font-medium my-2x  mx-8 py-3'>See them</h1>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Cardtwo;
import React from 'react';
import Mobile from '../assets/Mockupbooks.png';

const Cardtwobooks = () => {
  return (
    <a href="https://idus.us.es/bitstream/handle/11441/136173/1/WAOTFG_478.pdf?sequence=1">
    <div className='w-full py-30 px-4  transform   hover:bg-z-600 transition duration-500 hover:scale-105'>
        <div className='w-[90%] mx-auto my-20 rounded-3xl md:drop-shadow-2xl drop-shadow-xl '>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[80%] mx-auto ' src={Mobile} alt='/' />
        <div className='flex flex-col justify-center'>
          <h1 className='md:text-2xl sm:text-xl text-base font-bold  mx-8 py-3'>UX Books </h1>
         
          <ol class="py-3 mx-8" >
<li>As a relatively new field, user experience design (UX design) and user interface design (UI design) continues to grow and evolve. Whether you’re getting ready to launch a career or are already well established in the UI/UX design world, it’s important to keep up with industry trends, learn new techniques, and find inspiration for your work. 

</li>
</ol>
<div className='p-5'></div>
          <ul class="list-disc mx-10">
  <li>Lean UX: Applying Lean Principles to Improve User Experience by Jeff Gothelf and Josh Seiden</li>
 
</ul>


<ol class="list-disc mx-10" >
  
  

  <li>The Design of Everyday Things: Revised and Expanded Edition by Don Norman 

</li>

</ol>

<ul class="list-disc mx-10">
  <li>Greever, T: Articulating Design Decisions </li>
  
</ul>
        </div>
      </div>
      </div>
  
    </div>
    </a>
  );
};

export default Cardtwobooks;
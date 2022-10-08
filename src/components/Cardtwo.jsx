import React from 'react';
import Mobile from '../assets/reversephone.png';

const Cardtwo = () => {
  return (   
    <a href="https://idus.us.es/bitstream/handle/11441/136173/1/WAOTFG_478.pdf?sequence=1">
    <div className='w-full py-30 px-4  transform   hover:bg-z-600 transition duration-500 hover:scale-105'>
        <div className='w-[90%] mx-auto my-20 rounded-3xl md:drop-shadow-2xl drop-shadow-xl '>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[40%] mx-auto ' src={Mobile} alt='/' />
        <div className='flex flex-col justify-center'>
          <h1 className='md:text-2xl sm:text-xl text-base font-bold  mx-8 py-3'>Latest Case Study </h1>
         
          <ol class="py-3 mx-8" >
            
<li>“A case study is a research approach used to generate a deep, multifaceted understanding of a complex topic in its real-life context. It is an established research process that is used in a wide variety of disciplines, particularly in the social sciences” (Crowe, 2011).</li>

</ol>

<div className='p-5'></div>
          <ul class="list-disc mx-10">
  <li>Problem/Solution</li>
 
</ul>



<ol class="list-disc mx-10" >
  
  

  <li>Communication with Stakeholders,Executive intent,Target audience, General functions, Technological limitations, Friendly devices, Business objectives, User person, Empathy map, User journey, Brand attributes</li>

</ol>

<ul class="list-disc mx-10">
  <li>User Flow, Information Arquitecture, Competitors, Budget.</li>
  
</ul>
          <a  className='text-transparent text-base  bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 w-[200px] rounded-md font-medium my-2x  mx-8 py-3'>Learn More</a>
        </div>
      </div>
      </div>
  
    </div>
    </a>
  );
};

export default Cardtwo;
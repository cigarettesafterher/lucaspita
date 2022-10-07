import React from 'react';
import Imagen1 from '../assets/hero.jpg';
import Imagen2 from '../assets/pantalla2.png';
import Imagen3 from '../assets/pantalla5.png';

const Imagegallery = () => {
  return (
    <div className='max-w-[1240px]  sm:visible mx-auto sm:grid md:grid-cols-3 pb-10 '>
   <div class="<card w-96  bg-gray-50 mx-auto rounded-none px-3 hover:bg-z-600 transition duration-500 hover:scale-105 py-10">
  
  <figure><img className='object-cover md:h-[250px] h-[200px] w-full  ' src={Imagen1} />
</figure>
</div>
<div class="card w-96   bg-gray-50 mx-auto rounded-none px-3 hover:bg-z-600 transition duration-500 hover:scale-105 py-10">
  
  <figure><img className='object-cover md:h-[250px] h-[200px] w-full ' src={Imagen2} />
</figure>
</div>
<div class="card w-96  bg-gray-50 mx-auto rounded-none px-3 hover:bg-z-600 transition duration-500 hover:scale-105 py-10">
  
  <figure><img className='object-cover md:h-[250px] h-[200px] w-full ' src={Imagen3} />
</figure>
</div>
</div>
 );
}

export default Imagegallery;
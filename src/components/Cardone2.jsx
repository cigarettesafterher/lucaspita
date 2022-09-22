import React from 'react';
import Imagen1 from '../assets/imagen1.jpg';
import Imagen2 from '../assets/imagen2.jpg';
import Imagen3 from '../assets/imagen3.png';

const Cardone2 = () => {
  return (
    <div className='max-w-[1240px]  sm:visible mx-auto sm:grid md:grid-cols-3 pb-10'>
   <div class="<card w-96  bg-gray-50 mx-auto rounded-none px-3">
  <div class="card-body">
    <h2 class="card-title">Carolina Durante nos sorprende de nuevo!</h2>
    <p>Nuevo tema Casa Kira </p>
  </div>
  <figure><img className='object-cover md:h-[250px] h-[200px] w-full ' src={Imagen1} />
</figure>
</div>
<div class="card w-96   bg-gray-50 mx-auto rounded-none px-3">
  <div class="card-body">
    <h2 class="card-title">El CAAC vuelve!</h2>
    <p>Muchos artistas se reuniran para tocar este 29</p>
  </div>
  <figure><img className='object-cover md:h-[250px] h-[200px] w-full ' src={Imagen2} />
</figure>
</div>
<div class="card w-96  bg-gray-50 mx-auto rounded-none px-3">
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
  </div>
  <figure><img className='object-cover md:h-[250px] h-[200px] w-full ' src={Imagen3} />
</figure>
</div>
</div>
 );
}

export default Cardone2;
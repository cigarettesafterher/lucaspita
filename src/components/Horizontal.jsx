import Imagen2 from '../assets/imagen2.jpg';

import React from 'react';

const Horizontal = () => {
  return (
    <div className="p-3 w-[80%] mx-auto">
    <div className="card card-side rounded-none">
    <figure><img className='object-cover h-full w-full' src={Imagen2} alt='/' />
</figure>
    <div className="card-body ">
      <h2 className="card-title">New movie is released!</h2>
      <p>Click the button to watch on Jetflix app.</p>
      <div className="card-actions justify-end">
     
      </div>
    </div>
  </div>
  </div>
  );
};

export default Horizontal;
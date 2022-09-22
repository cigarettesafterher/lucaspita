

import { Grid, ListItem } from '@mui/material';
import React from 'react';
import Imagen2 from '../assets/imagen2.jpg';
import Imagen1 from '../assets/imagen1.jpg';
import Imagen3 from '../assets/imagen3.png';

const Grid2 = () => {
  return (

    <div className='max-w-[1240px] sm:visible mx-auto '>
      

    <Grid container spacing={1}>
  <Grid xs={3}>
    <ListItem>
    <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/400/arch" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
</ListItem>
  </Grid>
  <Grid xs={3}>
  <ListItem>  
      <div className='max-w-[1240px] flex sm:visible'>
   <div class="card rounded-none">
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p className= 'sm:text-xl text-sm'>If a dog chews shoes whose shoes does he choose?</p>
  </div>
  <figure><img className='object-cover  w-full' src={Imagen3} />
</figure>
</div>
</div></ListItem>
  </Grid>
  <div class="divider"></div>
  <Grid xs={3}>
  <ListItem>
  <div className='max-w-[1240px] sm:visible  '>
   <div class="card rounded-none ">
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p className= 'sm:text-xl text-sm'>If a dog chews shoes whose shoes does he choose?</p>
  </div>
  <figure><img className='object-cover  w-full' src={Imagen2} />
</figure>
</div>
</div>   </ListItem>
  </Grid>
  <Grid xs={3}>
  <ListItem>
  <div className='max-w-[1240px] sm:visible  '>
   <div class="card rounded-none  ">
  <div class="card-body">
    <h2 class="card-title sm:text-base text-base   ">Shoes!</h2>
    <p className= 'sm:text-xl text-sm' >If a dog chews shoes whose shoes does he choose?</p>
  </div>
  <figure><img className='object-cover w-full' src={Imagen1} />
</figure>
</div>
</div>
  </ListItem>
  </Grid>
</Grid>  </div>


  );
};

export default Grid2;
import React from 'react'
import Mobile from '../assets/reversephone.png';
import Twitch from '../assets/twitch.png';


const Carrousel = () => {
  return (
<div className="carousel rounded-box">
  <div className="carousel-item w-[30%] mx-auto">
  <img className='w-[40%] mx-auto ' src={Mobile} alt='/' />
  </div> 
  <div className="carousel-item">
  <img className='w-[40%] mx-auto ' src={Twitch} alt='/' />
  </div> 
  <div className="carousel-item">
    <img src="https://placeimg.com/400/300/arch" alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src="https://placeimg.com/400/300/arch" alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src="https://placeimg.com/400/300/arch" alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src="https://placeimg.com/400/300/arch" alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src="https://placeimg.com/400/300/arch" alt="Burger" />
  </div>
  </div>
  )
}

export default Carrousel
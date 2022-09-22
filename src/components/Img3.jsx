import React from 'react'
import ReactTyped from 'react-typed';
import Imagen3 from '../assets/imagen3.png';


const Img3 = () => {
  return (
    <div className='flex flex-col'>
      <div className=' md:w-[100%] w-[100%] mx-auto'>
       
        <div className=' md:w-[100%] w-[100%] mx-auto bg-black '>
          <img className='object-cover md:h-[500px] h-[200px] w-full' src={Imagen3} />
        </div>

      </div>
      <div className='text-black'>
        <div className='max-w-[800px] mt-[10px] w-full h-full mx-auto text-center flex flex-col justify-center'>
          <h1 className='md:text-4xl sm:text-3xl text-xl font-bold md:py-1'>POP CAAC </h1>
          <div className='flex justify-center items-center'>
            <p className='md:text-4xl sm:text-3xl text-xl font-bold'>vienen grupos muy guays</p>
            <ReactTyped
              className='md:text-4xl sm:text-3xl text-xl font-bold pl-2' strings={['Califato 3/4', 'León Benavente']} typeSpeed={120} backSpeed={140} loop />
          </div>
          <p className='md:text-2xl text-xl font-bold text-gray-500 md:py-3 py-3'>2022 </p>
          <button className='text-transparent text-1xl bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 w-[200px] rounded-md font-medium my-2 mx-auto pt-3 text-blue-400'>Saber Más</button>
        </div>
      </div>
    </div>

  )
}

export default Img3;
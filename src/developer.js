import React from 'react'
import Cardone from './components/Cardone'
import Cardone2 from './components/Cardone2'
import Hero2 from './components/Hero2'
import Potraitdev from './components/Potraitdev'
import Steps from './components/Steps'



function Developer() {
  return (
    <div className='bg-gray-50'>
      <Potraitdev />
      <Hero2/>

      <Steps />

      <Cardone2 />
      <Cardone />



    </div>
  )
}

export default Developer
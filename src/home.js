import React from 'react'
import Cardone from './components/Cardone'
import Cardone2 from './components/Cardone2'
import Hero2 from './components/Hero2'
import Horizontal from './components/Horizontal'
import Paragraph from './components/Paragraph'

import Potrait from './components/Potrait'

import Steps from './components/Steps'

function Home() {
  return (
    
    <div className='bg-gray-50'>
 <Potrait/>


     
 <div class="divider"></div>
 <Paragraph/>
      <Steps/>
      <div class="divider"></div>
      <Cardone/>
      <Cardone2/>
      <div class="divider"></div>
      <Horizontal/>
      <Horizontal/>
      <Horizontal/>
      <Horizontal/>
      <Hero2 />

      
     
    

   
      <div className='bg-gray-50'>
       


    </div>


  

      
      
     
      
      
      
    </div>
  )
}

export default Home
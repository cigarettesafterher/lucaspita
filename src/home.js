import React from 'react'
import Cardone from './components/Cardone'
import Cardone2 from './components/Cardone2'
import Cardtwo from './components/Cardtwo'
import Cardtwobooks from './components/Cardtwobooks'
import Hero from './components/Hero'
import Hero2 from './components/Hero2'
import Hero3 from './components/Hero3'
import Imagegallery from './components/Imagegallery'
import List from './components/List'
import Paragraph from './components/Paragraph'
import Potrait from './components/Potrait'
import Potraitdev from './components/Potraitdev'
import Potraitproject from './components/Potraitproject'
import Potraitux from './components/Potraitux'
import Stats from './components/Stats'
import Steps from './components/Steps'
import Steps2 from './components/Steps2'




function Home() {
  return (
    
    <div className='bg-gray-50'>
      <Potrait />
      <Hero />
      <Cardone2 />
      <Cardone />
     

      <div class="divider"></div>
      <Potraitux />
      <Hero2 />
      <Paragraph/>
      <Steps />
      <Cardtwo />
      <Cardtwobooks />
    


      <div class="divider"></div>
      <Potraitproject />
      <Stats />
      <Imagegallery />
   

      <div class="divider"></div>
      <div className='bg-gray-50'>
        <Potraitdev/>
        <Hero3/>
        <Steps2/>
        <List />
       



    </div>


  

      
      
     
      
      
      
    </div>
  )
}

export default Home
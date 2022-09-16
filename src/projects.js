import React from 'react'
import Cardone from './components/Cardone'
import Cardone2 from './components/Cardone2'
import List from './components/List'
import Potraitproject from './components/Potraitproject'
import Stats from './components/Stats'

function Projects() {
  return (
    <div className='bg-gray-50'>
<Potraitproject/>
<Stats/>
<Cardone2/>
<Cardone/>
<List/>



    </div>
  )
}

export default Projects
import React from 'react'

const Stats = () => {
  return (
    
    <div className='w-full py-8 mx-auto '>
      <div className='md:flex flex-row max-w-[1240px] mx-auto text-center '>
   
  
    <div class="stat">
      <div class="stat-title">Downloads</div>
      <div class="stat-value text-lg md:text-4xl">31K</div>
      <div class="stat-desc">Jan 1st - Feb 1st</div>
    </div>
    
    
    <div class="stat">
      <div class="stat-title">New Users</div>
      <div class="stat-value text-lg md:text-4xl">4,200</div>
      <div class="stat-desc">↗︎ 400 (22%)</div>
    </div>
    
    <div class="stat">
      <div class="stat-title">New Registers</div>
      <div class="stat-value text-lg md:text-4xl">1,200</div>
      <div class="stat-desc">↘︎ 90 (14%)</div>
    </div>
    
  </div>
  </div>
  
  )
}

export default Stats
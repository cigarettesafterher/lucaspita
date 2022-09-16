import React, { useState } from 'react'
import { ViewListIcon, XIcon } from '@heroicons/react/solid'
import { Link} from "react-scroll";


const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)

  }

  return (
    <div className='flex justify-between items-center h-15 max-w-[1240px] mx-auto px-4 text-black '>
      <h1 className=' w-[50px] text-base font-bold '>@lucaspitaperex</h1> 
      <ul className='hidden md:flex'>
        <li className='p-4'>
          <a href='/'>Home</a>
        </li>
        <li className='p-4'>
        <Link to="ux" spy={true} smooth={true} offset={50} duration={500}>User Experience</Link>
        </li>
        <li className='p-4'>
        <Link to="developer" spy={true} smooth={true} offset={100} duration={500}>Front-End</Link>
        </li>
        <li className='p-4'>
        <Link to="hero2" spy={true} smooth={true} offset={100} duration={500}>hero2</Link>
        </li>
        <li className='p-4'>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <XIcon className='h-5 w-5 text-black' /> : <ViewListIcon className='h-5 w-5 text-black' />}
      </div>


      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-white md:hidden ease-in-out duration-500' : 'fixed left-[-100%]'}>
      <h1 className=' w-[50px] text-base font-bold ml-3'>@lucaspitaperex</h1> 

        <ul className='pt-4 '>
          <li className='p-4'>
            <a href='/'>Home</a>
          </li>
          <li className='p-4'>
            <a href='/projects'>Projects</a>
          </li>
          <li className='p-4'>
            <a href='/developer'>Developer</a>
          </li>
          <li className='p-4'>About</li>
          <li className='p-4'>Contact</li>

        </ul>
      </div>
    </div>
  )
}

export default Navbar
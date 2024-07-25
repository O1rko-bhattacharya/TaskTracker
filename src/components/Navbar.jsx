/* eslint-disable no-unused-vars */
import React from 'react'
import img3 from '../assets/icons8-checklist.gif';
const Navbar = () => {
  return (
    <nav className='flex justify-between bg-gradient-to-r from-sky-700 to-cyan-500 text-white italic py-5'>
        <div className='logo'>
            <span className='font-bold text-xl mx-9 flex text-align'>TaskTracker 
              <img className="mx=2 ms-2 h-8 justify-center"src={img3}></img>
            </span>
        </div>
      
        
        <a href='https://github.com/O1rko-bhattacharya' className='hover:font-bold transition-all flex mx-9 text-lg'><img src='https://avatars.githubusercontent.com/u/65491974?v=4'className='w-6 h-6 flex inline rounded'alt='Default image'></img>Github</a>
      
    </nav>
  )
}

export default Navbar

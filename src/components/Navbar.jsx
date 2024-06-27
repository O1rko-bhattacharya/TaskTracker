/* eslint-disable no-unused-vars */
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between  bg-blue-500 text-white py-5'>
        <div className='logo'>
            <span className='font-bold text-xl mx-9'>TaskTracker</span>
        </div>
      
        
        <a href='https://github.com/O1rko-bhattacharya' className='hover:font-bold transition-all flex mx-9 text-lg'><img src='https://avatars.githubusercontent.com/u/65491974?v=4'className='w-6 h-6 flex inline rounded'alt='Default image'></img>Github</a>
      
    </nav>
  )
}

export default Navbar

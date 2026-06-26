import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-8 py-4 sticky top-0 z-50 bg-[#0d0d0f]'>
      <div className='text-white font-semibold text-lg'>
        <span>SV</span>
      </div>
      <ul className='flex gap-6 list-none'>
        <li><Link className='text-gray-400 hover:text-white transition-colors' href="#about">About</Link></li>
        <li><Link className='text-gray-400 hover:text-white transition-colors' href="#projects">Project</Link></li>
        <li><Link className='text-gray-400 hover:text-white transition-colors' href="#contact">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
 
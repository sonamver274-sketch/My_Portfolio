 import React from 'react'
 import Navbar from '@/component/Navbar'
import Hero from '@/component/Hero'
import About from '@/component/About'
import Contact from '@/component/Contact'
import Projects from '@/component/Projects'
import Skill from '@/component/Skill'


 const page = () => {
   return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
    <Skill/>
    <Projects/>
    <Contact/>
    
    </>
    
   )
 }
 
 export default page
 
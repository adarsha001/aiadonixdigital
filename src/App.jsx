import React from 'react'
import GlassNavbar from './commponents/Navbar'

import DarkVeil from './components/DarkVeil';
import Main from './commponents/Home';
import PhoneScroll from './commponents/PhoneScroll';
import ServiceSections from './commponents/ServiceSections';
const App = () => {
  return (
    <>
   <div className='min-h-screen w-full  '>

  

   <GlassNavbar/>
   <Main />
   <ServiceSections/>
   <PhoneScroll/>
   </div>
    </>
  )
}

export default App

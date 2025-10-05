import React from 'react'
import GlassNavbar from './commponents/Navbar'

import DarkVeil from './components/DarkVeil';
import Main from './commponents/main';
import PhoneScroll from './commponents/PhoneScroll';
const App = () => {
  return (
    <>
   <div className='min-h-screen w-full relative '>

  
<div className='h-[100vh]  ' >
  <DarkVeil />
</div>
   <GlassNavbar/>
   <Main />
   <PhoneScroll/>
   </div>
    </>
  )
}

export default App

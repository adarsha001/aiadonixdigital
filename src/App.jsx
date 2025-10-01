import React from 'react'
import GlassNavbar from './commponents/Navbar'
import Aurora from './components/Aurora';
import DarkVeil from './components/DarkVeil';
const App = () => {
  return (
    <>
   <div className='min-h-screen w-full'>

  
<div className='h-[100vh] relative' >
  <DarkVeil />
</div>
   <GlassNavbar/>
   </div>
    </>
  )
}

export default App

import React from 'react';
import GlassNavbar from './commponents/Navbar';
import Main from './commponents/Home';
import PhoneScroll from './commponents/PhoneScroll';
import ServiceSections from './commponents/ServiceSections';

const App = () => {
  return (
    <>
      {/* Style block to import and apply Google Fonts for a unique look */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Poppins:wght@300;400;600&display=swap');
          
          /* Apply Poppins as the default font for the entire application */
          body {
            font-family: 'Poppins', sans-serif;
          }

          /* Utility class for the futuristic heading font */
          /* Apply this to your main headings, like in the Home component: <h1 className="font-orbitron">...</h1> */
          .font-orbitron {
            font-family: 'Orbitron', sans-serif;
          }
        `}
      </style>

      {/* Main container with the gradient background from your Home component example */}
      <div className='min-h-screen w-full bg-gradient-to-tr from-slate-900 via-purple-900 to-slate-900 text-white'>
        
        <GlassNavbar />
        <Main />
        <ServiceSections />
        <PhoneScroll />
        
      </div>
    </>
  );
}

export default App;


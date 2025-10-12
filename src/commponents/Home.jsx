import Aurora from '@/components/Aurora'
import DarkVeil from '@/components/DarkVeil'
import React from 'react'

const Home = () => {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <div className="h-[100vh] relative flex items-center justify-center  bg-gradient-to-tr from-slate-900 via-purple-900 to-slate-900 text-white">
        <Aurora
          colorStops={["#31104F", "#0D0918", "#31134F"]}/>

        <div className="absolute z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Welcome to{' '}
            <div className="relative inline-block mx-5 my-4  " >
              {/* Skewed Box */}
              <div className=" absolute -inset-4 bg-blue-600 transform -skew-x-12 rounded-lg shadow-2xl"></div>
              {/* Text */}
              <span className="relative text-white z-10">Aiadonix Digital</span>
            </div>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Aiadonix is a next-gen digital solutions company that blends 
            <span className="text-amber-300"> AI </span>, automation, and creative 
            <span className="text-amber-300"> technology </span> to accelerate growth, 
            enhance customer experiences, and transform businesses into future-ready leaders.
          </p>
        </div>
      </div>

    
    </div>
  )
}

export default Home

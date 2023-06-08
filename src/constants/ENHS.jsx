import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Navbar, LandingNavbar, Welcome } from '../components'
import {ENCHS_1,
        ENCHS_2,
        ENHS_3,
        ENHS_4,
        ENHS_5,
        ENHS_6,
        ENHS_7, } from '../assets'

const ENHS = () => {
  const { currentUser } = useAuth()

  const [currentImage, setCurrentImage] = useState(0);
  const images = [
                    ENCHS_1,
                    ENCHS_2,
                    ENHS_3,
                    ENHS_4,
                    ENHS_5,
                    ENHS_6,
                    ENHS_7,
                  ];

  const handlePrevClick = () => {
    setCurrentImage((currentImage + images.length - 1) % images.length);
  };

  const handleNextClick = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  return (
    <div className="relative flex md:flex-row flex-col w-full h-full bg-primary">

      <aside className="md:hidden w-full sticky top-0 bg-primary z-30">
              <Welcome />
      </aside>

      <div className={`${currentUser ? ':flex' : 'hidden'}`}>
          <aside className="h-screen sticky top-0">
                <Navbar />
          </aside>        
      </div>

      <div className={`${currentUser ? 'hidden' : 'flex'}`}>
          <aside className="h-screen sticky top-0">
                <LandingNavbar />
          </aside>        
      </div>



      <div className="sm:relative absolute flex flex-col items-center w-full p-10 gap-10 top-40 sm:top-auto">
        <h1 className="font-poppins font-semibold text-2xl text-fontColor">
            Welcome to Esperanza National High School
        </h1>
        <div className="relative sm:h-[600px] sm:w-[800px] h-[450px] w-[350px] flex flex-row bg-slate-700 bg-opacity-80 rounded-xl justify-center sm:items-center">

          <button onClick={handlePrevClick}
                  className="z-10 absolute left-0 top-24 sm:top-auto">

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        className="w-16 h-16 hover:scale-125 stroke-slate-700 transition-all duration-200 ease-out hover:stroke-fontColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>

          </button>

          <div className="absolute sm:h-[590px] sm:w-[790px] h-[250px] w-[330px] rounded-xl overflow-hidden sm:mt-0 mt-2 z-0 bg-red-200">
              <img  className="slide-image"
                    src={images[currentImage]} alt="slider" />    
                     
              <div className="z-30 absolute bottom-0 h-40 w-full overflow-y-scroll scrollbar sm:flex hidden bg-primary bg-opacity-50">
                  <p className="font-poppins font-light text-lg text-white p-3">
                  Esperanza National High School is a picturesque educational institution that offers students a lush, green, and welcoming environment to learn and grow in. With an abundance of trees, flowers, and healthy green grass, Esperanza National provides a refreshing contrast to the typical concrete and brick-lined schools. The school's idyllic atmosphere fosters a positive and energetic learning atmosphere, where students are happy, smart, and actively engaged in their education. Whether studying in the shade of a tree, participating in a sports game on the lush fields, or enjoying a break with friends on the green lawns, Esperanza National provides a unique and inspiring environment for students to thrive in. With such a thriving and supportive atmosphere, it is no wonder that the students at Esperanza National are poised to succeed and make their mark on the world.
                 </p>
              </div>
          </div>

          <button onClick={handleNextClick}
                  className="z-10 absolute right-0 top-24 sm:top-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        className="w-16 h-16 hover:scale-125 stroke-slate-700 transition-all duration-200 ease-out hover:stroke-fontColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>


          </button>

          <div className="sm:hidden flex h-44 w-[330px] absolute bottom-2 overflow-y-scroll">
              <p className="font-poppins font-light text-md text-white p-3">
              Esperanza National High School is a picturesque educational institution that offers students a lush, green, and welcoming environment to learn and grow in. With an abundance of trees, flowers, and healthy green grass, Esperanza National provides a refreshing contrast to the typical concrete and brick-lined schools. The school's idyllic atmosphere fosters a positive and energetic learning atmosphere, where students are happy, smart, and actively engaged in their education. Whether studying in the shade of a tree, participating in a sports game on the lush fields, or enjoying a break with friends on the green lawns, Esperanza National provides a unique and inspiring environment for students to thrive in. With such a thriving and supportive atmosphere, it is no wonder that the students at Esperanza National are poised to succeed and make their mark on the world.
              </p>            
          </div>

        </div>

      </div>
    </div>
  )
}

export default ENHS
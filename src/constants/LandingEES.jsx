import React, { useState } from 'react'
import { LandingNavbar, LandingWelcomePage  } from '../components'
import {EES_1,
        EES_2,
        EES_3,
        EES_4, } from '../assets'

const LandingEES = () => {

  const [currentImage, setCurrentImage] = useState(0);
  const images = [
                  EES_1,
                  EES_2,
                  EES_3,
                  EES_4,
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
              <LandingWelcomePage  />
      </aside>
   



      <aside className="h-screen sticky top-0">
                <LandingNavbar />
      </aside>        
 



      <div className="sm:relative absolute flex flex-col items-center w-full p-10 gap-10 top-40 sm:top-auto">
        <h1 className="font-poppins font-semibold text-2xl text-fontColor">
            Welcome to Esperanza Elementary School
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
                  Esperanza Elementary School is a gem of an educational institution, where nature and leadership come together in perfect harmony. With an abundance of trees, flowers, and green grass, Esperanza Elementary provides an idyllic and serene environment for its students to learn and grow in. This lush environment sets the stage for a nurturing and inspiring atmosphere, where students are encouraged to aspire to greatness and become the leaders of tomorrow. The school's commitment to leadership development is evident in its curriculum and extracurricular activities, which provide students with the tools and opportunities to grow into confident and capable leaders. With an excellent faculty and a supportive community, Esperanza Elementary is the perfect place for students to embark on their journey towards leadership and success. So if you're looking for a school that will help your child grow into the best version of themselves, look no further than Esperanza Elementary - where the future leaders of tomorrow are shaped and nurtured.
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
                      Esperanza Elementary School is a gem of an educational institution, where nature and leadership come together in perfect harmony. With an abundance of trees, flowers, and green grass, Esperanza Elementary provides an idyllic and serene environment for its students to learn and grow in. This lush environment sets the stage for a nurturing and inspiring atmosphere, where students are encouraged to aspire to greatness and become the leaders of tomorrow. The school's commitment to leadership development is evident in its curriculum and extracurricular activities, which provide students with the tools and opportunities to grow into confident and capable leaders. With an excellent faculty and a supportive community, Esperanza Elementary is the perfect place for students to embark on their journey towards leadership and success. So if you're looking for a school that will help your child grow into the best version of themselves, look no further than Esperanza Elementary - where the future leaders of tomorrow are shaped and nurtured.
              </p>            
          </div>

        </div>

      </div>
    </div>
  )
}

export default LandingEES
import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Navbar, LandingNavbar, Welcome } from '../components'
import {Brgy_Hall_1,
        Brgy_Hall_2,
        Brgy_Hall_3,
        Brgy_Hall_4,
        Brgy_Hall_5, } from '../assets'

const BrgyHall = () => {
  const { currentUser } = useAuth()

  const [currentImage, setCurrentImage] = useState(0);
  const images = [
                  Brgy_Hall_1,
                  Brgy_Hall_2,
                  Brgy_Hall_3,
                  Brgy_Hall_4,
                  Brgy_Hall_5,
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
            Welcome to Barangay Esperanza Plaza
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
                  Barangay Esperanza Plaza is a beacon of hope for its citizens, offering a central hub for accessing important government programs and services. This community space is designed to make it easy for residents to get the support they need, when they need it. With the convenience of having all the necessary resources in one place, citizens will be able to quickly and efficiently access the programs and services they need to improve their lives. Whether it's obtaining crucial information about government benefits, or seeking assistance in the event of a calamity, Barangay Esperanza Plaza is there to help. With its central location and focus on serving the needs of its citizens, Barangay Esperanza Plaza is a valuable resource for everyone in the community. So if you're looking for a place that truly cares about its citizens and is dedicated to improving their lives, look no further than Barangay Esperanza Plaza.
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
              Barangay Esperanza Plaza is a beacon of hope for its citizens, offering a central hub for accessing important government programs and services. This community space is designed to make it easy for residents to get the support they need, when they need it. With the convenience of having all the necessary resources in one place, citizens will be able to quickly and efficiently access the programs and services they need to improve their lives. Whether it's obtaining crucial information about government benefits, or seeking assistance in the event of a calamity, Barangay Esperanza Plaza is there to help. With its central location and focus on serving the needs of its citizens, Barangay Esperanza Plaza is a valuable resource for everyone in the community. So if you're looking for a place that truly cares about its citizens and is dedicated to improving their lives, look no further than Barangay Esperanza Plaza.
              </p>            
          </div>

        </div>

      </div>
    </div>
  )
}

export default BrgyHall
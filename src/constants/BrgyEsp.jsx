import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Navbar, LandingNavbar, Welcome } from '../components'
import {ESP_1,
        ESP_2,
        ESP_3, } from '../assets'

const BrgyEsp = () => {
  const { currentUser } = useAuth()

  const [currentImage, setCurrentImage] = useState(0);
  const images = [
                  ESP_1,
                  ESP_2,
                  ESP_3,
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
            Welcome to Barangay Esperanza
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
                  Barangay Esperanza is a true gem of a community, offering residents and visitors alike a warm, friendly, and peaceful environment to live and thrive in. With its active and welcoming community, Barangay Esperanza is a place where people truly care about each other and are always ready to lend a helping hand. The people of this community are well-known for their generosity and hospitality, making visitors feel welcome and at home in their midst. The beauty of the natural environment, with its abundance of trees, plants, and grass, adds to the charm and appeal of Barangay Esperanza. These lush greenery provide a refreshing feeling and cool air that create a calm and rejuvenating atmosphere, perfect for unwinding and relaxing after a busy day. Whether you're a resident or a visitor, Barangay Esperanza is a community that you will quickly fall in love with. With its active and friendly residents, peaceful and inviting atmosphere, and stunning natural surroundings, Barangay Esperanza is the perfect place to call home.
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
              Barangay Esperanza is a true gem of a community, offering residents and visitors alike a warm, friendly, and peaceful environment to live and thrive in. With its active and welcoming community, Barangay Esperanza is a place where people truly care about each other and are always ready to lend a helping hand. The people of this community are well-known for their generosity and hospitality, making visitors feel welcome and at home in their midst. The beauty of the natural environment, with its abundance of trees, plants, and grass, adds to the charm and appeal of Barangay Esperanza. These lush greenery provide a refreshing feeling and cool air that create a calm and rejuvenating atmosphere, perfect for unwinding and relaxing after a busy day. Whether you're a resident or a visitor, Barangay Esperanza is a community that you will quickly fall in love with. With its active and friendly residents, peaceful and inviting atmosphere, and stunning natural surroundings, Barangay Esperanza is the perfect place to call home.
              </p>            
          </div>

        </div>

      </div>
    </div>
  )
}

export default BrgyEsp
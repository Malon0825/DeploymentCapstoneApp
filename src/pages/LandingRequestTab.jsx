import React from 'react'
import { useState } from 'react'
import { clearance } from '../assets'

const LandingRequestTab = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <div className="relative h-[350px] w-[55vw]">


      <div className="relative">

          <div className="ml-20 flex flex-col gap-10">

                <div className="relative top-2">

                      <div className="text-white text-2xl font-poppins
                                      transition-all duration-300
                                    hover:text-fontColor ease-in-out">
                        Make a request
                      </div>

                </div>

                <div className="flex bg-gray-700 bg-opacity-25 w-[48vw] h-[250px]
                                  rounded-2xl">
                  
                  <div className="flex relative top-2 left-2 rounded-lg h-[235px] w-[15vh]
                                  overflow-hidden lg:w-72 xl:w-96 ">

                      <div className={`${toggle ? 'toggleOn' : 'toggleOff'} relative z-30 w-[390px] h-[235px] bg-navbar bg-opacity-90
                           rounded-lg border-fontColor border-2 sidebar items-center justify-center`}>

                            <h1 className="font-poppins text-fontColor text-2xl font-medium">
                              Please login first..!
                            </h1>
                              
                      </div>

                      <img src={clearance} alt="Barangay Clearance Photo" 
                      className="flex absolute w-full h-full hover:scale-125 
                      transition-all duration-500 ease-in-out 
                      cursor-pointer"/>

                  </div>

                  <div className="realtive h-[235px] w-[150px]
                                  flex flex-col xl:w-[500px] lg:w-[28vw] sm:w-[350px]">

                    <div className="relative m-6 flex flex-col gap-3">

                          <h1 className="flex text-white font-poppins text-xl 
                                          top-8 hover:text-fontColor"
                                          >Certificate of Barangay Clearance:
                          </h1>

                          <p className="flex text-slate-400 font-poppins
                                          w-[200px] hover:text-slate-300 sm:w-[250px] md:w-[300px]
                                          lg:w-[25vw] xl:w-[400px]"
                                          >Barangay Clearance is a prerequisite document in acquiring a 
                                            Mayor's Permit. It is obtained from the barangay where your 
                                            business is located.
                          </p>

                    </div>

                    
                    <div className="relative flex flex-row justify-center">

                      <button className="text-white bg-fontColor font-poppins h-10 w-40 rounded-2xl
                                          hover:bg-slate-700 hover:text-fontColor transition-all
                                          duration-300 ease-in-out xl:w-80 lg:w-60"
                              onClick={() => setToggle((prev) => !prev)}
                        >View detail
                      </button>
                      
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                        class="w-10 h-10 mx-8 cursor-pointer hover:bg-slate-700 rounded-lg hover:scale-110 
                              hover:stroke-fontColor transition-all duration-500 ease-linear">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                      </svg>

                    </div>

          </div>
        </div>
        </div>
      </div>

    </div>
  )
}

export default LandingRequestTab
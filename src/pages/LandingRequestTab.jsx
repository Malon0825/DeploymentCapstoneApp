import React from 'react'
import { useState } from 'react'
import { clearance } from '../assets'

const LandingRequestTab = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <div className="relative w-full">


      <div className="relative">

          <div className="xs:ml-20 xs:mr-20 lg:mr-10 lg:ml-10 ml-10 mr-10 flex flex-col xs:gap-10 gap-5">

                <div className="relative sm:top-2">

                      <div className="sm:text-white text-fontColor xl:text-2xl text-xl font-poppins
                                      transition-all duration-300 cursor-pointer
                                    hover:text-fontColor ease-in-out"
                           onClick={() => setToggle((prev) => !prev)}>
                        Make a request
                      </div>

                </div>

                <div className="relative flex bg-gray-700 bg-opacity-25 xs:w-[600px] xs:h-[250px] w-[310px] h-[150px]
                                  rounded-2xl">
                  
                  <div className="relative mt-2 ml-2 rounded-lg xs:w-[235px] xs:h-[235px] w-[135px] h-[135px] overflow-hidden shrink-0">

                      <div className={`${toggle ? 'toggleOn' : 'toggleOff'} absolute z-30 w-full h-full bg-navbar bg-opacity-90
                           rounded-lg border-fontColor border-2 sidebar items-center justify-center`}>

                            <h1 className="font-poppins text-fontColor text-center xs:text-2xl text-xs font-medium">
                              Please login first..!
                            </h1>
                              
                      </div>

                      <img src={clearance} alt="Barangay Clearance Photo" 
                      className="flex absolute w-full h-full hover:scale-125 
                      transition-all duration-500 ease-in-out 
                      cursor-pointer"/>

                  </div>

                  <div className="realtive w-full flex flex-col items-center xs:justify-start justify-center">

                        <div className="relative sm:m-6 m-2 flex flex-col gap-1">

                              <h1 className="text-white font-poppins xs:text-xl text-sm md:text-start text-center
                                              top-8 hover:text-fontColor transition-all duration-300 ease-in-out"
                                              >Certificate of Barangay Clearance:
                              </h1>

                              <p className="sm:flex hidden text-slate-400 font-poppins text-sm md:text-base
                                            sm:text-center md:text-start hover:text-slate-300 transition-all duration-300 ease-in-out"
                                              >Barangay Clearance is a prerequisite document in acquiring a 
                                                Mayor's Permit. It is obtained from the barangay where your 
                                                business is located.
                              </p>

                        </div>

                        
                        <div className="flex flex-row xs:absolute bottom-8 md:bottom-2">

                          <button className="text-white bg-fontColor font-poppins rounded-xl
                                              hover:bg-slate-700 hover:text-fontColor transition-all relative
                                              duration-300 ease-in-out xl:w-44 sm:w-36 w-24 sm:text-lg xl:text-xl text-sm"
                                  onClick={() => setToggle((prev) => !prev)}
                            >View detail
                          </button>
                          

                        </div>

                  </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default LandingRequestTab
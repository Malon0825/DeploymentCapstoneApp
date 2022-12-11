import React, { useState } from 'react'
import { clearance } from '../assets'
import { useNavigate } from 'react-router'

const Request = () => {

  const [toggle, setToggle] = useState(false)

  let navigate = useNavigate()

  return (

    <div className="relative w-full">


      <div className="relative">

          <div className="xs:ml-20 xs:mr-20 lg:mr-10 lg:ml-10 ml-10 mr-10 flex flex-col xs:gap-10 gap-5">

                <div className="relative sm:top-2">

                      <a className="sm:text-white text-fontColor sm:text-2xl text-xl font-poppins
                                      transition-all duration-300
                                    hover:text-fontColor ease-in-out"
                          onClick={() => navigate("/request")}>
                        Make a request
                      </a>

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
                                              hover:bg-slate-700 hover:text-fontColor transition-all relative sm:left-5
                                              duration-300 ease-in-out lg:w-52 sm:w-44 w-24 sm:text-xl text-sm"
                                  onClick={() => setToggle((prev) => !prev)}
                            >View detail
                          </button>
                          
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                            class="xs:flex hidden w-10 h-10 mx-8 cursor-pointer hover:bg-slate-700 rounded-lg hover:scale-110 
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

export default Request
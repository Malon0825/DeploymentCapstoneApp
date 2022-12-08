import React from 'react'
import { tour, tour1, tour2 } from '../assets'

const LandingTourTab = () => {
  return (
    <div className="relative mt-[-15px] w-[55vw] h-[450px]">

          <div className="relative flex flex-row left-20 w-[48vw]">

                <a className="text-white text-2xl font-poppins
                                transition-all duration-3000 cursor-pointer
                              hover:text-fontColor ease-in-out"
                    href='/landingtour'
                  >Explore our place
                </a>

                <a href='/landingtour'
                   className="absolute right-0 text-lg font-poppins text-white 
                                  hover:text-fontColor transition-all ease-in-out
                                  duration-300"
                  >See all
                </a>
          </div>

          <div className="flex flex-row h-[450px]">

                <div className="flex flex-row relative left-[75px]
                                top-6 rounded-2xl">

                      <div className="relative m-2 w-[200px] h-[400px]
                                      rounded-xl bg-gray-700 bg-opacity-25
                                      xl:w-[300px] lg:w-[250px] md:w-[220px]">

                              <div className="h-[200px] overflow-hidden
                                              rounded-xl m-2">

                                <img src={tour1} alt="" 
                                  className="flex w-full h-full hover:scale-125 
                                  transition-all duration-500 ease-in-out 
                                  cursor-pointer"/>

                              </div>
                              
                              <div className="flex flex-col m-3 gap-3">

                                  <h1 className="font-poppins text-white text-xl
                                                hover:text-fontColor ease-linear
                                                transition-all duration-300">
                                    Barangay Plaza
                                  </h1>

                                  <p className="text-slate-400 font-poppins text-sm
                                                  hover:text-slate-300 ease-linear
                                                  transition-all duration-300 overflow-hidden">
                                    Our plaza is one of the most safest place from young
                                    hunters. We implement strong rules against lolicons
                                    in our place.
                                  </p>

                              </div>
                
                      </div>

                </div>

                <div className="flex flex-row relative left-[75px]
                                top-6 rounded-2xl">

                      <div className="relative m-2 w-[200px] h-[400px]
                                      rounded-xl bg-gray-700 bg-opacity-25
                                      xl:w-[300px] lg:w-[250px] md:w-[220px]">

                              <div className="h-[200px] overflow-hidden
                                              rounded-xl m-2">

                                <img src={tour2} alt="" 
                                  className="flex w-full h-full hover:scale-125 
                                  transition-all duration-500 ease-in-out 
                                  cursor-pointer"/>

                              </div>
                              
                              <div className="flex flex-col m-3 gap-3">

                                  <h1 className="font-poppins text-white text-xl
                                                hover:text-fontColor ease-linear
                                                transition-all duration-300">
                                    Esperanza Elementary School
                                  </h1>

                                  <p className="text-slate-400 font-poppins text-sm
                                                  hover:text-slate-300 ease-linear
                                                  transition-all duration-300 overflow-hidden">
                                    Our plaza is one of the most safest place from young
                                    hunters. We implement strong rules against lolicons
                                    in our place.
                                  </p>

                              </div>
                
                      </div>

                </div>

                <div className="flex flex-row relative left-[75px]
                                top-6 rounded-2xl">

                      <div className="relative m-2 w-[200px] h-[400px]
                                      rounded-xl bg-gray-700 bg-opacity-25
                                      xl:w-[300px] lg:w-[250px] md:w-[220px]">

                              <div className="h-[200px] overflow-hidden
                                              rounded-xl m-2">

                                <img src={tour} alt="" 
                                  className="flex w-full h-full hover:scale-125 
                                  transition-all duration-500 ease-in-out 
                                  cursor-pointer"/>

                              </div>
                              
                              <div className="flex flex-col m-3 gap-3">

                                  <h1 className="font-poppins text-white text-xl
                                                hover:text-fontColor ease-linear
                                                transition-all duration-300">
                                    Esperanza National High School
                                  </h1>

                                  <p className="text-slate-400 font-poppins text-sm
                                                  hover:text-slate-300 ease-linear
                                                  transition-all duration-300 overflow-hidden">
                                    Our plaza is one of the most safest place from young
                                    hunters. We implement strong rules against lolicons
                                    in our place.
                                  </p>

                              </div>
                
                      </div>

                </div>

                

                
          </div>

    </div>
  )
}

export default LandingTourTab
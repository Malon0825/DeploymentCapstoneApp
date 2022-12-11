import React from 'react'
import { tour, tour1, tour2 } from '../assets'

const Tour = () => {
  return (
    <div className="relative sm:w-[55vw] w-screen">

      <div className="sm:ml-24 md:ml-8 m-10 flex flex-col sm:gap-0 gap-6">


          <div className="relative flex flex-row sm:ml-10 md:ml-20 lg:ml-10 w-[48vw]">

                <a className="sm:text-white text-fontColor sm:text-2xl text-xl font-poppins
                                transition-all duration-3000 cursor-pointer
                              hover:text-fontColor ease-in-out"
                    href='/landingtour'
                  >Explore our place
                </a>

                <a href='/landingtour'
                   className="sm:flex absolute hidden right-0 text-lg font-poppins text-white 
                                  hover:text-fontColor transition-all ease-in-out
                                  duration-300"
                  >See all
                </a>
          </div>

          <div className="flex flex-row gap-4 sm:overflow-auto overflow-scroll xs:scrollbar xl:overflow-hidden sm:ml-10 md:ml-20 lg:ml-10 xl:ml-10">

                <div className="flex flex-row relative
                                sm:mt-6 rounded-2xl">

                      <div className="relative w-[200px] sm:h-[400px] h-[380px]
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

                                  <h1 className="font-poppins text-white sm:text-base
                                                hover:text-fontColor ease-linear
                                                transition-all duration-300">
                                    Barangay Plaza
                                  </h1>

                                  <p className="text-slate-400 font-poppins sm:text-sm text-xs
                                                  hover:text-slate-300 ease-linear
                                                  transition-all duration-300 overflow-hidden">
                                    Our plaza is one of the most safest place from young
                                    hunters. We implement strong rules against lolicons
                                    in our place.
                                  </p>

                              </div>
                
                      </div>

                </div>

                <div className="flex flex-row relative 
                                sm:mt-6 rounded-2xl">

                      <div className="relative w-[200px] sm:h-[400px] h-[380px]
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

                                  <h1 className="font-poppins text-white sm:text-base
                                                hover:text-fontColor ease-linear
                                                transition-all duration-300">
                                    Esperanza National High School
                                  </h1>

                                  <p className="text-slate-400 font-poppins sm:text-sm text-xs
                                                  hover:text-slate-300 ease-linear
                                                  transition-all duration-300 overflow-hidden">
                                    Our plaza is one of the most safest place from young
                                    hunters. We implement strong rules against lolicons
                                    in our place.
                                  </p>

                              </div>
                
                      </div>

                </div>

                <div className="flex flex-row 
                                sm:mt-6 rounded-2xl">

                      <div className="relative w-[200px] sm:h-[400px] h-[380px]
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

                                  <h1 className="font-poppins text-white sm:text-base
                                                hover:text-fontColor ease-linear
                                                transition-all duration-300">
                                    Esperanza Elementary School
                                  </h1>

                                  <p className="text-slate-400 font-poppins sm:text-sm text-xs
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

    </div>
  )
}

export default Tour
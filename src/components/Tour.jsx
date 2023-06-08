import React from 'react'
import { tour, tour1, tour2 } from '../assets'
import { useNavigate } from 'react-router'

const Tour = () => {

  let navigate = useNavigate()

  
  return (
    <div className="relative sm:w-full w-screen h-[650px] sm:h-full">

      <div className="sm:ml-24 md:ml-0 xl:ml-20 m-10 flex flex-col sm:gap-0 gap-6">


          <div className="relative flex flex-row sm:ml-10 md:ml-20 lg:ml-10 w-[48vw]">

                <a className="sm:text-white text-fontColor xl:text-2xl text-xl font-poppins
                                transition-all duration-3000 cursor-pointer
                              hover:text-fontColor ease-in-out"
                    onClick={() => (navigate('/tour'))}
                  >Explore our place
                </a>

          </div>

          <div className="flex flex-row gap-4 sm:overflow-auto overflow-scroll xs:scrollbar sm:ml-10 md:ml-20 lg:ml-10 xl:ml-10">

                <div className="flex flex-row relative
                                sm:mt-6 rounded-2xl">

                      <div className="relative xs:w-[250px] w-[200px] lg:h-[500px] h-full
                                      lg:w-[350px]
                                      rounded-xl bg-gray-700 bg-opacity-25">

                              <div className="lg:h-[250px] xs:h-[200px] h-[150px] overflow-hidden
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

                        <div className="relative xs:w-[250px] w-[200px] lg:h-[500px] h-full
                                      lg:w-[350px]
                                      rounded-xl bg-gray-700 bg-opacity-25">

                              <div className="lg:h-[250px] xs:h-[200px] h-[150px] overflow-hidden
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
                      <div className="relative xs:w-[250px] w-[200px] lg:h-[500px] h-full
                                      lg:w-[350px]
                                      rounded-xl bg-gray-700 bg-opacity-25">

                              <div className="lg:h-[250px] xs:h-[200px] h-[150px] overflow-hidden
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
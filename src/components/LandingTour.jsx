import React from 'react'
import { tour1, tour2, tour3, tour } from '../assets'
import { LandingNavbar, LandingWelcomePage } from '../components'

const LandingTour = () => {
  return (

    <div className="relative flex md:flex-row flex-col w-full bg-primary">


          <aside className="md:flex hidden h-screen sticky top-0">
                <LandingNavbar />
          </aside>

          <aside className="md:hidden flex sticky top-0 z-10 bg-primary">
                <LandingWelcomePage />
          </aside>
          

          <div className="flex flex-col w-full md:mt-20 gap-10">
                

                    <div className="w-full">

                        <h1 className="text-fontColor sm:text-4xl text-xl font-poppins sm:font-semibold
                                              transition-all duration-300 cursor-pointer xs:text-center xs:m-0 ml-10
                                            hover:text-slate-300 ease-in-out">
                          Barangay Halloween Activity
                        </h1>              
                    </div>

                    <div className="relative md:mt-20 grid lg:grid-cols-2 lg:grid-rows-2 gap-14 cursor-pointer xl:ml-28 justify-center lg:m-10">

                        <div className="relative sm:h-[300px] sm:w-[500px] w-80 h-48 bg-slate-700 gap-2
                                        bg-opacity-25 rounded-xl flex flex-row items-center">

                                  <div className="h-44 w-40 sm:w-[250px] sm:h-[285px] overflow-hidden
                                                  rounded-xl m-2 shrink-0">

                                      <img src={tour1}
                                            className="flex w-full h-full hover:scale-125 
                                            transition-all duration-500 ease-in-out 
                                            cursor-pointer"/>
                                  </div>

                                  <div className="relative flex flex-col text-center gap-1 sm:m-1">

                                    <h1 className="font-poppins text-fontColor sm:text-2xl">
                                      Place Name
                                    </h1>

                                    <p className="text-white font-poppins">
                                      Place discription, overview and history.
                                    </p>

                                  </div>

                        </div>

                        <div className="relative sm:h-[300px] sm:w-[500px] w-80 h-48 bg-slate-700 gap-2
                                        bg-opacity-25 rounded-xl flex flex-row items-center">

                                  <div className="h-44 w-40 sm:w-[250px] sm:h-[285px] overflow-hidden
                                                  rounded-xl m-2 shrink-0">

                                      <img src={tour2}
                                            className="flex w-full h-full hover:scale-125 
                                            transition-all duration-500 ease-in-out 
                                            cursor-pointer"/>
                                  </div>

                                  <div className="relative flex flex-col text-center gap-1 sm:m-1">

                                    <h1 className="font-poppins text-fontColor sm:text-2xl">
                                      Place Name
                                    </h1>

                                    <p className="text-white font-poppins">
                                      Place discription, overview and history.
                                    </p>

                                  </div>

                        </div>

                        <div className="relative sm:h-[300px] sm:w-[500px] w-80 h-48 bg-slate-700 gap-2
                                        bg-opacity-25 rounded-xl flex flex-row items-center">

                                  <div className="h-44 w-40 sm:w-[250px] sm:h-[285px] overflow-hidden
                                                  rounded-xl m-2 shrink-0">

                                      <img src={tour3}
                                            className="flex w-full h-full hover:scale-125 
                                            transition-all duration-500 ease-in-out 
                                            cursor-pointer"/>
                                  </div>

                                  <div className="relative flex flex-col text-center gap-1 sm:m-1">

                                    <h1 className="font-poppins text-fontColor sm:text-2xl">
                                      Place Name
                                    </h1>

                                    <p className="text-white font-poppins">
                                      Place discription, overview and history.
                                    </p>

                                  </div>

                        </div>

                        <div className="relative sm:h-[300px] sm:w-[500px] w-80 h-48 bg-slate-700 gap-2
                                        bg-opacity-25 rounded-xl flex flex-row items-center">

                                  <div className="h-44 w-40 sm:w-[250px] sm:h-[285px] overflow-hidden
                                                  rounded-xl m-2 shrink-0">

                                      <img src={tour}
                                            className="flex w-full h-full hover:scale-125 
                                            transition-all duration-500 ease-in-out 
                                            cursor-pointer"/>
                                  </div>

                                  <div className="relative flex flex-col text-center gap-1 sm:m-1">

                                    <h1 className="font-poppins text-fontColor sm:text-2xl">
                                      Place Name
                                    </h1>

                                    <p className="text-white font-poppins">
                                      Place discription, overview and history.
                                    </p>

                                  </div>

                        </div>

                    </div>

                </div>


      </div>
  )
}

export default LandingTour
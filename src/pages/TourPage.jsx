import React from 'react'
import { tour1, tour2, tour3, tour } from '../assets'
import { Navbar } from '../components'

const TourPage = () => {
  return (

    <div className="relative flex w-full h-full bg-primary scroll-auto">


          <aside className="h-screen sticky top-0">
                <Navbar />
          </aside>

          <div className="flex w-screen">
                
                <div className="m-20">
                    <h1 className="text-fontColor text-4xl font-poppins font-semibold
                                    transition-all duration-300 cursor-pointer
                                  hover:text-slate-300 ease-in-out">
                      Welcome to Barangay Esperanza
                    </h1>

                    <div className="relative top-20 grid grid-cols-2 grid-rows-2 gap-14 left-10 cursor-pointer">

                        <div className="relative xl:w-[600px] xl:h-[300px] bg-slate-700 gap-2
                                        bg-opacity-25 rounded-xl ml-3 flex flex-row items-center">

                                  <div className="h-[280px] overflow-hidden w-[300px] shrink-0
                                                  rounded-xl m-2">

                                    <img src={tour1} alt="" 
                                      className="flex w-full h-full hover:scale-125 
                                      transition-all duration-500 ease-in-out 
                                      cursor-pointer"/>
                                  </div>

                                  <div className="relative flex flex-col items-center">
                                    <h1 className="font-poppins text-fontColor text-xl">
                                      Place Name
                                    </h1>
                                    <p className="text-white font-poppins top-2">
                                      Place discription, overview and history.
                                    </p>
                                  </div>

                        </div>

                        <div className="relative xl:w-[600px] xl:h-[300px] bg-slate-700 gap-2
                                        bg-opacity-25 rounded-xl ml-3 flex flex-row items-center">

                                  <div className="h-[280px] overflow-hidden w-[300px] shrink-0
                                                  rounded-xl m-2">

                                    <img src={tour2} alt="" 
                                      className="flex w-full h-full hover:scale-125 
                                      transition-all duration-500 ease-in-out 
                                      cursor-pointer"/>
                                  </div>

                                  <div className="relative flex flex-col items-center">
                                    <h1 className="font-poppins text-fontColor text-xl">
                                      Place Name
                                    </h1>
                                    <p className="text-white font-poppins top-2">
                                      Place discription, overview and history.
                                    </p>
                                  </div>

                        </div>

                        <div className="relative xl:w-[600px] xl:h-[300px] bg-slate-700 gap-2
                                        bg-opacity-25 rounded-xl ml-3 flex flex-row items-center">

                                  <div className="h-[280px] overflow-hidden w-[300px] shrink-0
                                                  rounded-xl m-2">

                                    <img src={tour3} alt="" 
                                      className="flex w-full h-full hover:scale-125 
                                      transition-all duration-500 ease-in-out 
                                      cursor-pointer"/>
                                  </div>

                                  <div className="relative flex flex-col items-center">
                                    <h1 className="font-poppins text-fontColor text-xl">
                                      Place Name
                                    </h1>
                                    <p className="text-white font-poppins top-2">
                                      Place discription, overview and history.
                                    </p>
                                  </div>

                        </div>

                        <div className="relative xl:w-[600px] xl:h-[300px] bg-slate-700 gap-2
                                        bg-opacity-25 rounded-xl ml-3 flex flex-row items-center">

                                  <div className="h-[280px] overflow-hidden w-[300px] shrink-0
                                                  rounded-xl m-2">

                                    <img src={tour} alt="" 
                                      className="flex w-full h-full hover:scale-125 
                                      transition-all duration-500 ease-in-out 
                                      cursor-pointer"/>
                                  </div>

                                  <div className="relative flex flex-col items-center">
                                    <h1 className="font-poppins text-fontColor text-xl">
                                      Place Name
                                    </h1>
                                    <p className="text-white font-poppins top-2">
                                      Place discription, overview and history.
                                    </p>
                                  </div>

                        </div>

                    </div>

                </div>
          </div>

      </div>
  )
}

export default TourPage
import React from 'react'
import { ESP_2, ENCHS_1, Brgy_Hall_2, EES_4 } from '../assets'
import { Navbar, Welcome } from '../components'
import { useNavigate } from 'react-router-dom'

const TourPage = () => {

  let navigate = useNavigate()

  return (

    <div className="relative flex md:flex-row flex-col w-full bg-primary">


          <aside className="md:flex hidden h-screen sticky top-0">
                <Navbar />
          </aside>

          <aside className="md:hidden flex sticky top-0 z-10 bg-primary">
                <Welcome />
          </aside>
          

          <div className="flex flex-col w-full md:mt-20 mb-10 md:mb-0 gap-10">
                

                    <div className="w-full">

                        <h1 className="text-fontColor sm:text-4xl text-xl font-poppins sm:font-semibold
                                              transition-all duration-300 cursor-pointer xs:text-center xs:m-0 ml-10
                                            hover:text-slate-300 ease-in-out">
                          Welcome to Barangay Esperanza
                        </h1>              
                    </div>

                    <div className="relative md:mt-20 grid lg:grid-cols-2 lg:grid-rows-2 gap-14 cursor-pointer xl:ml-28 justify-center lg:m-10">

                      <div className="relative sm:h-[300px] sm:w-[500px] w-80 h-48 bg-slate-700 gap-2
                                        bg-opacity-25 rounded-xl flex flex-row items-center" 
                              onClick={() => (navigate("/barangayesperanza"))}>

                                  <div className="h-44 w-40 sm:w-[250px] sm:h-[285px] overflow-hidden
                                                  rounded-xl m-2 shrink-0">

                                      <img src={ESP_2}
                                            className="flex w-full h-full hover:scale-125 
                                            transition-all duration-500 ease-in-out 
                                            cursor-pointer"/>
                                  </div>

                                  <div className="relative flex flex-col text-center gap-1 sm:m-1">

                                    <h1 className="font-poppins text-fontColor sm:text-2xl">
                                     Barangay Esperanza
                                    </h1>

                                    <p className="text-white font-poppins">
                                      Explore Now
                                    </p>

                                  </div>

                        </div>


                        <div className="relative sm:h-[300px] sm:w-[500px] w-80 h-48 bg-slate-700 gap-2
                                        bg-opacity-25 rounded-xl flex flex-row items-center"
                              onClick={() => (navigate("/highschool"))}>

                                  <div className="h-44 w-40 sm:w-[250px] sm:h-[285px] overflow-hidden
                                                  rounded-xl m-2 shrink-0">

                                      <img src={ENCHS_1}
                                            className="flex w-full h-full hover:scale-125 
                                            transition-all duration-500 ease-in-out 
                                            cursor-pointer"/>
                                  </div>

                                  <div className="relative flex flex-col text-center gap-1 sm:m-1">

                                    <h1 className="font-poppins text-fontColor sm:text-2xl">
                                      Esperanza National High School
                                    </h1>

                                    <p className="text-white font-poppins">
                                    Explore Now
                                    </p>

                                  </div>

                        </div>

                        <div className="relative sm:h-[300px] sm:w-[500px] w-80 h-48 bg-slate-700 gap-2
                                        bg-opacity-25 rounded-xl flex flex-row items-center"
                              onClick={() => (navigate("/barangayplaza"))}>

                                  <div className="h-44 w-40 sm:w-[250px] sm:h-[285px] overflow-hidden
                                                  rounded-xl m-2 shrink-0">

                                      <img src={Brgy_Hall_2}
                                            className="flex w-full h-full hover:scale-125 
                                            transition-all duration-500 ease-in-out 
                                            cursor-pointer"/>
                                  </div>

                                  <div className="relative flex flex-col text-center gap-1 sm:m-1">

                                    <h1 className="font-poppins text-fontColor sm:text-2xl">
                                      Barangay Plaza
                                    </h1>

                                    <p className="text-white font-poppins">
                                    Explore Now
                                    </p>

                                  </div>

                        </div>

                        <div className="relative sm:h-[300px] sm:w-[500px] w-80 h-48 bg-slate-700 gap-2
                                        bg-opacity-25 rounded-xl flex flex-row items-center" 
                              onClick={() => (navigate("/elementaryschool"))}>

                                  <div className="h-44 w-40 sm:w-[250px] sm:h-[285px] overflow-hidden
                                                  rounded-xl m-2 shrink-0">

                                      <img src={EES_4}
                                            className="flex w-full h-full hover:scale-125 
                                            transition-all duration-500 ease-in-out 
                                            cursor-pointer"/>
                                  </div>

                                  <div className="relative flex flex-col text-center gap-1 sm:m-1">

                                    <h1 className="font-poppins text-fontColor sm:text-2xl">
                                      Esperanza Elementary School
                                    </h1>

                                    <p className="text-white font-poppins">
                                    Explore Now
                                    </p>

                                  </div>

                        </div>

                    </div>

                </div>


      </div>
  )
}

export default TourPage
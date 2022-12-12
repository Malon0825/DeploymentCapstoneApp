import React from 'react'
import { LandingNavbar, LandingWelcomePage, History } from "./components"
import LandingRequestTab from './pages/LandingRequestTab'
import LandingActivitiesTab from './pages/LandingActivitiesTab'
import LandingTourTab from './pages/LandingTourTab'
import { intro_bg, intro_bg_2, intro_bg_3 } from './assets'
import { useState } from 'react'

const LandingPage = () => {

      const [firstGetStart, setFirstGetStart] = useState(true)
      const [secGetStart, setSecGetStart] = useState(true)
      const [thirdGetStart, setThirdGetStart] = useState(true)

  return (
    
    <div className="relative flex w-full bg-primary">

      <div className={`${thirdGetStart ? 'flex' : 'hidden'} absolute z-50 w-full h-full bg-primary bg-opacity-80 overflow-hidden`}>

            <div className={`${thirdGetStart ? 'flex' : 'hidden'} h-screen w-screen justify-center items-center bg-primary bg-opacity-50`}>


                  <div className={`${thirdGetStart ? 'flex' : 'hidden'} absolute h-[600px] md:w-[800px] w-[350px] border-2 border-fontColor bg-navbar flex-col items-center rounded-lg`}>

                        <div className="absolute mt-10 flex flex-row gap-2">
                              <div className="w-10 h-2 bg-slate-700 rounded-full"></div>
                              <div className="w-10 h-2 bg-slate-700 rounded-full"></div>
                              <div className="w-10 h-2 bg-fontColor rounded-full"></div>
                        </div>

                        <div className="md:w-48 md:h-48 w-20 h-20 bg-slate-700 md:mt-24 mt-16 rounded-full bg-opacity-80 
                                    hover:bg-fontColor hover:scale-90 hover:-translate-x-20 transition-all duration-500 ease-in-out">
                              <img className="md:w-52 md:h-52 h-28 w-32 hover:scale-125 hover:translate-x-44 hover:-translate-y-5 transition-all duration-500 ease-in-out" 
                                    src={intro_bg_3} alt="" />  
                        </div>

                        <h1 className="text-fontColor md:mt-3 mt-8 font-poppins md:text-2xl text-xl font-bold">
                              Disclaimer!
                        </h1>

                        <h2 className="text-slate-700 font-poppins md:text-lg text-sm md:w-[550px] text-center m-4">
                        This site is up for testing and still in production, please report any bugs or errors that you may encounter. We appreciate your 
                        time and will make sure to give credit to those people who drop their feedback.
                        (You will see your names in the credit section when we deploy our final version)
                        </h2>


                        <button className="bg-slate-700 mt-10 md:text-3xl text-xl font-poppins font-medium text-fontColor md:w-52 md:h-12 w-44 h-10 rounded-lg
                                          hover:bg-fontColor hover:scale-110 hover:font-semibold hover:text-slate-700 transition-all duration-500 ease-in-out"
                                          onClick={() => setThirdGetStart(false)}>
                              I'm in!
                        </button>
                  
                  </div>  

                  <div className={`${secGetStart ? 'flex' : 'hidden'} absolute h-[600px] md:w-[800px] w-[350px] border-2 border-fontColor bg-navbar flex-col items-center rounded-lg`}>

                        <div className="absolute mt-10 flex flex-row gap-2">
                              <div className="w-10 h-2 bg-slate-700 rounded-full"></div>
                              <div className="w-10 h-2 bg-fontColor rounded-full"></div>
                              <div className="w-10 h-2 bg-slate-700 rounded-full"></div>
                        </div>

                        <div className="md:w-48 md:h-48 w-20 h-20 bg-slate-700 md:mt-24 mt-16 rounded-full bg-opacity-80 
                                    hover:bg-fontColor hover:scale-90 transition-all duration-500 ease-in-out">
                              <img className="md:w-52 md:h-52 h-28 w-32 hover:scale-125 hover:translate-x-10 hover:-translate-y-10 transition-all duration-500 ease-in-out" 
                                    src={intro_bg_2} alt="" />  
                        </div>

                        <h1 className="text-fontColor md:mt-3 mt-8 font-poppins md:text-2xl text-xl font-bold">
                              Try out Different Things!
                        </h1>

                        <h2 className="text-slate-700 font-poppins md:text-lg text-sm md:w-[550px] text-center m-4">
                              Try to login on our site, and also try requesting a document after you login. It's safe and simple.
                        </h2>


                        <button className="bg-slate-700 mt-10 md:text-3xl text-xl font-poppins font-medium text-fontColor md:w-52 md:h-12 w-44 h-10 rounded-lg
                                          hover:bg-fontColor hover:scale-110 hover:font-semibold hover:text-slate-700 transition-all duration-500 ease-in-out"
                                          onClick={() => setSecGetStart(false)}>
                              Continue
                        </button>
                  
                  </div>                    

                  <div className={`${firstGetStart ? 'flex' : 'hidden'} absolute h-[600px] md:w-[800px] w-[350px] border-2 border-fontColor bg-navbar flex-col items-center rounded-lg`}>

                        <div className="absolute mt-10 flex flex-row gap-2">
                              <div className="w-10 h-2 bg-fontColor rounded-full"></div>
                              <div className="w-10 h-2 bg-slate-700 rounded-full"></div>
                              <div className="w-10 h-2 bg-slate-700 rounded-full"></div>
                        </div>

                        <div className="md:w-48 md:h-48 w-20 h-20 bg-slate-700 md:mt-24 mt-16 rounded-full bg-opacity-80 
                                    hover:bg-fontColor hover:scale-90 transition-all duration-500 ease-in-out">
                              <img className="md:w-52 md:h-52 h-28 w-32 hover:scale-125 hover:translate-x-10 hover:-translate-y-10 transition-all duration-500 ease-in-out" 
                                    src={intro_bg} alt="" />  
                        </div>



                        <h1 className="text-fontColor md:mt-3 mt-8 font-poppins md:text-2xl text-xl font-bold">
                              Welcome to our Website!
                        </h1>

                        <h2 className="text-slate-700 font-poppins md:text-lg text-sm md:w-[550px] text-center m-4">
                              Please take a tour and consider droping feedback to our email. We provide a feedback button at 
                              bottom-left of your screen if your on PC and at the burger bar icon if your on mobile.
                        </h2>

                        <button className="bg-slate-700 mt-10 md:text-3xl text-xl font-poppins font-medium text-fontColor md:w-52 md:h-12 w-44 h-10 rounded-lg
                                          hover:bg-fontColor hover:scale-110 hover:font-semibold hover:text-slate-700 transition-all duration-500 ease-in-out"
                                          onClick={() => setFirstGetStart(false)}>
                              Get started
                        </button>
                  
                  </div>      
             
            </div>

      </div>


      <aside className="h-screen sticky top-0">
            <LandingNavbar />
      </aside>

      <div className="flex w-full flex-col overflow-hidden">

            <aside className="w-full sticky top-0 z-10">
                  <LandingWelcomePage />
            </aside>


            <div className='w-full bg-primary'>
                  <div className="flex lg:flex-row flex-col md:gap-0 gap-0 justify-center xl:justify-evenly w-full">
                        <div>
                              <LandingRequestTab />
                        </div>
                        <div className="">
                              <LandingActivitiesTab />
                        </div>
                  </div>
      
                  <div className="flex sm:flex-row flex-col xl:gap-14 gap-0 justify-center w-full">
                        <div>
                              <LandingTourTab />
                        </div>
                        <div>
                              <History />
                        </div>
                  </div>
            </div>

    </div>




</div>



  )
}

export default LandingPage
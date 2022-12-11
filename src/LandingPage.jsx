import React from 'react'
import { LandingNavbar, LandingWelcomePage, History } from "./components"
import LandingRequestTab from './pages/LandingRequestTab'
import LandingActivitiesTab from './pages/LandingActivitiesTab'
import LandingTourTab from './pages/LandingTourTab'

const LandingPage = () => {
  return (
    
    <div className="relative flex w-full bg-primary">


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
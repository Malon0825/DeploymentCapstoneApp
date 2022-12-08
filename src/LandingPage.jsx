import React from 'react'
import { LandingNavbar, LandingWelcomePage, Request, Activity, Tour, History } from "./components"
import LandingRequestTab from './pages/LandingRequestTab'
import LandingActivitiesTab from './pages/LandingActivitiesTab'
import LandingTourTab from './pages/LandingTourTab'

const LandingPage = () => {
  return (
    
    <div className="relative flex w-full h-[1060px] bg-primary">


      <aside className="h-screen sticky top-0">
            <LandingNavbar />
      </aside>

      <div className="flex flex-col w-full gap-12 bg-blue-">

      <div>
            <LandingWelcomePage />
      </div>

      <div>
            <div className="flex flex-row w-full">
                  <div>
                        <LandingRequestTab />
                  </div>
                  <div className="">
                        <LandingActivitiesTab />
                  </div>
            </div>

            <div className="flex flex-row">
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
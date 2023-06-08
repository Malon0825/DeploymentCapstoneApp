import React from 'react'
import { Navbar, Welcome, Request, Activity, Tour, History } from "./components";



const App = () => {
  return (


      <div className="relative flex w-full bg-primary">


            <aside className="h-screen sticky top-0">
                  <Navbar />
            </aside>

            <div className="flex w-full flex-col overflow-hidden">

                  <aside className="w-full sticky top-0 z-10 bg-primary">
                        <Welcome />
                  </aside>


                  <div className='relative w-full bg-primary flex flex-col'>

                        <div className="flex lg:flex-row flex-col md:gap-0 gap-0 justify-center xl:justify-evenly w-full">
                              <div>
                                    <Request />
                              </div>
                              <div className="">
                                    <Activity/>
                              </div>
                        </div>
            
                        <div className="relative flex sm:flex-row flex-col xl:gap-14 w-full">
                              <div className="">
                                    <Tour />
                              </div>
                              <div className="lg:flex absolute hidden right-10">
                                    <History />
                              </div>
                        </div>
                  </div>

             </div>




      </div>





  )
}



export default App
import React from 'react'
import { Navbar, Welcome, Request, Activity, Tour, History } from "./components";



const App = () => {
  return (


                  <div className="relative flex w-full h-[1060px] bg-primary">


                        <aside className="h-screen sticky top-0">
                              <Navbar />
                        </aside>

                        <div className="flex flex-col w-full gap-12 bg-blue-">

                        <div>
                              <Welcome />
                        </div>

                        <div>
                              <div className="flex flex-row w-full">
                                    <div>
                                          <Request />
                                    </div>
                                    <div className="">
                                          <Activity />
                                    </div>
                              </div>

                              <div className="flex flex-row">
                                    <div>
                                          <Tour />
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



export default App
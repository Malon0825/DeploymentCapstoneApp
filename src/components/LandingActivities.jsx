import React from 'react'
import { LandingNavbar, LandingWelcomePage } from '../components'
import { useEffect, useState } from 'react'
import { getFirestore, getDoc, doc } from 'firebase/firestore'

const LandingActivities = () => {

  const db = getFirestore()
  const [activities, setActivities] = useState()

  const docRef = doc(db, 'activities', 'activity')

  useEffect(() => {

    getDoc(docRef).then(function(doc) {
              if (doc.exists) {

                const activities = doc.data().barangay_activities
                setActivities(activities)

              } else {
                  // doc.data() will be undefined in this case
                  
              }
          }).catch(function(error) {
              console.log("Error getting document:", error);
          });
    },[])

  return (

    
    <div className="relative flex md:flex-row flex-col w-full h-full bg-primary">


        <aside className="md:flex hidden h-screen sticky top-0">
              <LandingNavbar />
        </aside>

        <aside className="md:hidden flex sticky top-0 z-10 bg-primary">
              <LandingWelcomePage />
        </aside>
        

        <div className="w-full">
          
          <div className="sm:mt-20 flex flex-col gap-10 ">

              <div className="w-full">

                  <h1 className="text-fontColor sm:text-4xl text-xl font-poppins sm:font-semibold
                                        transition-all duration-300 cursor-pointer xs:text-center xs:m-0 ml-10
                                      hover:text-slate-300 ease-in-out">
                    Barangay Halloween Activity
                  </h1>              
              </div>



              <ul className="relative lg:m-20 grid lg:grid-cols-2 sm:gid-rows-6 xl:grid-cols-3
                              xl:grid-rows-4 md:gap-14 gap-4 justify-center">

                {activities ?.map((act, index) => (
                  
                    <li key={index}>

                              <div className="relative sm:w-[400px] sm:h-[173px] w-[310px] h-[173px] bg-slate-700 
                                            bg-opacity-25 rounded-xl sm:ml-3 flex flex-row items-center">

                                        <div className="flex relative rounded-lg h-[150px]
                                                        overflow-hidden w-[150px] ml-3">

                                            <div className="relative sm:h-[200px] sm:w-[200px] h-[150px] w-[150px] bg-navbar flex justify-center text-center flex-col">

                                                <div className="absolute h-5 w-5 rounded-full bg-slate-700 bg-opacity-25 top-3 left-3"></div>
                                                <div className="absolute h-5 w-5 rounded-full bg-slate-700 bg-opacity-25 top-3 right-3"></div>

                                                <h1 className="font-poppins text-4xl font-bold text-fontColor">
                                                  Day
                                                </h1>

                                                <h1 className="font-poppins text-5xl font-bold text-fontColor">
                                                  {act.day}
                                                </h1>
                                            </div>

                                        </div>

                                        <div className="relative flex flex-col ml-2 h-40 sm:w-56 w-32 items-center justify-center">

                                          <div className="relative flex flex-row gap-2 items-center">

                                            <h1 className="font-poppins text-fontColor text-xl">
                                              {act.title}
                                            </h1>    
                                            <h1 className="font-poppins text-white text-normal">
                                            {"("}{act.date}{")"}
                                            </h1>                            
                                          </div>
                                          <p className="text-white font-poppins top-2 text-center">
                                            {act.content}
                                          </p>
                                        </div>

                            </div>

                    </li>
                ))}                

            </ul>

          </div>

        </div>

  </div>
  )
}

export default LandingActivities
import React from 'react'
import { Navbar } from '../components'
import { useEffect, useState } from 'react'
import { getFirestore, getDoc, doc } from 'firebase/firestore'

const ActivityPage = () => {

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

    
    <div className="relative flex w-full h-full bg-primary scroll-auto">


        <aside className="h-screen sticky top-0">
              <Navbar />
        </aside>

        <div className="flex w-screen bg-primary">
          
          <div className="m-20">
              <h1 className="text-fontColor text-4xl font-poppins font-semibold
                                    transition-all duration-300 cursor-pointer
                                  hover:text-slate-300 ease-in-out">
                Barangay Halloween Activity
              </h1>

              <ul className="relative top-10 grid grid-cols-2 gid-rows-6 xl:grid-cols-3 
                              xl:grid-rows-4 gap-14 left-10">

                {activities ?.map((act, index) => (
                  
                    <li key={index}>

                              <div className="relative w-[400px] h-[173px] bg-slate-700 
                                            bg-opacity-25 rounded-xl ml-3 flex flex-row items-center">

                                        <div className="flex relative rounded-lg h-[150px]
                                                        overflow-hidden w-[150px] ml-3">

                                            <div className="relative h-full w-full bg-navbar flex items-center justify-center flex-col">

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

                                        <div className="relative flex flex-col left-2">

                                          <div className="relative flex flex-row gap-2 items-center">

                                            <h1 className="font-poppins text-fontColor text-xl">
                                              {act.title}
                                            </h1>    
                                            <h1 className="font-poppins text-white text-normal">
                                            {"("}{act.date}{")"}
                                            </h1>                            
                                          </div>
                                          <p className="text-white font-poppins top-2">
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

export default ActivityPage
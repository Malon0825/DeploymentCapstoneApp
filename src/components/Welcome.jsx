import React from 'react'
import { useAuth } from '../context/AuthContext'
import { getFirestore, getDoc, doc, query, where, collection, onSnapshot } from 'firebase/firestore'
import { useState } from 'react'


const Welcome = () => {

  const [userName, setUserName] = useState()
  const [userId, setUserID] = useState()
  const { currentUserId } = useAuth()
  const [profile, setProfile] = useState()
  const [userFound, setUserFound] = useState(true)
  const [requestDoc, setReqDoc] = useState()
  const [toggle, setToggle] = useState()

  const db = getFirestore()
  

  const colRef = collection(db, 'users')
  const q = query(colRef, where("userId", "==", currentUserId))

  onSnapshot(q, (snapshot) => {
    let users = []
    snapshot.docs.forEach((doc) => {
      users.push({ ...doc.data(), id: doc.id})

      users.map((user) => {

        const userId = user.id
        const strUserId = userId.toString()
        setUserID(strUserId) 
      })
      if (userFound === true) {
        userData()
      }
      
    })

  })


  function userData(){

    const docRef = doc(db, 'users', userId)

    if (userFound === true) {

        getDoc(docRef).then(function(doc) {

            if (doc.exists) {
              
                const user_name = doc.data().userName
                const fisrtLetter = Array.from(user_name)[0]
                const upperCase = fisrtLetter.toUpperCase()
                setProfile(upperCase)

                const currentUser = upperCase + user_name.slice(1)
                setUserName(currentUser)

                const userReq = doc.data().userRequest
                const reverseUserReq = userReq.slice(0).reverse()
                setReqDoc(reverseUserReq)
                
            } else {
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error)
        })
    }

    setUserFound(false)
  
  }


  return (

    <div className="relative w-full mt-16">

      <div className={`${toggle ? 'toggleOn' : 'toggleOff'} absolute z-30 w-[400px] h-[500px] bg-navbar bg-opacity-90
                           text-primary top-16 right-20 rounded-3xl border-fontColor border-2 sidebar`}>

          <div className="w-full flex items-center flex-col m-10 gap-5">

              <h1 className="relative font-bold font-poppins text-2xl text-fontColor">
                Recent Request
              </h1>


                          
              <div className="text-opacity-90 font-poppins w-full grid grid-flow-row gap-5 text-center overflow-auto
                                scrollbar">
                                                                  
                  {requestDoc ?.map((req, index) => {
                                
                      return <li className="border-t-2 border-t-fontColor rounded-lg flex flex-col items-center cursor-pointer gap-1"
                                 key={index}>

                                  <div className="flex flex-row text-sm gap-1 items-center justify-center m-2 ">

                                      <div className="w-6 h-6 flex items-center justify-center bg-slate-700 rounded-full">
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                              className="w-5 h-5  text-fontColor">
                                              <path stroke-linecap="round" stroke-linejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                                          </svg>                                    
                                      </div>             

                                      <h1 className = "flex flex-row gap-1">

                                            <span className="text-fontColor">Date:</span>
                                            <span className="text-white">{req.date}</span>

                                      </h1>

                                      <h1 className = "flex flex-row gap-1 ">

                                            <span className="text-fontColor">Time:</span>
                                            <span className="text-white">{req.time}</span>

                                      </h1>                                    
                                  </div>

                                  <h1 className = "flex flex-col gap-2">

                                        <span className="text-fontColor text-sm">You have requested:</span>
                                        <span className="text-white rounded-lg border-b-2 border-fontColor text-xl">{req.document}</span>

                                  </h1>

                            </li>
                  })}

              </div>

          </div>

      </div>
     
      <div className="flex flex-row">

          <div className="relative flex flex-col ml-20">


            <div className="flex flex-auto">
              <h1 className="text-white text-4xl font-poppins font-semibold
                              transition-all duration-500 hover:bg-gray-700
                              rounded-lg cursor-none hover:scale-x-110
                            hover:text-fontColor ease-in-out"
                >Hello {userName}
              </h1>
            </div>
            
            <div>
              <h2 className="text-white text-lg font-poppins
                              transition-all duration-300 hover:bg-gray-700
                              rounded-lg cursor-none hover:scale-x-110
                            hover:text-fontColor ease-in-out"
                >Welcome back, ready to request now?
              </h2>
            </div>
            
          </div>

          <div className="absolute flex right-20 gap-6">

            <button onClick={() => setToggle((prev) => !prev)}
                    className={`${toggle ? 'bg-gray-700 -translate-y-3 scale-110' : 'bg-navbar'} rounded-full h-14 w-14
                                  transition-all duration-500 ease-linear relative`}>

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                        className={`${toggle ? 'stroke-fontColor' : ''} navbar-icon transition-all duration-300 ease-linear m-2`}>

                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                      </svg>
            </button>

            <a href='/profile' 
               className="relative flex overflow-hidden bg-gray-700 justify-center items-center rounded-full
                          h-14 w-14 hover:-translate-y-3 hover:scale-110 transition-all duration-500 ease-in-out">

                            <div className="hover:scale-125 text-[50px] text-fontColor text-lg
                                            transition-all duration-500 ease-in-out font-bold
                                            cursor-pointer ">
                                        {profile}
                            </div>

            </a>
          </div>
          
      </div>

    </div>
  )
}

export default Welcome
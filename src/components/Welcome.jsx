import React from 'react'
import { useAuth } from '../context/AuthContext'
import { getFirestore, getDoc, doc, query, where, collection, onSnapshot } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'



const Welcome = () => {

  const [userName, setUserName] = useState()
  const [userId, setUserID] = useState()
  const { currentUserId } = useAuth()
  const [profile, setProfile] = useState()
  const [userFound, setUserFound] = useState(false)
  const [requestDoc, setReqDoc] = useState()
  const [toggle, setToggle] = useState()
  const [error, setError] = useState()
  const [findDoc, setFindDoc] = useState()
  const [navbar, setNavbar] = useState(false)
  const [docuRef, setDocuRef] = useState()
  let navigate = useNavigate()
  const { logout } = useAuth()

  const db = getFirestore()

  useEffect(() => {

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

        setUserFound(true)
      })

      
    })

  })

  })
  useEffect(() => {

    if (userFound == true) {

        const docRef = doc(db, 'users', userId)
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

        })
    }

    setUserFound(false)
  
  })

  async function handleLogOut() {
    setError('')

    try {
      await logout()
      navigate("/")
    }catch {
    }
  }


  return (

    <div className="relative w-full">

              <div className={`${navbar ? 'flex' : 'hidden'} flex-col items-center justify-center gap-3 font-poppins absolute z-50 w-[150px] h-[250px] bg-navbar
                              text-white sm:top-32 md:top-20 top-12 sm:right-20 right-10 rounded-2xl border-fontColor border-2 sidebar bg-opacity-9 cursor-pointer`}>

                              <a onClick={() => navigate('/home')}>Home</a>
                              <a onClick={() => navigate('/request')}>Request</a>
                              <a onClick={() => navigate('/activity')}>Activities</a>
                              <a onClick={() => navigate('/tour')}>Tour</a>
                              <a onClick={() => navigate('/profile')}>Profile</a>
                              <a onClick={handleLogOut}>Logout</a>                     


              </div>

              <div className={`${toggle ? 'toggleOn' : 'toggleOff'} absolute z-30 md:w-[400px] md:h-[500px] w-[200px] h-[250px] bg-navbar bg-opacity-90
                              text-primary md:top-16 xs:top-32 top-12 sm:right-20 right-10 rounded-xl border-fontColor border-2 sidebar`}>

              <div className="w-full flex items-center flex-col md:m-10 md:mt-10 mt-2 gap-5">

                  <h1 className="relative font-bold font-poppins md:text-2xl text-fontColor">
                    Recent Request
                  </h1>


                              
                  <div className="text-opacity-90 font-poppins grid grid-flow-row gap-5 text-center overflow-auto
                                    xs:scrollbar">
                                                                      
                      {requestDoc ?.map((req, index) => {
                                    
                          return <li className="border-t-2 md:border-t-fontColor border-slate-700 bg-slate-900 bg-opacity-60 rounded-lg flex flex-col items-center cursor-pointer gap-1"
                                    key={index}>

                                      <div className="flex md:flex-row flex-col text-sm gap-1 items-center justify-center m-2 ">

                                          <div className="w-6 h-6 md:flex hidden items-center justify-center bg-slate-700 rounded-full">
                                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                  className="w-5 h-5 text-fontColor">
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

                                      <h1 className = "flex flex-col md:gap-2 gap-1">

                                            <span className="text-fontColor text-sm">You have requested:</span>
                                            <span className="text-white rounded-lg md:rounded-none border-b-2 md:border-fontColor border-slate-700 md:text-xl text-lg">{req.document}</span>

                                      </h1>

                                </li>
                      })}

                  </div>

              </div>

          </div>



          <div className="relative md:m-10 xs:m-20 m-10 z-0">
          
            <div className="flex flex-row">

                <div className="relative flex flex-col">


                  <div className="w-[230px] sm:w-full">
                    <h1 className="sm:text-white text-fontColor sm:text-4xl text-3xl font-poppins font-semibold
                                    transition-all duration-500 hover:bg-gray-700
                                    rounded-lg cursor-none hover:scale-x-110
                                  hover:text-fontColor ease-in-out"
                      >Hello {userName}
                    </h1>
                  </div>
                  
                  <div className="">
                    <h2 className="text-white text-lg font-poppins
                                    transition-all duration-300 hover:bg-gray-700
                                    rounded-lg cursor-none hover:scale-x-110
                                  hover:text-fontColor ease-in-out"
                      >Welcome back, ready to request now?
                    </h2>
                  </div>
                  
                </div>


              <div className="flex h-auto absolute md:right-20 right-14">
                        <button onClick={() => setToggle((prev) => !prev)}
                                className={`${toggle ? 'bg-gray-700 -translate-y-3 scale-110' : 'bg-navbar'} rounded-full md:h-14 md:w-14 h-10 w-10 flex items-center justify-center
                                              transition-all duration-500 ease-linear relative`}>

                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                                    className={`${toggle ? 'stroke-fontColor' : ''} navbar-icon transition-all duration-300 ease-linear m-2`}>

                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                                  </svg>
                        </button>

              </div>

              <div className="md:flex hidden h-auto absolute right-0">

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

                <div className="md:hidden flex h-auto absolute right-0">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                        className={`${navbar? 'hidden' : 'flex'} w-10 h-10 stroke-fontColor cursor-pointer`}
                        onClick={() => setNavbar((prev) => !prev)}>
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                        className={`${navbar ? 'flex' : 'hidden'} w-10 h-10 stroke-fontColor cursor-pointer`}
                        onClick={() => setNavbar((prev) => !prev)}>
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                    </svg>


                </div>

                
            </div>



          </div>

    </div>
  )
}

export default Welcome
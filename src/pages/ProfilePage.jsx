import React from 'react'
import { useState } from 'react'
import { Navbar, Welcome } from '../components'
import { useAuth } from '../context/AuthContext'
import { getFirestore, getDoc, doc, query, where, collection, onSnapshot } from 'firebase/firestore'


const ProfilePage = () => {

  const [userId, setUserID] = useState()
  const { currentUserId } = useAuth()
  const [userName, setUserName] = useState()
  const [userEmail, setUserEmail] = useState()
  const [userStatus, setUserStatus] = useState()
  const [userContactNum, setUserContactNum] = useState()
  const [userAddress, setUserAddress] = useState()
  const [profile, setProfile] = useState()
  const [userFound, setUserFound] = useState(true)

  const [userRequest, setUserRequest] = useState()
  

  const db = getFirestore()
  

  const colRef = collection(db, 'users')
  const q = query(colRef, where("userId", "==", currentUserId))

  onSnapshot(q, (snapshot) => {
    let users = []
    snapshot.docs.forEach((doc) => {
      users.push({ ...doc.data(), id: doc.id})
    })
    
    users.map((user) => {
        setUserID(user.id)
        console.log(userId)

        if (userFound === true) {
            userData()
        }
        
    })
    
  })


  function userData(){

    const docRef = doc(db, 'users', userId)

    getDoc(docRef).then(function(doc) {
        if (doc.exists) {

            const user_name = doc.data().userName
            setUserName(user_name)
            const fisrtLetter = Array.from(userName)[0]
            const upperCase = fisrtLetter.toUpperCase()
            setProfile(upperCase)

            const user_email = doc.data().userEmail
            setUserEmail(user_email)

            const user_status = doc.data().userStatus
            setUserStatus(user_status)

            const user_contact_num = doc.data().userCotactNum
            setUserContactNum(user_contact_num)

            const user_address = doc.data().userAddress
            setUserAddress(user_address)


            const user_request = doc.data("Barangay Cedula")
            setUserRequest(user_request)
            console.log(userRequest)
            setUserFound(false)
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
  
  }


  return (

    <div className="relative flex md:flex-row flex-col w-full h-full bg-primary">



          <aside className="md:flex hidden h-screen sticky top-0">
                <Navbar />
          </aside>

          <aside className="md:hidden flex sticky top-0 z-10 bg-primary">
                <Welcome />
          </aside>

          <div className="relative w-full">
          
              <div className="relative flex flex-col w-full items-center mt-5 md:mt-14 mb-10">

                  <div className="relative md:w-64 md:h-64 w-44 h-44 bg-gray-700 rounded-full bg-opacity-25 flex items-center justify-center
                                hover:bg-fontColor hover:scale-110 transition-all duration-500 hover:-translate-x-10
                                  ease-in-out">

                                    <div className="md:w-60 md:h-60 w-40 h-40 rounded-full hover:border-2 flex items-center justify-center hover:truncate
                                                    border-primary hover:scale-110 transition-all duration-300 hover:translate-x-16">

                                        <h1 className="md:text-[280px] text-[150px] hover:scale-125 font-semibold transition-all duration-500
                                                      text-fontColor hover:text-white -translate-y-1 font-poppins cursor-pointer">
                                          {profile}
                                        </h1>

                                    </div>

                  </div>
                  <h1 className="relative font-poppins sm:text-4xl text-2xl font-bold text-fontColor mt-5 cursor-pointer">
                    Profile
                  </h1>


                  <div className="relative flex flex-col md:mt-20 mt-10 gap-10 items-center">

                  {/* Name########################################################################### */}

                    <div className="sm:h-20 h-12 sm:w-[40vw] w-[50vw] bg-fontColor bg-opacity-80 rounded-xl
                                    flex items-center justify-center hover:scale-110 transition-all
                                    duration-300 ease-in-out">

                      <div className="font-poppins sm:text-2xl font-semibold flex flex-row">
                          <h1 className="">
                            Name:
                          </h1>

                          <h1 className="relative sm:ml-5 ml-2 text-white">
                            {userName}
                          </h1>             
                      </div>

                    </div>     
                  
                  {/* Email########################################################################### */}

                    <div className="sm:h-20 h-12 sm:w-[50vw] w-[60vw] bg-slate-700 bg-opacity-25 rounded-xl
                                    flex items-center justify-center hover:scale-110 transition-all
                                    duration-300 ease-in-out">

                      <div className="font-poppins sm:text-2xl font-semibold flex flex-row">
                          <h1 className="text-fontColor">
                            Email:
                          </h1>

                          <h1 className="relative sm:ml-5 ml-2 text-white">
                            {userEmail}
                          </h1>             
                      </div>

                    </div>  

                  {/* Role########################################################################### */}

                    <div className="sm:h-20 h-12 sm:w-[60vw] w-[70vw] bg-fontColor bg-opacity-80 rounded-xl
                                    flex items-center justify-center hover:scale-110 transition-all
                                    duration-300 ease-in-out">

                      <div className="font-poppins sm:text-2xl font-semibold flex flex-row">
                          <h1 className="">
                            Status:
                          </h1>

                          <h1 className="relative sm:ml-5 ml-2 text-white">
                            {userStatus}
                          </h1>             
                      </div>

                    </div>
                  
                  {/* Contact########################################################################### */}

                    <div className="sm:h-20 h-12 sm:w-[50vw] w-[60vw] bg-slate-700 bg-opacity-25 rounded-xl
                                    flex items-center justify-center hover:scale-110 transition-all
                                    duration-300 ease-in-out">

                      <div className="font-poppins sm:text-2xl font-semibold flex flex-row">
                          <h1 className="text-fontColor">
                            Contact:
                          </h1>

                          <h1 className="relative sm:ml-5 ml-2 text-white">
                            {userContactNum}
                          </h1>             
                      </div>

                    </div>  

                  {/* Purok Address########################################################################### */}

                    <div className="sm:h-20 h-12 sm:w-[40vw] w-[50vw] bg-fontColor bg-opacity-80 rounded-xl
                                    flex items-center justify-center hover:scale-110 transition-all
                                    duration-300 ease-in-out">

                      <div className="font-poppins sm:text-2xl font-semibold flex flex-row text-center">
                          <h1 className="">
                            Purok Address:
                          </h1>

                          <h1 className="relative sm:ml-5 ml-2 text-white">
                            {userAddress}
                          </h1>             
                      </div>

                    </div>         
                  </div>




              </div>

            </div>
    </div>
  )
}

export default ProfilePage
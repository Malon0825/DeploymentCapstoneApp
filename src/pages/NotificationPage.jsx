import React, { useState } from 'react'
import { Navbar } from '../components'
import { useAuth } from '../context/AuthContext'
import { getFirestore, getDoc, doc, query, where, collection, onSnapshot } from 'firebase/firestore'


const NotificationPage = () => {

  const [userId, setUserID] = useState()
  const { currentUserId } = useAuth()
  const [userFound, setUserFound] = useState(true)
  const [requestDoc, setReqDoc] = useState()

  const db = getFirestore()
  

  const colRef = collection(db, 'users')
  const q = query(colRef, where("userId", "==", currentUserId))

  onSnapshot(q, (snapshot) => {
    let users = []
    snapshot.docs.forEach((doc) => {
      users.push({ ...doc.data(), id: doc.id})

      users.map((user) => {
        setUserID(user.id) 
      })
      if (userFound === true) {
        userData()
      }
      console.log(requestDoc)
      
      })

  })


  function userData(){

    const docRef = doc(db, 'users', userId)

    getDoc(docRef).then(function(doc) {
        if (doc.exists) {

            const userReq = doc.data().userRequest
            setReqDoc(userReq)
              
            // Object.values(userReq).map((user) => {     
            // })
            
            // console.log(requestDoc)
            
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
    setUserFound(false)
  
  }

  return (

    <div className="relative flex w-full h-full bg-primary scroll-auto">


      <aside className="h-screen sticky top-0">
            <Navbar />
      </aside>
      <div className="relative w-screen">

          <div>
                <div className="font-bold font-poppins text-4xl m-20 text-fontColor">
                  Notifications
                </div> 

                <div className="relative mr-36 ml-36 flex flex-col gap-10">

                <div className="w-[1360px] h-[300px] bg-slate-700 relative flex
                                  bg-opacity-25 rounded-xl items-center flex-col">

                      <h1 className="relative font-bold font-poppins text-2xl text-fontColor">
                        Recent Notification
                      </h1>

                      <div>
                          
                          <ul className="text-fontColor font-poppins text-xl">
                              {requestDoc ?.map((req, index) => {
                                
                                  return <li key = {index}>
                                            {req}
                                        </li>
                              })}

                          </ul>
                      </div>
                  </div>
                </div>         
          </div>


      </div>

    </div>
  )
}

export default NotificationPage
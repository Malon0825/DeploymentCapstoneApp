import React, { useRef, useState } from 'react'
import { sign_up_bg } from './assets'
import { useNavigate } from 'react-router'
import { getFirestore, addDoc, collection } from 'firebase/firestore'
import { auth } from './firebase'



const Signup = () => {
  const emailRef = useRef()
  const passRef = useRef()
  const passConfirmRef = useRef()
  const userNameRef = useRef()
  const userStatusRef = useRef()
  const userContactRef = useRef()
  
  const [error, setError] = useState('')
  const [laoding, setLoading] = useState(false)
  const [dropDownAdd, setDropDownAdd] = useState()
  const [address, setAddress] = useState()
  
  let navigate = useNavigate()

  const db = getFirestore()
  const colRef = collection(db, 'users')

  async function handleSubmit(e) {
    e.preventDefault()

    if (passRef.current.value !== passConfirmRef.current.value){
      return setError('Password do not match')
    }
    try {
      const userName = userNameRef.current.value
      const email = emailRef.current.value
      const userStatus = userStatusRef.current.value
      const userContact = userContactRef.current.value
      const upperCaseUserStatus =  userStatus.charAt(0).toUpperCase() + userStatus.slice(1)
    

      setLoading(true)
      setError("")

      auth.createUserWithEmailAndPassword(emailRef.current.value, passRef.current.value).then(cred => {

        return addDoc(colRef, {
          userId: cred.user.uid,
          userName: userName,
          userEmail: email,
          userStatus: upperCaseUserStatus,
          userCotactNum: userContact,
          userAddress: address,
          userRequest: ''
        })

      })
    }
    catch{
      setError('Failed to create an account')
    }
    setLoading(false)
    navigate("/home")
  }

  const purokNames = [
    "Purok Maki-angayon",
    "Purok Pag-asa",
    "Purok Luzviminda",
    "Purok Paraiso",
    "Purok New Society",
    "Purok Matamis",
  ]

  return (
    <div className="relative h-screen flex items-center justify-center">

    
      <div className="absolute flex w-screen h-full overflow-hidden z-10">

        <img className="h-full w-full blur-lg scale-110 hover:scale-125 transition-all duration-500 ease-in-out bg-primary" 
             src={sign_up_bg} alt="" />

      </div>

      <div className="z-20 bg-none rounded-2xl w-[1000px] h-[600px] flex bg-navbar bg-opacity-60
                      flex-row overflow-hidden drop-shadow-xl">

        <div className="bg-green-300 h-full w-[500px] overflow-hidden">

          <img className="h-full w-full hover:scale-125 hover:translate-x-10
                          transition-all duration-500 ease-in-out 
                          cursor-pointer" 
                          src={sign_up_bg} alt="" />
        </div>

        <div className="w-[500px] h-full flex justify-center items-center">

             <div className="w-[400px] h-[500px] flex justify-center items-center
                          flex-col relative gap-10">

                <div className="w-full flex justify-center">

                    <h1 className="font-poppins text-2xl font-semibold text-fontColor
                                    relative top-5">
                      Sign Up
                    </h1>

                </div>
                            
                <div className=" flex flex-row gap-4 w-full justify-center">

                    <div className="shrink-0 flex gap-7 flex-col">

                      
                      <div className="sign-up-text relative top-2">

                          <label>
                          Name
                          </label>   

                      </div>

                      <div className="sign-up-text relative top-3">

                          <label>
                            Email
                          </label>   

                      </div>

                      <div className="sign-up-text relative top-4">

                          <label>
                          Password
                          </label>   

                      </div>


                      <div className="sign-up-text relative top-2">

                          <label>
                            Confirm
                          <br></br> 
                            Password
                          </label>    

                      </div>

                      <div className="sign-up-text">

                          <label>
                          Status
                          </label>   

                      </div>

                      <div className="sign-up-text relative top-1">

                          <label>
                          Contact #
                          </label>   

                      </div>


                      <div className="sign-up-text">

                          <label>
                          Purok
                          <br></br> 
                          Address
                          </label>  

                      </div>

                    </div>

                    <div className="flex gap-5 flex-col ">

                      <input className="sign-up-input-tab" type="name" ref={userNameRef} required /> 

                      <input className="sign-up-input-tab-1" type="email" ref={emailRef} required />

                      <input className="sign-up-input-tab" type="password" ref={passRef} required />

                      <input className="sign-up-input-tab-1" type="password" ref={passConfirmRef} required /> 

                      <input className="sign-up-input-tab" type="status" ref={userStatusRef} required /> 

                      <input className="sign-up-input-tab-1" type="contact" ref={userContactRef} required />

                      <label className="sign-up-input-tab cursor-pointer flex items-center relative" htmlFor=""
                              onPointerEnter={() => setDropDownAdd(true)}
                              onPointerLeave={() => setDropDownAdd(false)}>

                              <h1>{address}</h1>
                              <h1 className={`${dropDownAdd ? "absolute" : "hidden"} sidebar flex flex-col bottom-9 bg-navbar
                                                              border-2 border-fontColor rounded-xl bg-opacity-80 w-full`}>
                                  {purokNames.map((names, index) => {

                                      return <li className="relative m-3" 
                                                 onClick={() => setAddress(names)}>
                                                  {names}
                                            </li>
                                  })}                                
                              </h1>

                      </label>
                      
                    </div>

                </div>

                <div className= "text-red-600 font-poppins absolute bottom-8 text-lg">
                      {error}
                </div>  

                <div className="w-full flex flex-row gap-4 justify-center">

                  <div className="w-24 h-10 flex items-center bg-slate-800
                                  justify-center rounded-2xl hover:scale-110
                                  transition-all duration-300 ease-in-out">

                      <button className="font-poppins text-white font-semibold
                                          text-lg"
                              onClick={() => {navigate('/')}}
                          >Cancel
                      </button>    

                  </div>



                  <div className="bg-fontColor w-24 h-10 flex items-center
                                  justify-center rounded-2xl hover:scale-110
                                  transition-all duration-300 ease-in-out
                                  bg-opacity-80">

                      <button onClick={handleSubmit}
                              disabled= {laoding}
                              className="font-poppins text-white font-semibold
                                          text-lg">
                        Confirm
                      </button>   

                  </div>

                </div>

            </div>      

        </div>
          
      </div>

    </div>
  )
}

export default Signup
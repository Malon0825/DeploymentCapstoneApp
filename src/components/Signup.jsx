import React, { useRef, useState, useEffect } from 'react'
import { sign_up_bg } from '../assets'
import { useNavigate } from 'react-router'
import { getFirestore, addDoc, collection } from 'firebase/firestore'
import { auth } from '../firebase'



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
  const [page, setPage] = useState()
  const [showConPassword, setShowConPassword] = useState()
  const [showPassword, setShowPassword] = useState()

  
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

      await auth.createUserWithEmailAndPassword(emailRef.current.value, passRef.current.value).then(cred => {

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
    setPage(true)
    setLoading(false)
  }

  useEffect(() => {

    if(page == true){
      navigate('/home')
    }
  })


  const purokNames = [
    "Purok Maki-angayon",
    "Purok Pag-asa",
    "Purok Luzviminda",
    "Purok Paraiso",
    "Purok New Society",
    "Purok Matamis",
    "Purok Osmena",
    "Purok Roxas",
  ]

  return (
    <div className="relative h-screen flex items-center justify-center">

    
      <div className="absolute flex w-screen h-full overflow-hidden z-10">

        <img className="h-full w-full blur-lg scale-110 hover:scale-125 transition-all duration-500 ease-in-out bg-primary" 
             src={sign_up_bg} alt="" />

      </div>

      <div className="z-20 bg-none rounded-2xl sm:w-[1000px] sm:h-[600px] h-[620px] flex sm:bg-navbar sm:bg-opacity-60
                      flex-row overflow-hidden drop-shadow-xl">

        <div className="bg-green-300 h-full w-[500px] overflow-hidden sm:flex hidden">

          <img className="h-full w-full hover:scale-125 hover:translate-x-10
                          transition-all duration-500 ease-in-out 
                          cursor-pointer" 
                          src={sign_up_bg} alt="" />
        </div>
        

        <div className="sm:w-[500px] flex flex-col items-center">

            <div className="sm:hidden w-[200px] flex justify-center text-center relative sm:top-0 top-[25px]
                             bg-primary rounded-3xl bg-opacity-80">

                <h1 className="font-poppins text-2xl font-semibold text-fontColor
                                relative m-5">
                  Sign Up
                </h1>

            </div>

             <div className="sm:w-[400px] sm:h-[500px] w-full flex justify-center items-center
                          flex-col relative gap-10 m-5">

                <div className="w-full mt-10 sm:flex hidden justify-center">

                    <h1 className="font-poppins text-2xl font-semibold text-fontColor
                                    relative mt-5">
                      Sign Up
                    </h1>

                </div>
                            
                <div className=" flex flex-row gap-4 w-full items-center rounded-2xl justify-center bg-primary bg-opacity-95 sm:bg-transparent h-[420px]">

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

                      <div className="relative">
                          <input className="sign-up-input-tab-1" type={showPassword ? "text" : "password"} ref={passRef} required /> 

                          <button className="absolute right-2 h-full">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                    className={`${showPassword? 'hidden' : 'flex'} w-6 h-6 cursor-pointer`}
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                              </svg> 

                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                    className={`${showPassword? 'flex' : 'hidden'} w-6 h-6 cursor-pointer`}
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                         
                          </button>                        
                      </div>

                      <div className="relative">
                          <input className="sign-up-input-tab-1" type={showConPassword ? "text" : "password"} ref={passConfirmRef} required /> 

                          <button className="absolute right-2 h-full">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                    className={`${showConPassword? 'hidden' : 'flex'} w-6 h-6 cursor-pointer`}
                                    onClick={() => setShowConPassword((prev) => !prev)}
                                    >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                              </svg> 

                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                    className={`${showConPassword? 'flex' : 'hidden'} w-6 h-6 cursor-pointer`}
                                    onClick={() => setShowConPassword((prev) => !prev)}
                                    >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                         
                          </button>                        
                      </div>

   
                      
                      



                      <select className="sign-up-input-tab-1 cursor-pointer" name="userStatus" ref={userStatusRef} id="status" required>
                            <option className="text-slate-300 font-poppins text-lg bg-primary" 
                                    value="">Default</option>
                            <option className="text-slate-300 font-poppins text-lg bg-primary" 
                                    value="Married">Married</option>
                            <option className="text-slate-300 font-poppins text-lg bg-primary" 
                                    value="Single">Single</option>
                            <option className="text-slate-300 font-poppins text-lg bg-primary" 
                                    value="Annualled">Annualled</option>
                          </select>

                      {/* <input className="sign-up-input-tab" type="status" ref={userStatusRef} required />  */}

                      {/* <input className="sign-up-input-tab-1" type="contact" ref={userContactRef} required /> */}

                      <input className="sign-up-input-tab-1 no-spinners" type="number" min="1"  ref={userContactRef}        required />

                      <select className="sign-up-input-tab-1 cursor-pointer" name="userAddress" id="userAddress" required>
                            <option className="text-slate-300 font-poppins text-lg bg-primary" 
                                    value="">Default</option>
                            <option className="text-slate-300 font-poppins text-lg bg-primary" 
                                    value="Purok Maki-angayon">Purok Maki-angayon</option>
                            <option className="text-slate-300 font-poppins text-lg bg-primary" 
                                    value="Purok Pag-asa">Purok Pag-asa</option>
                            <option className="text-slate-300 font-poppins text-lg bg-primary" 
                                    value="Purok Luzviminda">Purok Luzviminda</option>
                            <option className="text-slate-300 font-poppins text-lg bg-primary" 
                                    value="Purok Paraiso">Purok Paraiso</option>
                            <option className="text-slate-300 font-poppins text-lg bg-primary" 
                                    value="Purok New Society">Purok New Society</option>
                            <option className="text-slate-300 font-poppins text-lg bg-primary" 
                                    value="Purok Matamis">Purok Matamis</option>
                            <option className="text-slate-300 font-poppins text-lg bg-primary" 
                                    value="Purok Osmena">Purok Osmena</option>
                            <option className="text-slate-300 font-poppins text-lg bg-primary" 
                                    value="Purok Roxas">Purok Roxas</option>
                          </select>

                      {/* <label className="sign-up-input-tab cursor-pointer flex items-center relative" htmlFor=""
                              onClick={() => setDropDownAdd((prev) => !prev)}>

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

                      </label> */}
                      
                    </div>

                </div>

                <div className= "text-red-600 font-poppins absolute bottom-8 text-lg">
                      {error}
                </div>  

                <div className="sm:w-full w-[280px] sm:h-auto h-16 items-center flex flex-row gap-4 justify-center sm:bg-transparent 
                                bg-opacity-80 bg-primary rounded-3xl relative sm:top-0 top-[-45px]">

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
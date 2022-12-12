import React, { useEffect, useRef, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router'


const LandingWelcomePage = () => {

  const [toggle, setToggle] = useState()
  const { resetPassword } = useAuth()
  const emailRef = useRef()
  const { login } = useAuth()
  const emailResetRef = useRef()
  const passRef = useRef()
  const [error, setError] = useState('')
  const [resetError, setResetError] = useState()
  const [laoding, setLoading] = useState(false)
  const [resetLaoding, setResetLoading] = useState(false)
  const [resetTab, setResetTab] = useState()
  const [message, setMessage] = useState()
  
  const [navbar, setNavbar] = useState(false)

  let navigate = useNavigate()


  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setLoading(true)
      setError("")
      await login(emailRef.current.value, passRef.current.value)
      navigate("/home")
    }
    catch{
      setError('Failed to sign in')
    }

    setLoading(false)
  }

  async function handleResetSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setResetLoading(true)
      setError("")
      await resetPassword(emailResetRef.current.value)
      setMessage("Check your email to complete this proccess")
    }
    catch(err){
      setResetError('Failed to Reset')
      console.log(err)
    }

    setResetLoading(false)
  }


  return (

    <div className="relative w-full">
{/* 
          <div className={`${toggleLogin ? 'absolute' : 'hidden'} z-50 w-screen h-screen bg-primary bg-opacity-90 cursor-pointer`}>


                  <div className="absolute flex right-2 top-2 text-fontColor font-poppins w-10 h-10 bg-slate-700 justify-center items-center
                                  text-2xl rounded-full"
                      onClick={() => setToggleLogin(false)}>
                      X
                  </div>

                  <div className="w-screen h-screen flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  
                                                          className="rounded-full h-14 w-14 border-2 border-fontColor
                                                          -translate-y-3 scale-110 stroke-fontColor relative top-10">

                                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                </svg>
                    
                  </div>


          </div> */}

          <ul className={`${navbar ? 'flex' : 'hidden'} flex-col items-center justify-center gap-3 font-poppins absolute z-40 w-[150px] h-[200px] bg-navbar
                           text-white md:top-12 sm:top-28 top-20 sm:right-20 right-10 rounded-2xl border-fontColor border-2 sidebar bg-opacity-9 cursor-pointer`}>

                          <a onClick={() => navigate('/')}>Home</a>
                          <a onClick={() => navigate('/landingactivities')}>Activities</a>
                          <a onClick={() => navigate('/landingtour')}>Tour</a>
                          <a onClick={() => setToggle(true)}>Login</a>


          </ul>

          <div className={`${resetTab ? 'toggleOn' : 'toggleOff'} absolute z-[60] sm:w-[400px] sm:h-[500px] w-72 h-96 bg-navbar
                           text-primary sm:top-14 sm:right-20 right-10 top-10 rounded-3xl border-fontColor border-2 sidebar`}>

                  <div className="z-20 md:hidden absolute flex right-2 top-2 text-fontColor font-poppins w-10 h-10 bg-slate-900 justify-center items-center
                                                text-2xl rounded-full border-slate-700 border-2 cursor-pointer"
                                    onClick={() => setResetTab(false)}>
                                    X
                  </div>

                  <div className="flex w-full relative flex-col gap-10 items-center sm:m-10">



                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                                      className="rounded-full md:h-14 md:w-14 h-10 w-10 border-2 border-slate-700
                                                  -translate-y-3 scale-110 stroke-fontColor relative top-10 bg-slate-900">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                </svg>


 

                                <div className="font-poppins text-fontColor flex flex-col relative top-10 gap-2">

                                              <label>
                                                Enter your email here:
                                              </label> 

                                              <input className="sign-up-input" type="email" ref={emailResetRef} required />  

                                </div>


                                <div className={`${resetError ? "flex" : "hidden"} font-poppins absolute bottom-16 bg-primary rounded-lg border-2
                                                             border-fontColor flex flex-row items-center`}>
                                  
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                           className="w-8 h-8 stroke-red-600">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                      </svg>

                                      <h1 className="text-red-600">
                                        {resetError}
                                      </h1>
                                </div> 

                                <div className={`${message ? "flex" : "hidden"} font-poppins absolute sm:bottom-12 bottom-8 bg-primary rounded-lg border-2
                                                             border-fontColor flex flex-col items-center text-center sm:w-full w-48`}>
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                           className="w-8 h-8 stroke-fontColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                      </svg>

                                      <h1 className="text-white">
                                        {message}
                                      </h1>
                                </div>

                                <div className="w-full flex flex-row justify-center gap-10 relative mt-10">

                                    <button className="font-poppins text-white font-semibold rounded-xl
                                                        text-lg hover:font-semibold bg-slate-700 w-20 h-8
                                                        transition-all duration-300 ease-in-out"
                                            onClick={() => {setResetTab(false)}}>
                                      Go back
                                    </button> 

                                    <button onClick={handleResetSubmit}
                                            disabled= {resetLaoding}
                                            className="font-poppins text-white font-semibold rounded-xl
                                                        text-lg hover:font-semibold bg-fontColor w-20 h-8
                                                        transition-all duration-300 ease-in-out">
                                      Confirm
                                    </button>  

                                </div>

                                <div className="absolute bottom-3 left-3 flex flex-row gap-2">

                                  <h1 className="text-sm font-poppins text-fontColor ">
                                    Don't have an account?
                                  </h1>
                                  <h1 className="text-sm font-poppins text-white hover:scale-110 hover:-translate-y-1
                                                transition-all duration-300 ease-in-out cursor-pointer" 
                                     onClick={() => navigate('/landingsignup')}>
                                    Click here!
                                  </h1>
                                </div>
                    </div>

          </div>

          <div className={`${toggle ? 'flex' : 'hidden'} z-50 absolute md:w-[400px] md:h-[500px] w-72 h-96  bg-navbar bg-opacity-95
                           text-primary sm:top-14 sm:right-20 right-10 top-10 rounded-3xl border-slate-700 border-2 sidebar`}>

                            <div className="z-20 md:hidden absolute flex right-2 top-2 text-fontColor font-poppins w-10 h-10 bg-slate-900 justify-center items-center
                                                text-2xl rounded-full border-slate-700 border-2"
                                    onClick={() => setToggle(false)}>
                                    X
                            </div>


                            <div className="z-10 flex md:gap-8 w-full relative flex-col items-center">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  
                                    className="rounded-full md:h-14 md:w-14 h-10 w-10 border-2 border-slate-700
                                    -translate-y-3 scale-110 stroke-fontColor relative top-10 bg-slate-900">

                                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                </svg>

                                <div className=" flex flex-row md:gap-4 gap-2 w-full justify-center relative top-16">

                                    <div className="shrink-0 flex md:gap-14 gap-10 flex-col text-center">

                                          <div className="sign-up-text">

                                              <label>
                                                Email
                                              </label>   

                                          </div>

                                          <div className="sign-up-text mt-1">

                                              <label>
                                              Password
                                              </label>   

                                          </div>

                                          
                                 

                                    </div>
  
                                    <div className="flex gap-11 flex-col">

                                          <input className="md:sign-up-input sign-up-input-sm" type="email" ref={emailRef} required />

                                          <input className="md:sign-up-input sign-up-input-sm" type="password" ref={passRef} required />


                                    </div>
  


                                </div>

                                <div className={`${error ? "flex" : "hidden"} font-poppins relative md:top-8 top-16 m-4 bg-primary rounded-lg border-2 
                                                          border-fontColor flex flex-row items-center`}>
                                  
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                           className="w-8 h-8 stroke-red-600">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                      </svg>
                                      <h1 className="text-red-600">
                                        {error}
                                      </h1>


                                </div> 

                                <div className={`${error ? "relative mt-16" : "absolute bottom-32"} bg-fontColor md:w-28 md:h-9 w-20 flex items-center 
                                                  justify-center rounded-2xl hover:scale-110
                                                  transition-all duration-300 ease-in-out`}>

                                    <button onClick={handleSubmit}
                                            disabled= {laoding}
                                            className="font-poppins text-white font-semibold
                                                        md:text-lg text-sm hover:font-semibold
                                                        transition-all duration-300 ease-in-out">
                                      Confirm
                                    </button>   

                                </div>

                                <div className={`${error ? "flex" : "hidden"}`}>
                                  <div className="font font-poppins flex flex-row relative gap-1 text-xs md:text-base mt-3 md:top-[-130px]">

                                    <span className="text-white">Forgot password?</span>
                                    <h1 className="text-fontColor cursor-pointer hover:scale-110 hover:-translate-y-1
                                                        transition-all duration-300 ease-in-out"
                                        onClick={() => {setResetTab(true)}}>Click here!</h1>
                                    <span className="text-white">to reset.</span>
                                    
                                  </div>
         
                                </div>

                                <div className="absolute bottom-3 left-3 flex flex-row gap-2">

                                  <h1 className="md:text-base text-xs font-poppins text-fontColor ">
                                    Don't have an account?
                                  </h1>
                                  <a className="md:text-base text-xs font-poppins text-white hover:scale-110 hover:-translate-y-1
                                                transition-all duration-300 ease-in-out cursor-pointer" 
                                     onClick={() => navigate('/landingsignup')}>
                                    Click here!
                                  </a>
                                </div>
          </div>
            
          </div>

          <div className="relative md:m-10 xs:m-20 m-10 z-0">
          
            <div className="flex flex-row">

                <div className="relative flex flex-col">


                  <div className="w-60 sm:w-full">
                    <h1 className="sm:text-white text-fontColor sm:text-4xl text-3xl font-poppins font-semibold
                                    transition-all duration-500 hover:bg-gray-700
                                    rounded-lg cursor-none hover:scale-x-110
                                  hover:text-fontColor ease-in-out"
                      >Welcome to Esperanza
                    </h1>
                  </div>
                  
                  <div>
                    <h2 className="text-white text-lg font-poppins
                                    transition-all duration-300 hover:bg-gray-700
                                    rounded-lg cursor-none hover:scale-x-110
                                  hover:text-fontColor ease-in-out"
                      >Enjoy every moment spent here
                    </h2>
                  </div>
                  
                </div>

                <div className="absolute md:flex hidden right-0 gap-6 items-center">


                      <h1 className={`${toggle ? 'hover-text-landing' : 'normal-text-landing'} cursor-pointer`}
                          onClick={() => setToggle((prev) => !prev)}
                        >Login here!
                      </h1>              

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  
                          className={`${toggle ? 'hover-icon-landing' : 'normal-icon-landing'} flex items-center cursor-pointer`}
                          onClick={() => setToggle((prev) => !prev)}>

                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                      </svg>


          

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

export default LandingWelcomePage
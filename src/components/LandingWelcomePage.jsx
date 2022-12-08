import React, { useRef, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router'


const LandingWelcomePage = () => {

  const [onHover, setOnHover] = useState(false);
  const [toggle, setToggle] = useState(false)
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

          <div className={`${resetTab ? 'toggleOn' : 'toggleOff'} absolute z-50 w-[400px] h-[500px] bg-navbar
                           text-primary top-14 right-20 rounded-3xl border-fontColor border-2 sidebar`}>

                  <div className="flex w-full relative flex-col items-center m-16">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                                      className="rounded-full h-14 w-14 border-2 border-fontColor
                                                -translate-y-3 scale-110 stroke-fontColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                </svg>


 

                                <div className="font-poppins text-fontColor flex flex-col relative top-10 gap-2">

                                              <label>
                                                Enter your email here:
                                              </label> 

                                              <input className="sign-up-input" type="email" ref={emailResetRef} required />  

                                </div>


                                <div className={`${resetError ? "flex" : "hidden"} font-poppins relative top-12 m-4 bg-primary rounded-lg border-2 border-fontColor flex flex-row items-center`}>
                                  
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                           className="w-8 h-8 stroke-red-600">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                      </svg>

                                      <h1 className="text-red-600">
                                        {resetError}
                                      </h1>
                                </div> 

                                <div className={`${message ? "flex" : "hidden"} font-poppins relative top-12 m-4 bg-primary rounded-lg border-2 border-fontColor flex flex-row items-center`}>
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                           className="w-8 h-8 stroke-fontColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                      </svg>

                                      <h1 className="text-white">
                                        {message}
                                      </h1>
                                </div>

                                <div className="w-full flex flex-row justify-center gap-10 relative top-14">

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
                                     onClick={() => {navigate('/signup')}}>
                                    Click here!
                                  </h1>
                                </div>
                    </div>

          </div>

          <div className={`${toggle ? 'toggleOn' : 'toggleOff'} absolute z-30 w-[400px] h-[500px] bg-navbar bg-opacity-90
                           text-primary top-14 right-20 rounded-3xl border-fontColor border-2 sidebar`}>

                            <div className="flex gap-8 w-full relative flex-col items-center">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  
                                    className="rounded-full h-14 w-14 border-2 border-fontColor
                                    -translate-y-3 scale-110 stroke-fontColor relative top-10">

                                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                </svg>

                                <div className=" flex flex-row gap-4 w-full justify-center relative top-16">

                                    <div className="shrink-0 flex gap-14 flex-col">

                                          <div className="sign-up-text">

                                              <label>
                                                Email
                                              </label>   

                                          </div>

                                          <div className="sign-up-text">

                                              <label>
                                              Password
                                              </label>   

                                          </div>

                                          
                                 

                                    </div>
  
                                    <div className="flex gap-11 flex-col">

                                          <input className="sign-up-input" type="email" ref={emailRef} required />

                                          <input className="sign-up-input" type="password" ref={passRef} required />


                                    </div>
  


                                </div>

                                <div className={`${error ? "flex" : "hidden"} font-poppins relative top-8 m-4 bg-primary rounded-lg border-2 border-fontColor flex flex-row items-center`}>
                                  
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                           className="w-8 h-8 stroke-red-600">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                      </svg>
                                      <h1 className="text-red-600">
                                        {error}
                                      </h1>


                                </div> 

                                <div className={`${error ? "relative" : "absolute bottom-32"} bg-fontColor w-28 h-9 flex items-center 
                                                  justify-center rounded-2xl hover:scale-110
                                                  transition-all duration-300 ease-in-out`}>

                                    <button onClick={handleSubmit}
                                            disabled= {laoding}
                                            className="font-poppins text-white font-semibold
                                                        text-lg hover:font-semibold
                                                        transition-all duration-300 ease-in-out">
                                      Confirm
                                    </button>   

                                </div>

                                <div className={`${error ? "flex" : "hidden"}`}>
                                  <div className="font font-poppins flex flex-row gap-1">

                                    <span className="text-white">Forgot password?</span>
                                    <h1 className="text-fontColor cursor-pointer hover:scale-110 hover:-translate-y-1
                                                        transition-all duration-300 ease-in-out"
                                        onClick={() => {setResetTab(true)}}>Click here!</h1>
                                    <span className="text-white">to reset.</span>
                                    
                                  </div>
         
                                </div>

                                <div className="absolute bottom-3 left-3 flex flex-row gap-2">

                                  <h1 className="text-md font-poppins text-fontColor ">
                                    Don't have an account?
                                  </h1>
                                  <a className="text-md font-poppins text-white hover:scale-110 hover:-translate-y-1
                                                transition-all duration-300 ease-in-out" 
                                     href="/signup">
                                    Click here!
                                  </a>
                                </div>
          </div>
            
          </div>

          <div className="relative w-full mt-16 z-0">
          
            <div className="flex flex-row">

                <div className="relative flex flex-col ml-20">


                  <div className="flex flex-auto">
                    <h1 className="text-white text-4xl font-poppins font-semibold
                                    transition-all duration-500 hover:bg-gray-700
                                    rounded-lg cursor-none hover:scale-x-110
                                  hover:text-fontColor ease-in-out"
                      >Welcome to Ezperanza
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

                <div className="absolute flex right-20 gap-6 items-center">


                      <h1 className={`${toggle ? 'hover-text-landing' : 'normal-text-landing'} cursor-pointer`}
                          onPointerEnter={() => setOnHover (true)}
                          onPointerLeave={() => setOnHover (false)}
                          onClick={() => setToggle((prev) => !prev)}
                        >Login here!
                      </h1>              





                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  
                          className={`${toggle ? 'hover-icon-landing' : 'normal-icon-landing'} flex items-center cursor-pointer`}
                          onPointerEnter={() => setOnHover (true)}
                          onPointerLeave={() => setOnHover (false)}
                          onClick={() => setToggle((prev) => !prev)}>

                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                      </svg>


          

                </div>

                
            </div>



          </div>

    </div>
  )
}

export default LandingWelcomePage
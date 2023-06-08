import React, { useRef, useState } from 'react'
import { sign_up_bg } from './assets'
import { useAuth } from './context/AuthContext'
import { useNavigate } from 'react-router'



const Login = () => {
  const emailRef = useRef()
  const passRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [laoding, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState()
  let navigate = useNavigate()
  

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setLoading(true)
      setError("")
      await login(emailRef.current.value, passRef.current.value)
      navigate("/")
    }
    catch{
      setError('Failed to sign in')
    }

    setLoading(false)
  }
  return (
    <div className="relative h-screen flex items-center justify-center">

    
      <div className="absolute flex w-screen h-full overflow-hidden z-10">

        <img className="h-full w-full blur-lg scale-110 hover:scale-125 transition-all duration-500 ease-in-out" 
             src={sign_up_bg} alt="" />

      </div>

      <div className="z-20 bg-none rounded-2xl w-[1000px] h-[600px] flex bg-fontColor bg-opacity-10
                      flex-row overflow-hidden drop-shadow-xl">

        <div className="bg-green-300 h-full w-[500px] overflow-hidden">

          <img className="h-full w-full hover:scale-125 hover:translate-x-10
                          transition-all duration-500 ease-in-out 
                          cursor-pointer" 
                          src={sign_up_bg} alt="" />
        </div>

        <div  
              className="w-[500px] h-full flex justify-center items-center">

             <div className="w-[400px] h-[500px] flex justify-center items-center
                          flex-col relative gap-10">

                <div className="w-full flex justify-center">

                    <h1 className="font-poppins text-3xl font-semibold text-fontColor">
                      Login
                    </h1>

                </div>
                            
                <div className=" flex flex-row gap-4 w-full justify-center">

                    <div className="shrink-0 flex gap-7 flex-col">

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
   
                      
                      <div className= "text-black font-poppins">
                           {error}
                      </div>                                      

                    </div>

                    <div className="flex gap-5 flex-col">

                      <input className="sign-up-input" type="email" ref={emailRef} required />

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

                      <input className="sign-up-input" type="password" ref={passRef} required />


                    </div>



                </div>

                <div className="w-full flex flex-row gap-4 justify-center">

                  <div className="w-24 h-10 flex items-center bg-slate-800
                                  justify-center rounded-2xl hover:scale-110
                                  transition-all duration-300 ease-in-out">

                      <a className="font-poppins text-white font-semibold
                                          text-lg hover:font-bold
                                          transition-all duration-300 ease-in-out"
                              href='/signup'>
                        Create
                      </a>    

                  </div>



                  <div className="bg-fontColor w-24 h-10 flex items-center
                                  justify-center rounded-2xl hover:scale-110
                                  transition-all duration-300 ease-in-out">

                      <button onClick={handleSubmit}
                              disabled= {laoding}
                              className="font-poppins text-white font-semibold
                                          text-lg hover:font-bold
                                          transition-all duration-300 ease-in-out">
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

export default Login
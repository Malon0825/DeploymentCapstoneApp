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
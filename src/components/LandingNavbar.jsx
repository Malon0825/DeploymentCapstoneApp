import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { logo } from '../assets'

const LandingNavbar = () => {
  const [hover, setHover] = useState(false)
  const [hover_Act, setAct] = useState(false)
  const [hover_Tour, setTour] = useState(false)
 


  let navigate = useNavigate()

  
  return (



          <div className="relative hidden h-screen w-[250px] md:flex flex-col gap-10  
                          items-center bg-navbar">


                    <div className="flex">
                      
                      <img src={logo} alt="logo" 
                      className="h-20 w-22 mt-14 hover:scale-125 transition-all 
                                duration-300 ease-in-out"/>

                    </div>

                    <div className="flex mt-16">

                      <div className="flex flex-col gap-12">


                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                          className={`${hover ? 'hover-text' : 'navbar-icon'} relative top-[-10px]`}>
                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                          className={`${hover_Act ? 'hover-text' : 'navbar-icon'} relative top-[-10px]`}>
                          <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                          className={`${hover_Tour ? 'hover-text' : 'navbar-icon'} relative top-[-10px]`}>
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>


                      </div>
                      

                    
                      <ul className="flex flex-col gap-16 cursor-pointer">

                        <li className="navbar-text">
                          <a onClick={() => navigate("/")}
                                     onPointerEnter={() => setHover (true)}
                                     onPointerLeave={() => setHover (false)}
                            >Home</ a> 
                        </li>

                        <li className="navbar-text">
                          <a onClick={() => navigate("/landingactivities")}
                                    onPointerEnter={() => setAct (true)}
                                    onPointerLeave={() => setAct (false)}
                          >Activities</a>
                        </li>

                        <li className="navbar-text">
                          <a onClick={() => navigate("/landingtour")}
                                    onPointerEnter={() => setTour (true)}
                                    onPointerLeave={() => setTour (false)}
                          >Tour</a>
                        </li>

                      </ul>


                    </div>

          </div>


  )
}
export default LandingNavbar
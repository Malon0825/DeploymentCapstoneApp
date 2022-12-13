import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { logo } from '../assets'
import { useAuth } from '../context/AuthContext';


const Navbar = () => {
  const [hover, setHover] = useState(false);
  const [hover_Req, setReq] = useState(false);
  const [hover_Act, setAct] = useState(false);
  const [hover_Tour, setTour] = useState(false);
  const [hover_Log, setLog] = useState(false);
  const { logout } = useAuth()
  const [error, setError] = useState()
  let navigate = useNavigate()

  async function handleLogOut() {
    setError('')

    try {
      await logout()
      navigate("/")
    }catch {
    }
  }
  
  return (



          <div className="relative hidden h-screen w-[250px] md:flex flex-col gap-10  
                          items-center bg-navbar">

                    <div className="flex">
                    
                          <img src={logo} alt="logo" 
                          className="h-20 w-22 mt-14 hover:scale-125 transition-all 
                                    duration-300 ease-in-out cursor-pointer"/>                       

                    </div>

                    <div className="flex mt-16">

                      <div className="flex flex-col gap-12">


                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                          className={`${hover ? 'hover-text' : 'navbar-icon'} relative top-[-10px]`}>
                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                          className={`${hover_Req ? 'hover-text' : 'navbar-icon'} relative top-[-10px]`}>
                          <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
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
                          <a onClick={() => navigate('/home')}
                                     onPointerEnter={() => setHover (true)}
                                     onPointerLeave={() => setHover (false)}
                            >Home</ a> 
                        </li>

                        <li className="navbar-text">
                          
                          <a onClick={() => navigate('/request')}
                                     onPointerEnter={() => setReq (true)}
                                     onPointerLeave={() => setReq (false)}
                            >Request</a>
                        </li>

                        <li className="navbar-text">
                          <a onClick={() => navigate('/activity')}
                                    onPointerEnter={() => setAct (true)}
                                    onPointerLeave={() => setAct (false)}
                          >Activities</a>
                        </li>

                        <li className="navbar-text">
                          <a onClick={() => navigate('/tour')}
                                    onPointerEnter={() => setTour (true)}
                                    onPointerLeave={() => setTour (false)}
                          >Tour</a>
                        </li>


                      </ul>


                    </div>

                    <div className="absolute flex flex-row bottom-12">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                      className={`${hover_Log ? 'hover-text' : 'navbar-icon'} mr-4`}>
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg>

                      <button className="navbar-text" 
                              onClick={handleLogOut}
                              onPointerEnter={() => setLog (true)}
                              onPointerLeave={() => setLog (false)}
                      >Logout</button>
                    </div>

                    



          </div>


  )
}
export default Navbar
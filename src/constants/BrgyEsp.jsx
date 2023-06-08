import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navbar, LandingNavbar } from '../components'
import { ENCHS_1, ENCHS_2 } from '../assets'


const BrgyEsp = () => {

  const { currentUser } = useAuth()
  console.log(currentUser)

  return (
    <div className="relative flex w-full h-full bg-primary scroll-auto">

      <div className={`${currentUser ? 'flex' : 'hidden'}`}>
          <aside className="h-screen sticky top-0">
                <Navbar />
          </aside>        
      </div>

      <div className={`${currentUser ? 'hidden' : 'flex'}`}>
          <aside className="h-screen sticky top-0">
                <LandingNavbar />
          </aside>        
      </div>

      <div className="flex flex-col items-center w-full p-10 gap-10">
        <h1 className="font-poppins font-semibold text-2xl text-fontColor">
            Welcome to Barangay Esperanza
        </h1>
        <div className="relative h-[400px] w-[600px] flex flex-row bg-slate-700 bg-opacity-80 rounded-xl justify-center items-center">

          <div className="absolute h-[350px] w-[550px] rounded-xl overflow-hidden">
            <img className="image-slide-2 rounded-xl" src={ENCHS_2} alt="image" />            
          </div>

          <div className="absolute h-[350px] w-[550px] rounded-xl overflow-hidden">
            <img className="image-slide-1 rounded-xl" src={ENCHS_1} alt="image" />
          </div>


        </div>

        <div className="relative h-[300px] w-[700px] flex bg-slate-700 bg-opacity-20 rounded-xl justify-center items-center p-10">
          <p className="font-poppins font-light text-lg text-white bg-primary rounded-lg p-3">
            A peaceful school with a quiet environment and lots of trees would be a place where students can focus on 
            their studies without distractions. The school would be located in a natural setting, surrounded by lush greenery 
            and plenty of trees.
            The campus would have a serene and calm atmosphere, with well-maintained gardens and lawns that provide a sense of
            tranquility. The trees would provide shade and fresh air, creating a healthy and refreshing environment for the students.
          </p>
        </div>
      </div>
    </div>
  )
}

export default BrgyEsp
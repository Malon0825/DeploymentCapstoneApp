import React from 'react'
import {email_bg, email_bg_1, email_bg_2} from '../assets'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import { useNavigate } from 'react-router'
import { useState } from 'react'

const EmailPage = () => {

  const [submitEmail, setSubmitEmail] = useState(false)
  let navigate = useNavigate()

  const form = useRef()

  const sendFeedbackEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1g19nsi', 'template_s94515n', form.current, 'VV5VcT-KmR6FqT3GP')
      .then((result) => {

        setSubmitEmail(true)

      }, (error) => {
          console.log(error.text);
      }); 
      e.target.reset()
  };

  return (

    <div className="w-screen h-screen bg-[rgba(255,246,230,0.66)] flex items-center justify-center">
      
      <div className={`${submitEmail ? 'flex' : 'hidden'} absolute z-30 w-full h-full bg-[rgba(255,246,230,0.66)] flex items-center justify-center`}>

          <div className="sm:w-[400px] w-[300px] h-[400px] drop-shadow-2xl shadow-xl shadow-slate-400 border-[#171c35] rounded-lg border-2 bg-slate-200 bg-opacity-90
                          flex flex-col gap-5 items-center justify-center overflow-hidden">

                 <img src={email_bg_2} alt="" className="absolute bottom-0 hover:scale-125 hover:translate-y-10 transition-all duration-300 ease-in-out"/>

                 <h1 className="text-3xl font-poppins font-semibold z-40">
                  Thank You
                 </h1>

                 <button className="bg-[#f0c46a] text-xl font-poppins w-28 rounded-2xl font-semibold hover:scale-125 
                            transition-all duration-300 ease-in-out z-40"
                          onClick={() => navigate('/home')}>
                        Continue
                </button>

          </div>   
            
      </div>



      <div className="w-full h-full overflow-hidden absolute z-0 flex items-center justify-center">
              <img src={email_bg} alt="" 
            className=""/>
      </div>



      <form className="sm:w-[550px] xl:h-[800px] w-[350px] drop-shadow-2xl shadow-xl shadow-slate-400 border-[#171c35] rounded-lg border-2 bg-slate-200 bg-opacity-90
                      z-10 flex flex-col items-center"
            ref={form} onSubmit={sendFeedbackEmail}>

        <button className="absolute right-5 top-5 w-8 h-8 rounded-full text-xl font-semibold bg-[#f0c46a]"
                onClick={() => navigate('/home')}>
            X
        </button>


        <div className="mt-10">
          <img src={email_bg_1} alt="" 
                className="w-[280px] h-[200px]"/>
        </div>

        <h1 className="sm:text-3xl text-xl font-poppins font-semibold ">
          Feedback
        </h1>

        <div className="w-full">

          <div className="flex flex-row mt-10 sm:ml-10 gap-2">
                <h2 className="text-center w-[100px] sm:text-xl text-base text-[#f0c46a] font-poppins font-semibold">
                  from:
                </h2>
                <input type="text" name="userName" required
                        className="sm:text-xl text-base sm:w-[340px] w-[200px] font-poppins font-semibold bg-transparent border-b-2 border-[#171c35]" />            
          </div>

          <div className="flex flex-row mt-10 sm:ml-10 gap-2">
                <h2 className="text-center w-[100px] sm:text-xl text-base text-[#f0c46a] font-poppins font-semibold">
                  email:
                </h2>
                <input type="text" name="userEmail" required
                        className="sm:text-xl text-base sm:w-[340px] w-[200px] font-poppins font-semibold bg-transparent border-b-2 border-[#171c35]" />            
          </div>

          <div className="flex flex-row mt-10 sm:ml-10 ml-2 gap-2">
                <h2 className="sm:text-xl text-base text-[#f0c46a] font-poppins font-semibold">
                  message:
                </h2>
                <textarea name="userMessage" id="" cols="30" rows="5"
                          className="sm:flex hidden  text-xl font-poppins font-semibold bg-transparent border-b-2 border-[#171c35]">
                </textarea>   

                <textarea name="userMessage" id="" cols="23" rows="3"
                          className="sm:hidden flex text-base font-poppins font-semibold bg-transparent border-b-2 border-[#171c35]">
                </textarea>    
          </div>

        </div>

        <button className="bg-[#f0c46a] text-xl font-poppins sm:mt-10 sm:mb-2 mt-5 mb-5 w-28 rounded-2xl font-semibold hover:scale-125 
                            transition-all duration-300 ease-in-out"
                type="submit">
                Submit
        </button>


      </form>
      
    </div>
  )
}

export default EmailPage
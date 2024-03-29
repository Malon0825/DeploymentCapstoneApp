import React, { useRef, useState } from 'react'
import { clearance } from '../assets'
import { Navbar, Welcome } from '../components'
import emailjs from '@emailjs/browser'
import dayjs from "dayjs"
import { useAuth } from '../context/AuthContext'
import { getFirestore, getDoc, doc, query, where, collection, onSnapshot, updateDoc, arrayUnion } from 'firebase/firestore'

const RequestPage = () => {

  const [isChecked, setIsChecked] = useState(false);
  const [userId, setUserID] = useState()
  const { currentUserId } = useAuth()

  const [toggleClear, setToggleClear] = useState(false)
  const [toggleMessage, setToggleMessage] = useState(false)

  const [reqClearance, setClearance] = useState(false)
  const [reqResidency, setResidency] = useState(false)
  const [reqCertificate, setCertificate] = useState(false)
  const [reqMulDoc, setMulDoc] = useState(false)


  const [date, setDate] = useState()
  const [time, setTime] = useState()
  const [credType, setCredType] = useState()
  const [requestTime, setRequestTime] = useState(false)

  
  const form = useRef()


  //Access Database
  const db = getFirestore()
  const colRef = collection(db, 'users')
  const q = query(colRef, where("userId", "==", currentUserId))

  onSnapshot(q, (snapshot) => {
    let users = []
    snapshot.docs.forEach((doc) => {
      users.push({ ...doc.data(), id: doc.id})
    })
    
    users.map((user) => {
        setUserID(user.id)
        setRequestTime(true)     
    })
    if (requestTime === true){
      dateToday()
    }


  })  

  //Send Email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1g19nsi', 'template_4ji04x8', form.current, 'VV5VcT-KmR6FqT3GP')
      .then((result) => {
          userData()
          setToggleMessage(true)        
          setToggleClear(false)

      }, (error) => {
          console.log(error.text);
      }); 
      e.target.reset()
  };

  const sendMulDocEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_1g19nsi', 'template_s94515n', form.current, 'VV5VcT-KmR6FqT3GP')
          .then((result) => {
              userData()
              setToggleMessage(true)        
              setToggleClear(false)
    
          }, (error) => {
              console.log(error.text);
          }); 
          e.target.reset()
      };
    

  //Request Date
  const dateToday = () => {

    setCredType("Barangay Clearance")

    const year = dayjs().year()
    const month = dayjs().month()
    const monthName = months[month]

    const day = dayjs().date()
    const hour = dayjs().hour()
    const minute = dayjs().minute()
  
    const strYear = year.toString()
    const strMonth = monthName.toString()
    const strDay = day.toString()
    const strHour = hour.toString()
    const strMinute = minute.toString()

    const time = strHour + ":" + strMinute
    const date = strMonth + " " + strDay + "," + " " + strYear

    setTime(time)
    setDate(date)
  }


  //Update Documents in Database
  const userData = () =>{

    const docRef = doc(db, 'users', userId)

    getDoc(docRef).then(function(doc) {
        if (doc.exists) {

            // setDoc(docRef, {
            //  [date] : credType
            // },{merge:true}
          
          updateDoc(docRef, {
              userRequest: arrayUnion({
                time: time,
                date: date,
                document: credType
              })
              
          })

          console.log("Success")

        } else {
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
  
  }


  //Array of Months
  const months = [

    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
  



  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };



  return (

    <div className="relative flex md:flex-row flex-col w-full h-full bg-primary">


        <aside className="md:flex hidden h-screen sticky top-0">
              <Navbar />
        </aside>

        <aside className="md:hidden w-full sticky top-0 z-20 bg-primary">
              <Welcome />
        </aside>

        <div className={`${toggleMessage ? 'flex' : 'hidden'} absolute w-full h-full z-30 items-center justify-center
                                           sidebar bg-primary bg-opacity-50`}>

            <div className="relative w-[500px] h-[300px] bg-primary border-2 border-fontColor rounded-2xl">

              <div className="w-full h-full flex justify-center items-center flex-col gap-4">

                    <div className="flex flex-row items-center gap-2">

                      <div className="w-12 h-12  absolute left-5 top-5 bg-slate-700 rounded-full flex items-center justify-center">

                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                              className="w-10 h-10 stroke-fontColor">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                          </svg>    
              
                      </div>
                      <h1 className="font-poppins text-fontColor text-2xl font-semibold relative -top-2">
                            Request Succesful
                      </h1>                      
                    </div>

                    <p className="text-white font-poppins text-xl">
                      Please check your email account,<br/>
                      wait for our message, and <br/>
                      prepar a valid Identification Card (ID)<br/>
                      to claim your requested credential<br/>
                      in our Barangay Hall.
                    </p>


                    <button className="relativ w-32 h-10 bg-slate-700 rounded-full font-poppins
                                      text-xl text-fontColor font-semibold hover:bg-fontColor
                                     hover:text-white hover:scale-105 transition-all duration-300
                                      ease-in-out"
                            onClick={() => setToggleMessage(false)}>
                      Continue
                    </button>  
              </div>

  
              

            </div>

        </div>
        
        <div className="relative flex w-screen">

          <form ref={form} onSubmit={sendEmail}
                className={`${reqClearance ? 'flex' : 'hidden'} absolute w-full h-full z-20 justify-center
                                           sideba bg-opacity-50`}>

            <div className="absolute sm:w-[700px] sm:h-[880px] w-[380px] bg-primary border-2 border-fontColor rounded-2xl sm:top-48">

                <button className="absolute right-5 top-5 h-10 w-10 rounded-full bg-slate-700 font-poppins text-2xl
                                    text-fontColor hover:bg-fontColor hover:text-white transition-all duration-300
                                    ease-in-out"
                        onClick={() => setClearance(false)}>
                  X
                </button> 

                <div className="flex flex-col items-center gap-2">

                    <label className="w-max relative m-14 font-poppins text-fontColor text-2xl font-semibold">
                      Credentials Request Form
                    </label>  

                    <div className="flex relative w-full h-full justify-center gap-8">

                      <div className="sm:flex hidden flex-col gap-11">

                          <label className="request-text relative -top-2"                 htmlFor="">Type of<br></br>Document</label> 
                          <label className="request-text relative -top-4"                 htmlFor="">Name</label>                 
                          <label className="request-text relative -top-4"                 htmlFor="">Email</label> 
                          <label className="request-text relative -top-3"                 htmlFor="">Status</label>  
                          <label className="request-text relative -top-3"                 htmlFor="">Age</label>  
                          <label className="request-text relative -top-1"                 htmlFor="">Purpose</label>         
                          <label className="request-text relative -top-3"                 htmlFor="">Purok<br></br>Address</label>      
                          <label className="request-text relative -top-6"                 htmlFor="">Count</label>   

                      </div>

                      <div className="flex flex-col sm:gap-10 gap-2">
                        
                          <label className="request-text sm:hidden flex"                 htmlFor="">Type of Document</label>
                          <select className="request-dropdown-input-tab cursor-pointer" name="credentialType" id="credentialType" required >
                            <option className="text-slate-300 font-poppins text-lg bg-primary" 
                                    value="Barangay Clearance">Barangay Clearance</option>
                          </select>
                
                          <label className="request-text sm:hidden flex"                 htmlFor="">Name</label> 
                          <input className="request-input-tab" type="name"    name="userName"     placeholder="  Real name is required!"    required />

                          <label className="request-text sm:hidden flex"                 htmlFor="">Email</label>
                          <input className="request-input-tab" type="email"   name="userEmail"    placeholder="  sample@gmail.com"          required />

                          <label className="request-text sm:hidden flex"                 htmlFor="">Status</label>
                          <select className="request-dropdown-input-tab cursor-pointer" name="userStatus" id="status" required>
                            <option className="text-slate-300 font-poppins text-lg bg-primary" 
                                    value="">Default</option>
                            <option className="text-slate-300 font-poppins text-lg bg-primary" 
                                    value="Married">Married</option>
                            <option className="text-slate-300 font-poppins text-lg bg-primary" 
                                    value="Single">Single</option>
                            <option className="text-slate-300 font-poppins text-lg bg-primary" 
                                    value="Annualled">Annualled</option>
                          </select>

                          <label className="request-text sm:hidden flex"                 htmlFor="">Age</label>
                          <input className="request-input-tab no-spinners" type="number" min="1"   name="userAge"    placeholder="  Exact age is required!"          required />

                          <label className="request-text sm:hidden flex"                 htmlFor="">Purpose</label>
                          <input className="request-input-tab" type="text"   name="userPurpose"    placeholder="  State the purpose"          required />

                          <label className="request-text sm:hidden flex"                 htmlFor="">Purok Address</label>
                          <select className="request-dropdown-input-tab cursor-pointer" name="userAddress" id="userAddress" required>
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

                          <label className="request-text sm:hidden flex"                 htmlFor="">Count</label>
                          <input className="request-input-tab no-spinners" type="number" min="1"  name="userCopies"    placeholder="  Number of copies"          required />


                      </div>

                    </div> 

                    <div className="flex justify-center relative m-8">

                        <button className="relativ w-32 h-10 bg-slate-700 rounded-full font-poppins
                                           text-xl text-fontColor font-semibold hover:bg-fontColor
                                           hover:text-white hover:scale-105 transition-all duration-300
                                           ease-in-out"
                                type="submit">
                          Submit
                        </button>         
                    
                    </div>  


                </div>


            </div>



          </form>

          <form ref={form} onSubmit={sendEmail}
                className={`${reqResidency ? 'flex' : 'hidden'} absolute w-full h-full z-20 justify-center
                                           sideba bg-opacity-50`}>

            <div className="absolute sm:w-[700px] sm:h-[880px] w-[380px] bg-primary border-2 border-fontColor rounded-2xl sm:top-48">

                <button className="absolute right-5 top-5 h-10 w-10 rounded-full bg-slate-700 font-poppins text-2xl
                                    text-fontColor hover:bg-fontColor hover:text-white transition-all duration-300
                                    ease-in-out"
                        onClick={() => setResidency(false)}>
                  X
                </button> 

                <div className="flex flex-col items-center gap-2">

                    <label className="w-max relative m-14 font-poppins text-fontColor text-2xl font-semibold">
                      Credentials Request Form
                    </label>  

                    <div className="flex relative w-full h-full justify-center gap-8">

                      <div className="sm:flex hidden flex-col gap-11">

                          <label className="request-text relative -top-2"                 htmlFor="">Type of<br></br>Document</label> 
                          <label className="request-text relative -top-4"                 htmlFor="">Name</label>                 
                          <label className="request-text relative -top-4"                 htmlFor="">Email</label> 
                          <label className="request-text relative -top-3"                 htmlFor="">Status</label>  
                          <label className="request-text relative -top-3"                 htmlFor="">Age</label>  
                          <label className="request-text relative -top-1"                 htmlFor="">Purpose</label>         
                          <label className="request-text relative -top-3"                 htmlFor="">Purok<br></br>Address</label>      
                          <label className="request-text relative -top-6"                 htmlFor="">Count</label>   

                      </div>

                      <div className="flex flex-col sm:gap-10 gap-2">
                        
                          <label className="request-text sm:hidden flex"                 htmlFor="">Type of Document</label>
                          <select className="request-dropdown-input-tab cursor-pointer" name="credentialType" id="credentialType" required >
                            <option className="text-slate-300 font-poppins text-lg bg-primary" 
                                    value="Barangay Residency">Barangay Residency</option>
                          </select>

                          <label className="request-text sm:hidden flex"                 htmlFor="">Name</label> 
                          <input className="request-input-tab" type="name"    name="userName"     placeholder="  Real name is required!"    required />

                          <label className="request-text sm:hidden flex"                 htmlFor="">Email</label>
                          <input className="request-input-tab" type="email"   name="userEmail"    placeholder="  sample@gmail.com"          required />

                          <label className="request-text sm:hidden flex"                 htmlFor="">Status</label>
                          <select className="request-dropdown-input-tab cursor-pointer" name="userStatus" id="status" required>
                            <option className="text-slate-300 font-poppins text-lg bg-primary" 
                                    value="">Default</option>
                            <option className="text-slate-300 font-poppins text-lg bg-primary" 
                                    value="Married">Married</option>
                            <option className="text-slate-300 font-poppins text-lg bg-primary" 
                                    value="Single">Single</option>
                            <option className="text-slate-300 font-poppins text-lg bg-primary" 
                                    value="Annualled">Annualled</option>
                          </select>

                          <label className="request-text sm:hidden flex"                 htmlFor="">Age</label>
                          <input className="request-input-tab no-spinners" type="number" min="1"   name="userAge"    placeholder="  Exact age is required!"          required />

                          <label className="request-text sm:hidden flex"                 htmlFor="">Purpose</label>
                          <input className="request-input-tab" type="text"   name="userPurpose"    placeholder="  State the purpose"          required />

                          <label className="request-text sm:hidden flex"                 htmlFor="">Purok Address</label>
                          <select className="request-dropdown-input-tab cursor-pointer" name="userAddress" id="userAddress" required>
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

                          <label className="request-text sm:hidden flex"                 htmlFor="">Count</label>
                          <input className="request-input-tab no-spinners" type="number" min="1"  name="userCopies"    placeholder="  Number of copies"          required />


                      </div>

                    </div> 

                    <div className="flex justify-center relative m-8">

                        <button className="relativ w-32 h-10 bg-slate-700 rounded-full font-poppins
                                           text-xl text-fontColor font-semibold hover:bg-fontColor
                                           hover:text-white hover:scale-105 transition-all duration-300
                                           ease-in-out"
                                type="submit">
                          Submit
                        </button>         
                    
                    </div>  


                </div>


            </div>



          </form>

          <form ref={form} onSubmit={sendEmail}
                className={`${reqCertificate ? 'flex' : 'hidden'} absolute w-full h-full z-20 justify-center
                                           sideba bg-opacity-50`}>

            <div className="absolute sm:w-[700px] sm:h-[880px] w-[380px] bg-primary border-2 border-fontColor rounded-2xl sm:top-48">

                <button className="absolute right-5 top-5 h-10 w-10 rounded-full bg-slate-700 font-poppins text-2xl
                                    text-fontColor hover:bg-fontColor hover:text-white transition-all duration-300
                                    ease-in-out"
                        onClick={() => setCertificate(false)}>
                  X
                </button> 

                <div className="flex flex-col items-center gap-2">

                    <label className="w-max relative m-14 font-poppins text-fontColor text-2xl font-semibold">
                      Credentials Request Form
                    </label>  

                    <div className="flex relative w-full h-full justify-center gap-8">

                      <div className="sm:flex hidden flex-col gap-11">

                          <label className="request-text relative -top-2"                 htmlFor="">Type of<br></br>Document</label> 
                          <label className="request-text relative -top-4"                 htmlFor="">Name</label>                 
                          <label className="request-text relative -top-4"                 htmlFor="">Email</label> 
                          <label className="request-text relative -top-3"                 htmlFor="">Status</label>  
                          <label className="request-text relative -top-3"                 htmlFor="">Age</label>  
                          <label className="request-text relative -top-1"                 htmlFor="">Purpose</label>         
                          <label className="request-text relative -top-3"                 htmlFor="">Purok<br></br>Address</label>      
                          <label className="request-text relative -top-6"                 htmlFor="">Count</label>   

                      </div>

                      <div className="flex flex-col sm:gap-10 gap-2">
                        
                          <label className="request-text sm:hidden flex"                 htmlFor="">Type of Document</label>
                          <select className="request-dropdown-input-tab cursor-pointer" name="credentialType" id="credentialType" required >
                            <option className="text-slate-300 font-poppins text-lg bg-primary" 
                                    value="Barangay Certificate">Barangay Certificate</option>
                          </select>

                          <label className="request-text sm:hidden flex"                 htmlFor="">Name</label> 
                          <input className="request-input-tab" type="name"    name="userName"     placeholder="  Real name is required!"    required />

                          <label className="request-text sm:hidden flex"                 htmlFor="">Email</label>
                          <input className="request-input-tab" type="email"   name="userEmail"    placeholder="  sample@gmail.com"          required />

                          <label className="request-text sm:hidden flex"                 htmlFor="">Status</label>
                          <select className="request-dropdown-input-tab cursor-pointer" name="userStatus" id="status" required>
                            <option className="text-slate-300 font-poppins text-lg bg-primary" 
                                    value="">Default</option>
                            <option className="text-slate-300 font-poppins text-lg bg-primary" 
                                    value="Married">Married</option>
                            <option className="text-slate-300 font-poppins text-lg bg-primary" 
                                    value="Single">Single</option>
                            <option className="text-slate-300 font-poppins text-lg bg-primary" 
                                    value="Annualled">Annualled</option>
                          </select>

                          <label className="request-text sm:hidden flex"                 htmlFor="">Age</label>
                          <input className="request-input-tab no-spinners" type="number" min="1"   name="userAge"    placeholder="  Exact age is required!"          required />

                          <label className="request-text sm:hidden flex"                 htmlFor="">Purpose</label>
                          <input className="request-input-tab" type="text"   name="userPurpose"    placeholder="  State the purpose"          required />

                          <label className="request-text sm:hidden flex"                 htmlFor="">Purok Address</label>
                          <select className="request-dropdown-input-tab cursor-pointer" name="userAddress" id="userAddress" required>
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

                          <label className="request-text sm:hidden flex"                 htmlFor="">Count</label>
                          <input className="request-input-tab no-spinners" type="number" min="1"  name="userCopies"    placeholder="  Number of copies"          required />


                      </div>

                    </div> 

                    <div className="flex justify-center relative m-8">

                        <button className="relativ w-32 h-10 bg-slate-700 rounded-full font-poppins
                                           text-xl text-fontColor font-semibold hover:bg-fontColor
                                           hover:text-white hover:scale-105 transition-all duration-300
                                           ease-in-out"
                                type="submit">
                          Submit
                        </button>         
                    
                    </div>  


                </div>


            </div>



          </form>

          <form ref={form} onSubmit={sendMulDocEmail}
                className={`${reqMulDoc ? 'flex' : 'hidden'} absolute w-full h-full z-20 justify-center
                                           sideba bg-opacity-50`}>

            <div className="absolute sm:w-[700px] sm:h-[880px] w-[380px] bg-primary border-2 border-fontColor rounded-2xl sm:top-48">

                <button className="absolute right-5 top-5 h-10 w-10 rounded-full bg-slate-700 font-poppins text-2xl
                                    text-fontColor hover:bg-fontColor hover:text-white transition-all duration-300
                                    ease-in-out"
                        onClick={() => setMulDoc(false)}>
                  X
                </button> 

                <div className="flex flex-col items-center gap-2">

                    <label className="sm:w-max w-auto relative m-14 font-poppins text-fontColor text-2xl font-semibold">
                      Multiple Credentials Request Form
                    </label>  

                    <div className="flex relative w-full h-full justify-center gap-8">

                      <div className="sm:flex hidden flex-col gap-11">

                          <label className="request-text relative"                 htmlFor="">Type of<br></br>Document</label> 
                          <label className="request-text relative top-[60px]"                 htmlFor="">Name</label>                 
                          <label className="request-text relative top-[62px]"                 htmlFor="">Email</label> 
                          <label className="request-text relative top-[64px]"                 htmlFor="">Status</label>  
                          <label className="request-text relative top-[68px]"                 htmlFor="">Age</label>  
                          <label className="request-text relative top-[70px]"                 htmlFor="">Purpose</label>         
                          <label className="request-text relative top-[70px]"                 htmlFor="">Purok<br></br>Address</label>      
 

                      </div>

                      <div className="flex flex-col sm:gap-10 gap-2">
                        
                          <label className="request-text sm:hidden flex"                 htmlFor="">Type of Document</label>

                          <div className="flex flex-col gap-4">

                                <div className="flex flex-row gap-2">

                                        <div className="bg-fontColor bg-opacity-20 rounded-md w-max">
                                                <input type="checkbox" name="Certificate" id="Certificate" value="Barangay Certificate"/>
                                                <label className="text-white font-poppins text-lg cursor-pointer" htmlFor="Certificate"> Barangay Certificate</label>                                                  
                                        </div>

                                        <div>
                                                <label className="request-text text-lg" htmlFor="cerCopy">Copies </label>   
                                                <input className="no-spinners w-10 bg-fontColor bg-opacity-20 rounded-md
                                                                 focus:bg-slate-500 focus:text-white focus:bg-opacity-5
                                                                 text-white font-poppins text-center" 
                                                        id="cerCopy" type="number" min="1"  name="cerCopy"/>                                              
                                        </div>


                                                                            
                                </div>

                                <div className="flex flex-row gap-2">

                                        <div className="bg-fontColor bg-opacity-20 rounded-md w-max">
                                                <input type="checkbox" name="Residency" id="Residency" value="Barangay Residency"/>
                                                <label className="text-white font-poppins text-lg cursor-pointer" htmlFor="Residency"> Barangay Residency</label>                                                  
                                        </div>

                                        <div>
                                                <label className="request-text text-lg" htmlFor="resCopy">Copies </label>   
                                                <input className="no-spinners w-10 bg-fontColor bg-opacity-20 rounded-md
                                                                 focus:bg-slate-500 focus:text-white focus:bg-opacity-5
                                                                 text-white font-poppins text-center" 
                                                        id="resCopy" type="number" min="1"  name="resCopy" />                                              
                                        </div>


                                                                            
                                </div>

                                <div className="flex flex-row gap-2">

                                        <div className="bg-fontColor bg-opacity-20 rounded-md w-max">
                                                <input type="checkbox" name="Clearance" id="Clearance" value="Barangay Clearance"/>
                                                <label className="text-white font-poppins text-lg cursor-pointer" htmlFor="Clearance"> Barangay Clearance</label>                                                  
                                        </div>

                                        <div>
                                                <label className="request-text text-lg" htmlFor="clearCopy">Copies </label>   
                                                <input className="no-spinners w-10 bg-fontColor bg-opacity-20 rounded-md
                                                                 focus:bg-slate-500 focus:text-white focus:bg-opacity-5
                                                                 text-white font-poppins text-center" 
                                                        id="clearCopy" type="number" min="1"  name="clearCopy" />                                              
                                        </div>


                                                                            
                                </div>

  
                          </div>


                          {/* <label className="request-text">
                                <input
                                type="checkbox"

                                checked={isChecked}
                                onChange={handleCheckboxChange}
                                />
                                {isChecked ? 'Checked' : 'Unchecked'}
                          </label> */}

                          <label className="request-text sm:hidden flex"                 htmlFor="">Name</label> 
                          <input className="request-input-tab" type="name"    name="userName"     placeholder="  Real name is required!"    required />

                          <label className="request-text sm:hidden flex"                 htmlFor="">Email</label>
                          <input className="request-input-tab" type="email"   name="userEmail"    placeholder="  sample@gmail.com"          required />

                          <label className="request-text sm:hidden flex"                 htmlFor="">Status</label>
                          <select className="request-dropdown-input-tab cursor-pointer" name="userStatus" id="status" required>
                            <option className="text-slate-300 font-poppins text-lg bg-primary" 
                                    value="">Default</option>
                            <option className="text-slate-300 font-poppins text-lg bg-primary" 
                                    value="Married">Married</option>
                            <option className="text-slate-300 font-poppins text-lg bg-primary" 
                                    value="Single">Single</option>
                            <option className="text-slate-300 font-poppins text-lg bg-primary" 
                                    value="Annualled">Annualled</option>
                          </select>

                          <label className="request-text sm:hidden flex"                 htmlFor="">Age</label>
                          <input className="request-input-tab no-spinners" type="number" min="1"   name="userAge"    placeholder="  Exact age is required!"          required />

                          <label className="request-text sm:hidden flex"                 htmlFor="">Purpose</label>
                          <input className="request-input-tab" type="text"   name="userPurpose"    placeholder="  State the purpose"          required />

                          <label className="request-text sm:hidden flex"                 htmlFor="">Purok Address</label>
                          <select className="request-dropdown-input-tab cursor-pointer" name="userAddress" id="userAddress" required>
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

                      </div>

                    </div> 

                    <div className="flex justify-center relative mt-6">

                        <button className="relativ w-32 h-10 bg-slate-700 rounded-full font-poppins
                                           text-xl text-fontColor font-semibold hover:bg-fontColor
                                           hover:text-white hover:scale-105 transition-all duration-300
                                           ease-in-out"
                                type="submit">
                          Submit
                        </button>         
                    
                    </div>  


                </div>


            </div>



          </form>

          <div className="relative flex flex-col sm:gap-20 sm:margin m-10 w-full overflow-hidden">

              <h1 className="text-fontColor sm:text-4xl text-xl font-poppins sm:font-semibold
                                    transition-all duration-300 cursor-pointer md:text-center
                                  hover:text-slate-300 ease-in-out">
                  Choose the document
              </h1>

              <div className="relative flex justify-center flex-col items-center">

                  <div className="relative m-10 grid sm:gap-14 gap-6">

                    <div className="relative flex flex-col gap-8 items-center sm:items-start">

                        <h1 className="text-white sm:text-xl font-poppins
                                      transition-all duration-3000 cursor-pointer
                                    hover:text-fontColor ease-in-out">
                          Barangay Certificate
                        </h1>

                        <div className="relative lg:w-[400px] xl:w-[500px] sm:w-[500px] w-72 sm:h-[173px] h-36 bg-slate-700 
                                        bg-opacity-25 rounded-xl sm:ml-3 flex flex-row items-center">



                              <div className="flex relative rounded-lg sm:h-[150px] h-[120px] left-3
                                              overflow-hidden sm:w-[200px] w-36">

                                  <img src={clearance} alt="Barangay Clearance Photo" 
                                  className="flex absolute w-full h-full hover:scale-125 
                                  transition-all duration-500 ease-in-out
                                  cursor-pointer"/>

                              </div>

                              <button className="relative text-white bg-fontColor font-poppins sm:h-20 h-28 sm:w-40 w-28 rounded-2xl
                                                hover:bg-slate-700 hover:text-fontColor transition-all xl:ml-16 lg:ml-6 sm:ml-20 ml-5
                                                text-xl font-semibold only:duration-300 ease-in-out"
                                      onClick={() => setCertificate(true)}>
                                                  Request

                              </button>

                        </div>              
                    </div>

                    <div className="relative flex flex-col gap-8 items-center sm:items-start">

                        <h1 className="text-white sm:text-xl font-poppins
                                      transition-all duration-3000 cursor-pointer
                                    hover:text-fontColor ease-in-out">
                          Barangay Residency
                        </h1>

                        <div className="relative lg:w-[400px] xl:w-[500px] sm:w-[500px] w-72 sm:h-[173px] h-36 bg-slate-700 
                                        bg-opacity-25 rounded-xl sm:ml-3 flex flex-row items-center">



                              <div className="flex relative rounded-lg sm:h-[150px] h-[120px] left-3
                                              overflow-hidden sm:w-[200px] w-36">

                                  <img src={clearance} alt="Barangay Clearance Photo" 
                                  className="flex absolute w-full h-full hover:scale-125 
                                  transition-all duration-500 ease-in-out
                                  cursor-pointer"/>

                              </div>

                              <button className="relative text-white bg-fontColor font-poppins sm:h-20 h-28 sm:w-40 w-28 rounded-2xl
                                                hover:bg-slate-700 hover:text-fontColor transition-all xl:ml-16 lg:ml-6 sm:ml-20 ml-5
                                                text-xl font-semibold only:duration-300 ease-in-out"
                                      onClick={() => setResidency(true)}>
                                                  Request

                              </button>

                        </div>              
                    </div>


                    <div className="relative flex flex-col gap-8 items-center sm:items-start">

                        <h1 className="text-white sm:text-xl font-poppins
                                      transition-all duration-3000 cursor-pointer
                                    hover:text-fontColor ease-in-out">
                          Barangay Clearance
                        </h1>

                        <div className="relative lg:w-[400px] xl:w-[500px] sm:w-[500px] w-72 sm:h-[173px] h-36 bg-slate-700 
                                        bg-opacity-25 rounded-xl sm:ml-3 flex flex-row items-center">



                              <div className="flex relative rounded-lg sm:h-[150px] h-[120px] left-3
                                              overflow-hidden sm:w-[200px] w-36">

                                  <img src={clearance} alt="Barangay Clearance Photo" 
                                  className="flex absolute w-full h-full hover:scale-125 
                                  transition-all duration-500 ease-in-out
                                  cursor-pointer"/>

                              </div>

                              <button className="relative text-white bg-fontColor font-poppins sm:h-20 h-28 sm:w-40 w-28 rounded-2xl
                                                hover:bg-slate-700 hover:text-fontColor transition-all xl:ml-16 lg:ml-6 sm:ml-20 ml-5
                                                text-xl font-semibold only:duration-300 ease-in-out"
                                      onClick={() => setClearance(true)}>
                                                  Request

                              </button>

                        </div>              
                    </div>

                    
                    <div className="relative flex flex-col gap-8 items-center sm:items-start">

                        <h1 className="text-white sm:text-xl font-poppins
                                      transition-all duration-3000 cursor-pointer
                                    hover:text-fontColor ease-in-out">
                          Request Multiple Documents
                        </h1>

                        <div className="relative lg:w-[400px] xl:w-[500px] sm:w-[500px] w-72 sm:h-[173px] h-36 bg-slate-700 
                                        bg-opacity-25 rounded-xl sm:ml-3 flex flex-row items-center">



                              <div className="flex relative rounded-lg sm:h-[150px] h-[120px] left-3
                                              overflow-hidden sm:w-[200px] w-36">

                                  <img src={clearance} alt="Barangay Clearance Photo" 
                                  className="flex absolute w-full h-full hover:scale-125 
                                  transition-all duration-500 ease-in-out
                                  cursor-pointer"/>

                              </div>

                              <button className="relative text-white bg-fontColor font-poppins sm:h-20 h-28 sm:w-40 w-28 rounded-2xl
                                                hover:bg-slate-700 hover:text-fontColor transition-all xl:ml-16 lg:ml-6 sm:ml-20 ml-5
                                                text-xl font-semibold only:duration-300 ease-in-out"
                                      onClick={() => setMulDoc(true)}>
                                                  Request

                              </button>

                        </div>              
                    </div>




                  </div>

              
              </div>


          </div>

        </div>

    </div>
  )
}

export default RequestPage
import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter as Router, Routes as Switch, Route, } from "react-router-dom"
import App from './App'
import { AuthProvider } from './context/AuthContext'
import './index.css'

import Signup from './components/Signup'
import RequestPage from './pages/RequestPage'
import ActivityPage from './pages/ActivityPage'
import TourPage from './pages/TourPage'
import NotificationPage from './pages/NotificationPage'
import ProfilePage from './pages/ProfilePage'
import PrivateRoute from './components/PrivateRoute'
import LandingPage from './LandingPage'
import LandingActivities from './components/LandingActivities'
import LandingTour from './components/LandingTour'
import EmailPage from './pages/EmailPage'

import BrgyEsp from './constants/BrgyEsp'
import BrgyHall from './constants/BrgyHall'
import EES from './constants/EES'
import ENHS from './constants/ENHS'

import LandingEES from './constants/LandingEES'
import LandingENS from './constants/LandingENS'
import LandingEsp from './constants/LandingEsp'
import LandingHall from './constants/LandingHall'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Router>

      <AuthProvider>


          <Switch>

                  <Route path="/" element={<LandingPage />} />

                  <Route path="/landingsignup" element={<Signup />} /> 

                  <Route path="/landingactivities" element={<LandingActivities />} /> 

                  <Route path="/landingtour" element={<LandingTour />} /> 

                  <Route path="/highschool" element={<ENHS />} /> 

                  <Route path="/elementaryschool" element={<EES />} /> 

                  <Route path="/barangayplaza" element={<BrgyHall />} /> 

                  <Route path="/barangayesperanza" element={<BrgyEsp />} /> 

                  <Route path="/landinghighschool" element={<LandingENS />} /> 

                  <Route path="/landingelementaryschool" element={<LandingEES />} /> 

                  <Route path="/landingesperanza" element={<LandingEsp />} /> 

                  <Route path="/landinghall" element={<LandingHall />} /> 

                  <Route path='/home' element={<PrivateRoute/>}>
                        <Route exact path='/home' element={<App/>}/>
                  </Route>  

                  <Route path='/emailpage' element={<PrivateRoute/>}>
                        <Route exact path='/emailpage' element={<EmailPage/>}/>
                  </Route>  

                  <Route path='/request' element={<PrivateRoute/>}>
                        <Route exact path='/request' element={<RequestPage/>}/>
                  </Route>  

                  <Route path='/activity' element={<PrivateRoute/>}>
                        <Route exact path='/activity' element={<ActivityPage/>}/>
                  </Route> 

                  <Route path='/tour' element={<PrivateRoute/>}>
                        <Route exact path='/tour' element={<TourPage/>}/>
                  </Route> 

                  <Route path='/notification' element={<PrivateRoute/>}>
                        <Route exact path='/notification' element={<NotificationPage/>}/>
                  </Route> 

                  <Route path='/profile' element={<PrivateRoute/>}>
                        <Route exact path='/profile' element={<ProfilePage/>}/>
                  </Route> 


            </Switch>          
                

      </AuthProvider> 

    </Router>



  </React.StrictMode>
)

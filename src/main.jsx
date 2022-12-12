import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter as Router, Routes as Switch, Route, } from "react-router-dom"
import App from './App'
import { AuthProvider } from './context/AuthContext'
import './index.css'

import Signup from './pages/Signup'
import RequestPage from './pages/RequestPage'
import ActivityPage from './pages/ActivityPage'
import TourPage from './pages/TourPage'
import NotificationPage from './pages/NotificationPage'
import ProfilePage from './pages/ProfilePage'
import PrivateRoute from './components/PrivateRoute'
import LandingPage from './LandingPage'
import LandingActivities from './components/LandingActivities'
import LandingTour from './components/LandingTour'
import LoginPage from './pages/LoginPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Router>

      <AuthProvider>


          <Switch>

                  <Route path="/" element={<LandingPage />} />

                  <Route path="/login" element={<LoginPage />} />

                  <Route path="/signup" element={<Signup />} /> 

                  <Route path="/landingactivities" element={<LandingActivities />} /> 

                  <Route path="/landingtour" element={<LandingTour />} /> 

                  <Route path='/home' element={<PrivateRoute/>}>
                        <Route exact path='/home' element={<App/>}/>
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

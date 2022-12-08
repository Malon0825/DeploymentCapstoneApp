import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'

const PrivateRoute = () => {

  const { currentUser } = useAuth()
   // determine if authorized, from context or however you're doing it

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
  return currentUser? <Outlet /> : <Navigate to="/" />;
}
export default PrivateRoute




//////////////////////////////////////////////////////////



// import React from 'react'
// import { Route, useNavigate, Routes as Switch } from 'react-router'
// import { useAuth } from '../context/AuthContext'

// export default function PrivateRoute({component: Component, ...rest}) {
//   const { currentUser } = useAuth()npm run dev

//   let navigate = useNavigate()

//   return (
//     <Switch>
//       <Route
        // {...rest}
        // render={props => {
        //   return currentUser ? <Component {...props} /> : navigate=("/login") 
        // }}
//       ></Route>       
//     </Switch>
       
//   )
// }



/////////////////////////////////////////////////////////////////



// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext'

// const PrivateRoute = ({component: Component, ...rest}) => {

//   const { currentUser } = useAuth()
//    // determine if authorized, from context or however you're doing it

//     // If authorized, return an outlet that will render child elements
//     // If not, return element that will navigate to login page

  

//   return currentUser? <Component {...rest} /> : <Navigate to="/login" />;
// }
// export default PrivateRoute
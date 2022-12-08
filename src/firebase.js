import firebase from  'firebase/compat/app' 
import 'firebase/compat/auth'

const app = firebase.initializeApp({

  apiKey: "AIzaSyBuQYHkNVIyILZrzYEDqr4Y0RtZh4qL1qU",
  authDomain: "capstonedev-591c7.firebaseapp.com",
  projectId: "capstonedev-591c7",
  storageBucket: "capstonedev-591c7.appspot.com",
  messagingSenderId: "84109524748",
  appId: "1:84109524748:web:e7a4f166346f6c546c9329"

  // apiKey: "AIzaSyASiUKQ3XjXUgw0RvzCAD6faO0sHwQ8ttI",
  // authDomain: "auth-development-a201c.firebaseapp.com",
  // projectId: "auth-development-a201c",
  // storageBucket: "auth-development-a201c.appspot.com",
  // messagingSenderId: "392998193975",
  // appId: "1:392998193975:web:0ddaf8e2216aeb07b2e8b2"

})

export const auth = app.auth()
export default app
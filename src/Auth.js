import React, { useEffect, useState } from 'react';
import app from './firebase';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    app.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};



// import React, { useContext, useState, useEffect } from 'react';
// import { auth } from '../Firebase/firebase';


// const AuthContext = React.createContext()

// export function useAuth() {
//   return useContext(AuthContext)
// }

// export function AuthProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState()
//   const setLoading = useState()

//   function login(email, password) {
//     return auth.signInWithEmailAndPassword(email, password)
//   }

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(user => {
//       setCurrentUser(user)
//       setLoading(false)
//     })

//     return unsubscribe
//   }, [])

//   const value = {
//     currentUser,
//     login
//   }

//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   )
// }



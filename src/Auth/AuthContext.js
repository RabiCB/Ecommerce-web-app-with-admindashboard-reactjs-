import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "./firebase";

import {
  signInWithPopup,
  GoogleAuthProvider,


} from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();
const provider = new GoogleAuthProvider();
export function UserAuth() {
  return useContext(UserContext);
}
export const AuthProvider= ({ children }) => {
  const [currentUser, setcurrentUser] = useState("");

 
  const navigate=useNavigate()
 
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logout() {
    return signOut(auth);
    
    
  }
  function googlehandler() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        navigate("/signup")
      });
  }
 
  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      setcurrentUser(user);
     
    });
    return () => {
      unsuscribe();
    };
  });
  return (
    <UserContext.Provider
      value={{ signup, login, currentUser, logout,googlehandler}}
    >
      {children}
    </UserContext.Provider>
  );
};

export default AuthProvider;
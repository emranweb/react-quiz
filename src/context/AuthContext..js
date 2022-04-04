import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { useContext, useState } from "react";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState();

  //sign up
  const signup = async (email, password, username) => {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(auth.currentUser, { displayName: username });
    const user = auth.currentUser;
    setCurrent(...user);
  };

  //sign in

  const signin = (email, password) => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  };

  //sign out

  const signout = () => {
    const auth = getAuth();
    return signOut(auth);
  };

  const value = {
    current,
    signup,
    signin,
    signout,
  };

  <AuthContext.Provider value={value}>
    {!loading && children}
  </AuthContext.Provider>;
};

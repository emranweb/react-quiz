import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import "../firebase";

const AuthContext = React.createContext();

// context consumer
export const useAuth = () => {
  return useContext(AuthContext);
};

// context provider
export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState();

  useEffect(() => {
    const auth = getAuth();
    const subscribe = onAuthStateChanged(auth, (user) => {
      setCurrent(user);
      setLoading(false);
    });
    return subscribe;
  }, []);

  //sign up
  const signup = async (email, password, username) => {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(auth.currentUser, { displayName: username });
    const user = auth.currentUser;
    setCurrent(user);
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
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

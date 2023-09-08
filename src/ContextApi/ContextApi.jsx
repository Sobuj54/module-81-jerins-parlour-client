import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const ContextApi = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
    });
    return () => {
      return unsubscribe();
    };
  }, [auth]);

  const logOut = () => {
    return signOut(auth);
  };

  const userInfo = { user, createUser, updateUserProfile, logOut };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default ContextApi;

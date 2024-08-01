import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { createContext, useState } from "react";
import auth from "../Firebase/firebase.config";

export const authContext = createContext(null);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userInfo = { user, setUser, loading, createUser };

  return (
    <>
      <authContext.Provider value={userInfo}>{children}</authContext.Provider>
    </>
  );
};

export default AuthProviders;

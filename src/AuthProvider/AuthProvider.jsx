import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase-config';
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //login with google
  const loginWithGoogle = () => {
    return signInWithPopup(auth, new GoogleAuthProvider());
  };
  // signout func
  const signoutFunc = () => {
    signOut(auth)
      .then(() => console.log('Signout Successfull'))
      .catch((error) => console.log(error.message));
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
      console.log(currentUser);
    });
    return () => unsubscribe();
  }, []);
  const userInfo = { user, loading, loginWithGoogle, signoutFunc };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;

import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useContext, useState} from 'react';
import {useEffect} from 'react';
import {LoadScreen} from '../screens';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children}) => {
  const [loadUser, setLoadUser] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setLoadUser(false);
    AsyncStorage.getItem('userData').then(userInfo => {
      if (userInfo) {
        setUser(JSON.parse(userInfo));
      }

      setTimeout(() => {
        setLoadUser(true);
      }, 2000);
    });
  }, []);

  function logInWithEmail(email, password) {
    setUser({email});
    AsyncStorage.setItem('userData', JSON.stringify({email}));
  }

  function logout() {
    setUser(null);
    AsyncStorage.removeItem('userData');
  }

  return (
    <AuthContext.Provider value={{user, logInWithEmail, logout}}>
      {!loadUser ? <LoadScreen /> : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

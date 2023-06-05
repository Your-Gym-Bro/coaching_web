'use client'
import React, { useState, useEffect, useContext, createContext, ReactNode } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { defaultAuth } from '../app/firebase/config';

interface UserContext {
  user: User | null;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<UserContext>({ user: null });

export const useAuthContext = () => useContext(AuthContext);

function token_initer(refresh_token: string, callback: (token: string) => void) {
  //set cookie for x duration

  //interval initer for access token to keep it fresh

}



export const AuthContextProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {

    //check cookie
    // cookie && auto login => interval init

    const unsubscribe = onAuthStateChanged(defaultAuth, (user) => {
      if (user) {
        setUser(user);
        //save refresh token to cooke and init token handler
        // token_initer(refresh_token,callback)
      } else {
        setUser(null);
        //clear interval, clear cookie
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};

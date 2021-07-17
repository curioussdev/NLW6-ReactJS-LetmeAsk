import firebase from "firebase";
import { useEffect } from "react";
import { useState } from "react";
import { createContext, ReactNode } from "react";
import { auth } from "../services/firebase";

type user = {
    id: string,
    name: string,
    avatar: string
  }
  
  type AuthContextType = {
    user: user | undefined,
    signInWithGoogle: () => Promise<void>;
  }

  type AuthContextProviderProps = {
    children: ReactNode
  }

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props:  AuthContextProviderProps) {
   
    const [user, setUser] = useState<user>();
  
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged( user => {
        if (user) {
          
          const {displayName, photoURL, uid} = user;
          
          if(!displayName || !photoURL) {
            throw new Error('Missing Information from Google account.');
          }
  
          setUser({
            id: uid,
            name: displayName,
            avatar: photoURL
          });
        }
      })
  
      return(
        unsubscribe()
      );
  
    }, [])
  
    async function signInWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
  
      const result = await auth.signInWithPopup(provider); // abre o POPUP para iniciar com a conta google
          
      if(result.user) {
        const {displayName, photoURL, uid} = result.user;
          
        if(!displayName || !photoURL) {
          throw new Error('Missing Information from Google account.');
        }
  
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        });
        }    
      
    }
   
   
    return(
        <AuthContext.Provider value={{ user, signInWithGoogle}}>      {/* todo componente de dentro do provider, sempre conseguirá enchegar o valor do contexto*/}
            {props.children}
        </AuthContext.Provider>
    );
};
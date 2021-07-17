import {createContext, useState, useEffect} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import {auth, firebase} from './services/firebase'

import {} from './contexts/AuthContext'




export function App() {
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
  return (
    
    <BrowserRouter>

        <Route  path="/" exact component={Home} />
        <Route  path="/rooms/new" component={NewRoom} />

    </BrowserRouter>
  );
};

export default App;
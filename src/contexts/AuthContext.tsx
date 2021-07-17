import { createContext } from "react";

type user = {
    id: string,
    name: string,
    avatar: string
  }
  
  type AuthContextType = {
    user: user | undefined,
    signInWithGoogle: () => Promise<void>;
  }

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider() {
    return(
        <AuthContext.Provider value={{ user, signInWithGoogle}}>      {/* todo componente de dentro do provider, sempre conseguirá enchegar o valor do contexto*/}


        </AuthContext.Provider>
    );
};
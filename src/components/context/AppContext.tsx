import React, { createContext, ReactNode, useContext } from 'react'
 

interface AppProviderProps {
    children: ReactNode | ReactNode[];
}
interface AppContextProps {
    login: string;
}

const AppContextCreated = createContext({} as AppContextProps);


const AppProvider = ({children} : AppProviderProps) => {
  return (
    <AppContextCreated.Provider
        value={{login: '3'}}
    >
        {children}
    </AppContextCreated.Provider>
  )
}
const AppContext = () => useContext(AppContextCreated);

export {AppProvider, AppContext}

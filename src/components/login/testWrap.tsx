import {  ReactNode } from "react"
import { AppProvider } from "../context/AppContext"


export const ProviderTest = (children : ReactNode | ReactNode[]) => {
    return <AppProvider>
        {children}
    </AppProvider>
}
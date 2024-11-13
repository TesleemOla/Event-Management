import { createContext, PropsWithChildren, useState } from "react";

interface LoginContextType {
     open: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>>;
     }

export const LoginContext = createContext<LoginContextType | undefined>(undefined)




export const LoginProvider =({children}: PropsWithChildren)=>{

    const [open, setOpen] = useState<boolean>(false)
    return (
        <LoginContext.Provider value={{open, setOpen}}>
            {children}
        </LoginContext.Provider>
    )
}
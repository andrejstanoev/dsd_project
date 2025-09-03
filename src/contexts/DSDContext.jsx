import {createContext, useContext, useState} from "react";


const DSDContext = createContext()

function DSDProvider({children}){
    const [currentLanguage, setCurrentLanguage] = useState("mk")

    return <DSDContext.Provider value={{
        currentLanguage,
        setCurrentLanguage,
    }}>{children}</DSDContext.Provider>
}

function useDSD(){
    const context = useContext(DSDContext);
    return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export {DSDProvider, useDSD};
import { createContext, useContext, useState} from "react";

const ToastContext = createContext();

const ToastProvider = ({children}) => {
    const [toastData, setToastData] = useState({
        toastText:"",
        toastDisplay: false,
        toastType: ""
    });
    
    return (
        <ToastContext.Provider value={{toastData, setToastData}}>
            {children}
        </ToastContext.Provider>
    )
}

const useToast = () => useContext(ToastContext);

export {useToast, ToastProvider};
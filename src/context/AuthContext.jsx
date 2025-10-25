import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [ isAuthenticated, setIsAuthenticated ] = useState();

    useEffect (() =>{
        const TOKEN = localStorage.getItem("token");

        if(!TOKEN){
            setIsAuthenticated(false);
        }
        else{
            setIsAuthenticated(true);
        }

    },[])

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem("token");
    };

    return(
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, logout}}>
            {children}
        </AuthContext.Provider>
    );
};
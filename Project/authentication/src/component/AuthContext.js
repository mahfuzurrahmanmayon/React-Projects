import { React, createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [authenticated,setAuthenticated] = useState(false)

    const login = () => {
        setAuthenticated(true)
    }

    const logout = () => {
        setAuthenticated(false)
    }


    return (
        <AuthContext.Provider value={{ authenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}
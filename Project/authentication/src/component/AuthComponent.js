import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'



const AuthComponent = () => {
    const {authenticated, login, logout} = useContext(AuthContext)
  return (
    <div>
        {authenticated ? (
            <div>
                <button onClick={logout}>Logout</button>
                <p>user is logged in</p>
            </div>
        ) : (
            <div>
                <button onClick={login}>Login</button>
                <p>user is logged out</p>
            </div>
        )}
    </div>
  )
}

export default AuthComponent
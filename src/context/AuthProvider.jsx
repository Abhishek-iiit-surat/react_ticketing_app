import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();
function AuthProvider({ children }) {

    const [userData, setUserData] = useState(null);
    useEffect(() => {
        var data_flag = false
        if (!data_flag) {
            function ensureData(flag) {
                let { employees, admin } = getLocalStorage();
                if (!employees || !admin) {
                    console.log("Data not found in local storage, setting up the local storage")
                    setLocalStorage();
                    ensureData(flag);
                }
                else {
                    console.log("Data Already there in local storage, if there has been any update please clear local stoarge and reRun")
                    setUserData({ employees, admin })
                }
            }
            ensureData(data_flag)
        }

    }, [])
    return (
        <AuthContext.Provider value={[userData]}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

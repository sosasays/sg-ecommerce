import { createContext, useState, useEffect } from "react";

import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
    const [ currentUser, setCurrentUser ] = useState(null);
    const value = { currentUser, setCurrentUser };
 
    useEffect(() => {
        // Every time the auth state changes this callback that is passed in will run.
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) createUserDocumentFromAuth(user);
            setCurrentUser(user);
        });

        // When the UserProvider umounts you'll unsubscribe from the active listener as to prevent memory leaks.
        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
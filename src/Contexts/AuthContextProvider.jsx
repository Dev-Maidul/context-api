import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../public/Firebase/firebase.init';

const AuthContextProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const createUser=(email,password)=>{
        setLoading(true); 
        return createUserWithEmailAndPassword(auth,email,password);
    }
    // create signin user
    const signInUser=(email,password)=>{
        setLoading(true); 
        return signInWithEmailAndPassword(auth,email,password);
    }
    // Signout user
    const signOutUser=()=>{
        setLoading(true); 
        return signOut(auth);
        
    }
    // For observation
        useEffect(()=>{
            const unLSubscriber=onAuthStateChanged(auth,currentUser=>{
                console.log(currentUser);
                setUser(currentUser);
                setLoading(false);
            })
            return ()=>{
                unLSubscriber()
            }
        },[])

    const userInfo={
        user,
        loading, 
        // Short hand of create user
        createUser,
       /// Short hand of create user
       signInUser,
       signOutUser

    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthContextProvider;
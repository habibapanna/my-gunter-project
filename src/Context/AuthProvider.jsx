import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
import AuthContext from "./AuthContext/AuthContext";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);
    const [userName, setUserName] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user); // ✅ Set user in state
                setLoading(false);
                return userCredential; // ✅ Return userCredential to use in Register.js
            })
            .catch((error) => {
                setLoading(false);
                throw error;
            });
    };
    

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
       
    };

    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const logoutUser = () => {
        signOut(auth)
        .then(() => {
            setUser(null);
            setUserName("");
        })
        .catch((error) => {
            console.error("Error during logout", error);
        });
    };


useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setLoading(false);
  });

  return () => unsubscribe();
}, []);


    const authInfo = {
        user,
        userId,
        userName,
        loading,
        createUser,
        loginUser,
        googleLogin,
        logoutUser,

    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
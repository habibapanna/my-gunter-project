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
            .then((userCredential) => {
                const loggedInUser = userCredential.user;
    
                // Save user to state
                setUser(loggedInUser);
    
                // Store user in localStorage
                localStorage.setItem("user", JSON.stringify({
                    email: loggedInUser.email,
                    uid: loggedInUser.uid,
                }));
    
                setLoading(false);
                return userCredential;
            })
            .catch((error) => {
                setLoading(false);
                throw error;
            });
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
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            
            if (currentUser) {
                const userInfo = { email: currentUser.email };
    
                try {
                    // Fetch JWT token
                    const res = await fetch("https://my-gunter-project-server.vercel.app/jwt", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(userInfo),
                    });
    
                    const data = await res.json();
                    if (data.token) {
                        localStorage.setItem("access-token", data.token);
                    }
    
                    // Fetch full user data from DB (allUsers)
                    const userRes = await fetch(`https://my-gunter-project-server.vercel.app/users/${currentUser.email}`);
                    const userData = await userRes.json();
                    
                    setUserId(userData._id);
                    setUserName(userData.name);
                    
                    // Store full user info in localStorage
                    localStorage.setItem("user", JSON.stringify(userData));
                } catch (error) {
                    console.error("Error fetching user data:", error);
                }
            } else {
                localStorage.removeItem("access-token");
                localStorage.removeItem("user");
                setUserId(null);
                setUserName(null);
            }
    
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
import { Link, useNavigate } from "react-router-dom";
import lottieAnimation from "../assets/service/login1.json";
import Lottie from "lottie-react";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import AuthContext from "../Context/AuthContext/AuthContext";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };
    
    const handleRegister = async (e) => {
        e.preventDefault();
    
        try {
            // ✅ Step 1: Create user in Firebase
            const userCredential = await createUser(userData.email, userData.password);
            const createdUser = userCredential.user;
    
            // ✅ Step 2: Save user data in MongoDB (Backend)
            const response = await fetch("https://my-gunter-project-server.vercel.app/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: userData.name, // ✅ Save user name
                    email: createdUser.email, // ✅ Save user email from Firebase
                    uid: createdUser.uid, // ✅ Store Firebase UID in your DB
                })
            });
    
            const result = await response.json();
    
            if (response.ok) {
                Swal.fire({
                    icon: "success",
                    title: "Registration Successful!",
                    text: "Welcome to Imagine Dream World",
                    timer: 2000,
                    showConfirmButton: false
                });
    
                navigate("/"); // ✅ Redirect to home page
            } else {
                throw new Error(result.message || "Failed to save user data");
            }
        } catch (error) {
            console.error("Error during registration:", error);
            Swal.fire({
                icon: "error",
                title: "Registration Failed!",
                text: error.message || "Something went wrong!",
            });
        }
    };

    return (
        <div className="bg-white">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <div className="flex flex-col items-center justify-center text-center">
                            <Lottie animationData={lottieAnimation} style={{ height: 400, width: 400 }} loop={true} />
                        </div>
                    </div>
                    <div className="bg-black w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            {/* ✅ Wrap inside <form> and move onSubmit here */}
                            <form onSubmit={handleRegister}>
                                <label className="fieldset-label">Name</label>
                                <input 
                                    value={userData.name}
                                    onChange={handleChange} 
                                    name="name" 
                                    type="text" 
                                    className="py-3 border px-2 border-gray-400" 
                                    required 
                                />
                                <label className="fieldset-label">Email</label>
                                <input 
                                    value={userData.email}
                                    onChange={handleChange} 
                                    name="email" 
                                    type="email" 
                                    className="py-3 border px-2 border-gray-400" 
                                    required 
                                />
                                <label className="fieldset-label">Password</label>
                                <input 
                                    value={userData.password}
                                    onChange={handleChange} 
                                    name="password" 
                                    type="password" 
                                    className="py-3 border px-2 border-gray-400" 
                                    required 
                                />
                                {/* ✅ Submit button inside <form> */}
                                <button
                                    type="submit"
                                    className="w-full md:w-auto bg-orange-600 px-6 py-3 text-white font-semibold transition duration-300 shadow-animation mt-3"
                                >
                                    Sign Up
                                </button>
                            </form>
                            <p>Already have an account? <Link className="text-orange-600 hover:underline" to="/login">Sign In</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

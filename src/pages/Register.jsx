import { Link, useNavigate } from "react-router-dom";
import lottieAnimation from "../assets/service/login1.json";
import Lottie from "lottie-react";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import AuthContext from "../Context/AuthContext/AuthContext";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };
    
    const handleRegister = async (e) => {
        e.preventDefault();
    
        const { name, email, password } = userData;
    
        if (name.length < 3) {
            return Swal.fire({
                icon: "error",
                title: "Invalid Name!",
                text: "Name must be at least 3 characters long."
            });
        }
        
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            return Swal.fire({
                icon: "error",
                title: "Invalid Email!",
                text: "Please enter a valid email address."
            });
        }
        
        if (password.length < 6) {
            return Swal.fire({
                icon: "error",
                title: "Weak Password!",
                text: "Password must be at least 6 characters long."
            });
        }
        
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
        if (!passwordPattern.test(password)) {
            return Swal.fire({
                icon: "error",
                title: "Weak Password!",
                text: "Password must contain at least one uppercase letter, one lowercase letter, and one number."
            });
        }
        
        try {
            const userCredential = await createUser(email, password);
            const createdUser = userCredential.user;
    
            const response = await fetch("https://my-gunter-project-server.vercel.app/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email: createdUser.email,
                    uid: createdUser.uid,
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
    
                navigate("/");
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
                            <form onSubmit={handleRegister}>
                                <label className="fieldset-label text-white">Name</label>
                                <input 
                                    value={userData.name}
                                    onChange={handleChange} 
                                    name="name" 
                                    type="text" 
                                    className="py-3 border px-2 border-gray-400" 
                                    required 
                                />
                                <label className="fieldset-label text-white">Email</label>
                                <input 
                                    value={userData.email}
                                    onChange={handleChange} 
                                    name="email" 
                                    type="email" 
                                    className="py-3 border px-2 border-gray-400" 
                                    required 
                                />
                                <label className="fieldset-label text-white">Password</label>
                                <div className="relative">
                                    <input 
                                        value={userData.password}
                                        onChange={handleChange} 
                                        name="password" 
                                        type={showPassword ? "text" : "password"} 
                                        className="py-3 border px-2 border-gray-400 w-full" 
                                        required 
                                    />
                                    <button 
                                        type="button" 
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
                                    >
                                        {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                                    </button>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full md:w-auto bg-purple-600 px-6 py-3 text-white font-semibold transition duration-300 shadow-animation mt-3 cursor-pointer"
                                >
                                    Sign Up
                                </button>
                            </form>
                            <p>Already have an account? <Link  to="/login" className="text-amber-500 hover:underline cursor-pointer">Sign In</Link></p>
                        </div>
                    </div>
                </div>
                <style>
        {`
          .shadow-animation {
              position: relative;
              overflow: hidden;
          }

          .shadow-animation::before,
          .shadow-animation::after {
              content: '';
              position: absolute;
              width: 50%;
              height: 100%;
              background: rgba(0, 0, 0, 0.9);
              transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
              opacity: 0;
          }

          .shadow-animation::before {
              left: 0;
              bottom: -100%;
          }

          .shadow-animation::after {
              right: 0;
              top: -100%;
          }

          .shadow-animation:hover::before {
              transform: translateY(-100%);
              opacity: 1;
          }

          .shadow-animation:hover::after {
              transform: translateY(100%);
              opacity: 1;
          }

          .shadow-animation:hover::before,
          .shadow-animation:hover::after {
              animation: panelDisappear 1s ease-in-out forwards;
          }

          @keyframes panelDisappear {
              0% { opacity: 1; }
              70% { opacity: 1; }
              100% { opacity: 0; transform: translateY(0); }
          }
        `}
      </style>
            </div>
        </div>
    );
};

export default Register;
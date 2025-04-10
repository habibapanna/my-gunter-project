import Lottie from "lottie-react";
import lottieAnimation from "../assets/service/login4.json";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import AuthContext from "../Context/AuthContext/AuthContext";

const Login = () => {
    const { loginUser, googleLogin } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Function for Email & Password Login
    const handleEmailLogin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await loginUser(email, password);
            const user = userCredential.user;
            await saveUserToDB(user); // Save user info to DB

            Swal.fire({
                icon: "success",
                title: "Login successful!",
                text: "Welcome back!",
                timer: 2000,
                showConfirmButton: false,
            });

            navigate("/dashboard/all-user");
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Login failed!",
                text: error.message,
            });
        }
    };

    // Function for Google Sign-In
    const handleGoogleLogin = async () => {
        try {
            const result = await googleLogin();
            const user = result.user;
            await saveUserToDB(user); // Save user info to DB

            Swal.fire({
                icon: "success",
                title: "Google Sign-In successful!",
                text: "Welcome back!",
                timer: 2000,
                showConfirmButton: false,
            });

            navigate("/");
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Google Sign-In failed!",
                text: error.message,
            });
        }
    };

    // Function to Save User Data to Database
    const saveUserToDB = async (user) => {
        const userData = {
            uid: user.uid,
            name: user.displayName || "Anonymous",
            email: user.email,
            photo: user.photoURL || "",
        };

        try {
            const response = await fetch("https://my-gunter-project-server.vercel.app/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData),
            });

            const result = await response.json();
            if (response.ok) {
                console.log("User saved successfully!");
            } else {
                console.log(result.message || "User already exists!");
            }
        } catch (error) {
            console.error("Error saving user:", error);
        }
    };

    return (
        <div className="bg-white">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    {/* Lottie Animation */}
                    <div className="text-center lg:text-left">
                        <div className="flex flex-col items-center justify-center text-center">
                            <Lottie animationData={lottieAnimation} style={{ height: 400, width: 400 }} loop={true} />
                        </div>
                    </div>

                    {/* Login Form */}
                    <div className="bg-black w-full max-w-sm shrink-0 shadow-2xl p-6">
                        <form onSubmit={handleEmailLogin}>
                            <fieldset className="fieldset">
                                <label className="fieldset-label text-white">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="py-3 border px-2 border-gray-400 w-full"
                                    required
                                />
                                <label className="fieldset-label text-white">Password</label>
                                <input
                                    name="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="py-3 border px-2 border-gray-400 w-full"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-purple-600 px-6 py-3 text-white font-semibold transition duration-300 shadow-animation mt-3 cursor-pointer"
                                >
                                    Sign In
                                </button>
                            </fieldset>
                        </form>

                        <p className="text-white mt-3">
                            Don't have an account? <Link to="/register" className="text-amber-500 hover:underline cursor-pointer">Create Account</Link>
                        </p>

                        {/* Google Sign-In Button */}
                        <button
                            onClick={handleGoogleLogin}
                            className="w-full px-6 py-3 text-white font-semibold transition duration-300 shadow-animation mt-3 border border-amber-500 flex items-center gap-5 justify-center hover:border-gray-400 hover:text-amber-500 cursor-pointer"
                        >
                            <FcGoogle className="text-2xl" /> Sign In with Google
                        </button>
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

export default Login;

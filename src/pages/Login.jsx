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

            navigate("/");
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
                                    className="w-full bg-orange-600 px-6 py-3 text-white font-semibold transition duration-300 shadow-animation mt-3"
                                >
                                    Sign In
                                </button>
                            </fieldset>
                        </form>

                        <p className="text-white mt-3">
                            Don't have an account? <Link className="text-orange-600 hover:underline" to="/register">Create Account</Link>
                        </p>

                        {/* Google Sign-In Button */}
                        <button
                            onClick={handleGoogleLogin}
                            className="w-full px-6 py-3 text-white font-semibold transition duration-300 shadow-animation mt-3 border border-orange-600 flex items-center gap-5 justify-center hover:border-gray-400 hover:text-orange-600"
                        >
                            <FcGoogle className="text-2xl" /> Sign In with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

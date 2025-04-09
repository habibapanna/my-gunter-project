import { Navigate, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import Spinner from "../components/Spinner/Spinner";

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        if (user?.email) {
            const token = localStorage.getItem("access-token");  // Verify token
            console.log("Token in localStorage:", token);  // Log the token for debugging

            fetch(`https://my-gunter-project-server.vercel.app/users/admin/${user.email}`, {
                headers: {
                    Authorization: `Bearer ${token}`  // Ensure the token is being sent correctly
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log("Admin check response:", data);  // Debugging
                    setIsAdmin(data.isAdmin);
                })
                .catch(error => console.error("Error:", error))
                .finally(() => setAdminLoading(false));
        } else {
            setAdminLoading(false);
        }
    }, [user?.email]);

    // Delay spinner visibility for 1 second
    if (loading || adminLoading) {
        setTimeout(() => {}, 1000); // 1-second delay before showing spinner
        return <Spinner />;
    }

    if (!user || !isAdmin) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
};

export default AdminRoute;

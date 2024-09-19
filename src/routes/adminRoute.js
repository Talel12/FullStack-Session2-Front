import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = () => {
  const [currentUser, setCurrentUser] = useState(null); // Store current user data
  const [loading, setLoading] = useState(true); // Add loading state to handle async operation
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchCurrentUser = async () => {
      if (token) {
        try {
          const response = await axios.post(
            "http://localhost:5000/api/auth/current",
            {},
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          setCurrentUser(response.data); // Set current user if API call is successful
        } catch (error) {
          console.error("Error fetching user data", error); // Log error
          setCurrentUser(null); // In case of error, clear user
        } finally {
          setLoading(false); // Set loading to false after fetching user
        }
      } else {
        setLoading(false); // If no token, stop loading
      }
    };

    fetchCurrentUser();
  }, [token]);

  if (loading) return <div>Loading...</div>; // Display loading while fetching user

  // If user role is 'admin', render the protected route, otherwise redirect
  return currentUser?.role === "admin" ? <Outlet /> : <Navigate to="/" />;
};

export default AdminRoute;

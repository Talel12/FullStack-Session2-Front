import { Route, Routes } from "react-router-dom";
import "./App.css";
import Authentication from "./Pages/Auth/Authentication";
import PrivateRoute from "./routes/privateRoute";
import AdminRoute from "./routes/adminRoute";
import Home from "./Pages/home/Home";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "./redux/authSlice/authSlice";
import Profile from "./Pages/Profile";

function App() {
  const isLoading = useSelector(store=> store.auth.isLoading)
  const user = useSelector(store=>store.auth.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/auth";
  };

  if(isLoading){
    return <h1>Loading...</h1>
  }

  return (
    <div className="App">
      <button onClick={handleLogOut}>Logout</button>
      <h1>{user?.fullName}</h1>
      <Routes>
        <Route path="/contact" element={<h1>Contact Page</h1>} />
        <Route element={<AdminRoute />}>
          <Route path="/dashboard" element={<h1>Dashboard</h1>} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/profile" element={<h1>User Profile</h1>} />
        </Route>
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="/auth" element={<Authentication />} />
      </Routes>
    </div>
  );
}

export default App;

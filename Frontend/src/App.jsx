import { useState } from "react";
import Home from "./Views/Home";
import Login from "./Views/Login";
import Signup from "./Views/Signup";
import PageNotFound from "./Views/PageNotFound";
import AddProduct from "./Views/AddProduct";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
    const [user, setUser] = useState(() =>
    localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : false);

    function setLocalUser(user){
        localStorage.setItem('user', JSON.stringify(user))
        setUser(user)
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={user ? <Home /> : <Navigate replace to="/login" />} />
                <Route path="/login" element={user ? <Navigate replace to="/" /> : <Login setUser={setLocalUser} />} />
                <Route path="/signup" element={user ? <Navigate replace to="/" /> :<Signup setUser={setLocalUser} />} />
                <Route path="/addProduct" element={user ? <AddProduct /> : <Navigate replace to="/login" />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

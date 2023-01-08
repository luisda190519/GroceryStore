import { useState, useEffect } from "react";
import Home from "./Views/Home";
import Login from "./Views/Login";
import Signup from "./Views/Signup";
import PageNotFound from "./Views/PageNotFound";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
    const [user, setUser] = useState(() =>
    localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : false);

    function setLocalUser(user){
        if (user){
            localStorage.setItem('user', JSON.stringify(user))
            setUser(user)
        }
        
    }

    useEffect(()=>{
       
    },[user])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={user ? <Home user={user}/> : <Navigate replace to="/login" />} />
                <Route path="/login" element={user ? <Navigate replace to="/" /> : <Login setUser={setLocalUser} />} />
                <Route path="/signup" element={user ? <Navigate replace to="/" /> :<Signup setUser={setLocalUser} />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

import { useState } from "react";
import Home from "./Views/Home";
import Login from "./Views/Login";
import Signup from "./Views/Signup";
import PageNotFound from "./Views/PageNotFound";
import { BrowserRouter, Route, Routes, Navigate  } from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;

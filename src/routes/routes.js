import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "../components/Landing";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import PrivateRoute from "./PrivateRoute";


const RoutePages = () => {
    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<PrivateRoute> <Landing/></PrivateRoute>}/>
                <Route path={"/login"} element={<Login/>} />
                <Route path={"/signup"} element={<SignUp/>} />
            </Routes>
        </Router>
    )
}

export default RoutePages;
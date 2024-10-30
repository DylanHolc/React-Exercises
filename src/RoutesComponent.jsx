import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import CompanyDetails from "./CompanyDetails";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import Profile from "./Profile";
import NotFound from "./NotFound";

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/companies" element={<CompanyList />} />
            <Route path="/companies/:searchterm" element={<CompanyList />} />
            <Route path="/companies/:handle" element={<CompanyDetails />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default RoutesComponent;
import React from "react";
import {Outlet} from "react-router-dom";
import Menu from "./Components/Menu/Menu.jsx"
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
const Admin = () => {
    return (
        <div className="h-screen w-full bg-[#FEFAF3]">
            <Menu/>
            <Header />
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default Admin;
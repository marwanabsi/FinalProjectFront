import React from "react";
import './Home.css'
import '../MainPage.css'
import Sidebar from "../../Components/Sidebar";
import TopBar from "../../Components/TopBar";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
    

    return (
        <div className="homePage"> 
            <Sidebar/>
            <TopBar/>
            
            <h2>Home</h2>
            <div className="boddy">
               
            </div>
        </div>
    );
};

export default Home;

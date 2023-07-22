import React from 'react';
import "./home.css";
import { Link } from "react-router-dom";

const Home = () =>{
    return(
        <div>
            <h1>The Boring App!</h1>
            <Link to="/activity" className="button-container">
                <button className="incredible-button">Start!</button>
            </Link>
        </div>
      
    );
}


export default Home;
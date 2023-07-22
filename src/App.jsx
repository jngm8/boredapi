import React from 'react';
import Home from './pages/home/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Activity from "./pages/Card/Activity";

const App = () =>{
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/activity" element={<Activity />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};


export default App;

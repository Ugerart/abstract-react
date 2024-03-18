import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>404</h1>
            <button onClick={() => navigate(-1)}>Indietro di 1</button>
            <button onClick={() => navigate('/')}>Back to home</button>
        </div>
    )
}

export default Home;
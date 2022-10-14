import React from 'react';
import './Homepage.scss'
import Header from "../components/header/Header";

const Homepage = () => {
    return(
        <div className="Homepage">
            <Header/>
            <h1>Hello world</h1>
        </div>
    )
}

export default Homepage;
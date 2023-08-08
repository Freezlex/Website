import React from "react";
import './home-cards.component.scss'
import {Link} from "react-router-dom";

export default function HomeCards() {
    return<div id='grid-more' className='card-grid'>
        <div className='card-item accent1' id='one'>p</div>
        <div className='card-item secondary' id='two'>p</div>
        <div className='card-item primary hover' id='three'>
            <h2><Link to='/projects'>My projects</Link></h2>
            <p>All my current and upcoming projects</p>
        </div>
        <div className='card-item accent2' id='four'>p</div>
    </div>
}

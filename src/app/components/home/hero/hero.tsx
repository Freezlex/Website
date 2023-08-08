import React from "react";
import './hero.component.scss'
import { ReactComponent as MapPin} from '@svg/map-pin.svg';
import {Link} from "react-router-dom";

export default function Hero() {
    return(
        <div className='hero-main'>
            <div className='hero-top'>
                <h1>Hi ! I’m <a className='primary'>Freezlex</a>.</h1>
                <div className='for-the-stalker'>
                    <MapPin className='icon small'/>
                    <p>Alsace, FR</p>
                </div>
            </div>
            <div className='hero-middle'>
                <p>I’m a full-stack student developer but also your average open-source contributor.</p>
                <p className={'silent'}>And sometimes I’m also streaming on Twitch</p>
            </div>
            <div className='hero-bottom'>
                <Link to="/#grid-more">
                    <button className='primary'>Learn more</button>
                </Link>
                <Link to="/about">
                    <button className='secondary'>About me</button>
                </Link>
            </div>
        </div>
    );
}

import React from "react";
import './home-cards.component.scss'
import {ReactComponent as MatrixLogo} from '@svg/brand/matrix.svg';
import {ReactComponent as DiscordLogo} from '@svg/brand/discord-mark.svg';
import {ReactComponent as TwitchLogo} from '@svg/brand/twitch.svg';
import {Link} from "react-router-dom";

export default function HomeCards() {
    return<div id='grid-more' className='card-grid'>
        <div className='card-item accent1' id='one'>p</div>
        <div className='card-item secondary' id='two'>p</div>
        <div className='card-item primary hover' id='three'>
            <h2>My projects</h2>
            <p>All my current and upcoming projects.</p>
        </div>
        <div className='card-item accent2' id='four'>
            <h2>Social networks</h2>
            <div className="social-links">
                <Link to="https://matrix.to/#/#freezlex:matrix.org"><MatrixLogo className="social-logo"/></Link>
                <Link to="https://discord.gg/WQ3bkFc2xh"><DiscordLogo className="social-logo"/></Link>
                <Link to="https://twitch.tv/freezlex_"><TwitchLogo className="social-logo"/></Link>
            </div>
        </div>
    </div>
}

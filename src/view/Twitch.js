import React from "react";
import '../style/Twitch.css'
import {TwitchPlayer, TwitchChat} from "react-twitch-embed";

class Twitch extends React.Component{
    render() {
        return(
            <div className="twitch">
                <div className="player">
                    <TwitchPlayer channel="freezlex_" id="freezlex_" theme="dark" muted height="720px" width="1280px"/>
                    <TwitchChat className="chat" channel="freezlex_" theme="dark" height="720px"/>
                </div>
                <a className="mobile-link" href="https://twitch.tv/freezlex_"><svg className="twitch-logo" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFFFFF"><title>Twitch icon</title><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/></svg>
                    <p className="redirect-text">Sorry ... It looks like you are on mobile, click to open the twitch app instead !</p></a>
            </div>
        )
    }
}

export default Twitch

import React from 'react';
import './Homepage.scss'
import Header from "../components/header/Header";
import { ReactComponent as Banner } from '../../assets/assets_site_web_2.svg';
import { ReactComponent as Freezlex} from "../../assets/watermark_2.svg";

const Homepage = () => {
    return(
        <div className="app-homepage">
            <div className="hero">
                <div className="hp-top-background">
                    <div className="bg-line"></div>
                    <div className="bg-line"></div>
                    <div className="bg-line"></div>
                </div>
                <Header/>
                <div className="hp-hero">
                    <div className="hero-info">
                        <div className="hero-greetings">
                            <h1>Hey ! I am </h1>
                            <Freezlex/>
                        </div>

                        <p>I am a <a>Full Stack</a> developer based in France.<br/>
                            I love contributing to <a>OpenSource</a> projects and
                            learning new things.<br/>
                            I’m also a <a>Streamer</a> who’s sharing his passion !</p>
                    </div>
                    <Banner/>
                </div>
                <footer></footer>
            </div>
            <section>
                <p>Some texte</p>
            </section>
        </div>
    )
}

export default Homepage;

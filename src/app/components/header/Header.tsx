import React from "react";
import "./Header.scss"
import {ReactComponent as Watermark} from "../../../assets/watermark.svg";
import ThemeSwitcher from "../theme/ThemeSwitcher";

const Header = () => {
    return(
        <header>
            <Watermark id="header-watermark"/>
            <div id="header-right">
                <nav id="header-nav">
                    <p>Home</p>
                    <p>Projects</p>
                    <p>More</p>
                </nav>
                <ThemeSwitcher/>
            </div>
        </header>
    )
}

export default Header;

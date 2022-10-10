import React from "react";
import "./Header.scss"
import ThemeSwitcher from "../theme/ThemeSwitcher";

const Header = () => {
    return(
        <header>
            <div id="watermark"><p>F</p></div>
            <ThemeSwitcher/>
        </header>
    )
}

export default Header;

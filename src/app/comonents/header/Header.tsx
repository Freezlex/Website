import React from "react";
import "./Header.scss"
import ThemeSwitcher from "../theme/ThemeSwitcher";

const Header = () => {
    return(
        <header>
            <h1>Freezlex</h1>
            <ThemeSwitcher/>
        </header>
    )
}

export default Header;
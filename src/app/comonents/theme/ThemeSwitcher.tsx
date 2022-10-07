import React, {useContext} from "react";
import "./ThemeSwitcher.scss";
import ThemeContext from "../../shared/ThemeProvider/ThemeContext";
import {MoonIcon} from "../../../assets/MoonIcon";
import {SunIcon} from "../../../assets/SunIcon";

const ThemeSwitcher = () => {
    const {isDark, toggleDark} = useContext(ThemeContext);

    return(
        <span
        id="theme-toggle"
        title="Toggle light & dark mode"
        aria-label="auto"
        aria-live="polite"
        onClick={toggleDark}>
            {isDark ? <MoonIcon/> : <SunIcon/>}
        </span>
    )
}

export default ThemeSwitcher;
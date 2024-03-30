import {useEffect} from "react";
import {LocalStorage} from "../../../../hooks/local-storage.hook";
import './theme-switcher.component.scss';

export function ThemeSwitcher() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = LocalStorage('ftnl-website.theme', defaultDark ? "dark" : "light");

    useEffect(() => {
        document.documentElement.setAttribute('color-scheme', theme);
    }, [theme])

    return (
        <div>
            <button
                aria-label={`Change theme to ${theme === "light" ? "dark" : "light"} mode`}
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                {theme === "dark" ? "☀️" : "🌚"}
            </button>
        </div>
    )
}

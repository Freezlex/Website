import React, {createContext, ReactNode, useEffect, useState} from "react";

type ContextType = {
    toggleDark: () => void;
    isDark: boolean;
};

const defaultContext: ContextType = {
    toggleDark: () => {
        console.warn("Should have been overriden");
    },
    isDark: true,
};

const ThemeContext = createContext(defaultContext);

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const lsDark = localStorage.getItem('ThemeContext:isDark');
        if (lsDark !== undefined && lsDark !== null) {
            setIsDark(JSON.parse(lsDark));
        } else if (
            window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: light)').matches
        ) {
            setIsDark(false);
        }
    }, []);

    const context: ContextType = {
        toggleDark: () => {
            localStorage.setItem('ThemeContext:isDark', String(!isDark));
            setIsDark(!isDark);
        },
        isDark,
    };

    return (
        <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
    );
};

export default ThemeContext;
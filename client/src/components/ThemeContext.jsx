import React, { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

    const  [theme, setTheme] = useState(localStorage.getItem("theme") || "dark")

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    }

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
)
}

export default ThemeContext
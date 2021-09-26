import { useEffect, useState } from "react"

export function useDarkMode() {
    const [theme, setTheme] = useState("light");
    const colorTheme = theme === "dark" ? "light" : "dark";

    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove(colorTheme)
        root.classList.add(theme)
        localStorage.setItem('theme', theme)
    }, [theme, setTheme])

    return [theme, setTheme]
}
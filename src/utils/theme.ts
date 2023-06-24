var prefersTheme = window.matchMedia("(prefers-color-scheme: light)");
const getSystemTheme = localStorage.getItem("theme") || prefersTheme.matches ? "light" : "dark";
export var theme: "light" | "dark" = getSystemTheme === "dark" || getSystemTheme === "light" ? getSystemTheme : "light";

if (prefersTheme.matches || !localStorage.getItem("theme")) {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
}

export function handleTheme() {
    // theme = theme === "light" ? "dark" : "light";
    theme = theme === "light" ? "light" : "dark";
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
}

export function getTheme() {
    return theme;
}

window.addEventListener("load", handleTheme)

// Em caso de mudança do sistema.
prefersTheme.addEventListener("change", handleTheme);
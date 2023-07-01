// var prefersTheme = window.matchMedia("(prefers-color-scheme: light)");
const getSystemTheme = localStorage.getItem("theme") || "light";
export var theme: "light" | "dark" = getSystemTheme === "dark" || getSystemTheme === "light" ? getSystemTheme : "light";

if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
}

export function handleTheme(newTheme: "light" | "dark") {
    theme = newTheme;
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
}

export function getTheme() {
    return theme;
}

window.addEventListener("load", () => document.documentElement.setAttribute("data-theme", theme));
// Em caso de mudança do sistema.
var prefersTheme = window.matchMedia("(prefers-color-scheme: light)");
const getTheme = localStorage.getItem("theme") || prefersTheme.matches ? "light" : "dark";
console.log(prefersTheme.matches ? "light" : "dark")
export var theme: "light" | "dark" = getTheme === "dark" || getTheme === "light" ? getTheme : "light";

if(prefersTheme.matches || !localStorage.getItem("theme")) {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
}

export function handleTheme() {
    theme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
}

// Em caso de mudança do sistema.
prefersTheme.addEventListener("change", handleTheme);
import { useCallback, useEffect, useState } from "react";

const bgDark = new URL("../assets/switch-night.png", import.meta.url).href;
const bgLight = new URL("../assets/switch-day.png", import.meta.url).href;

export type Theme = "dark" | "light";

export function ThemeToggle() {
  const stored = window.localStorage.getItem("theme" as Theme);
  const [theme, setTheme] = useState(stored || "light");

  const toggleTheme = useCallback((e) => {
    e.target.checked ? setTheme("light") : setTheme("dark");
  }, []);

  useEffect(() => {
    window.localStorage.setItem("theme", theme);

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button className="flex items-center rounded-full absolute right-[22px]">
      <label className="switch" htmlFor="themeSwitch">
        <input
          type="checkbox"
          id="themeSwitch"
          onChange={(e) => toggleTheme(e)}
          checked={theme === "light"}
        />
        <span
          className={`rounded-full before:bg-toggle ${
            theme === "dark" ? "dark" : "light"
          }`}
          style={
            theme === "dark"
              ? {
                  backgroundImage: `url(${bgDark}), linear-gradient(181deg, rgba(43,68,133,1) 0%, rgba(175,202,255,1) 100%)`,
                }
              : { backgroundImage: `url(${bgLight})` }
          }
        ></span>
      </label>
    </button>
  );
}

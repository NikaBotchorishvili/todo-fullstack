import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function ThemeSwitcher() {
	const [theme, setTheme] = useState<"light" | "dark">("dark");
	useEffect(() => {
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			setTheme("dark");
		}
	}, []);

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);

	function handleThemeChange() {
		setTheme(theme === "dark" ? "light" : "dark");
	}
	return (
		<div
			onClick={handleThemeChange}
			className="flex items-center justify-between cursor-pointer border-b border-lightGrayishBlue  dark:border-b-darkLighterVeryDarkGrayishBlue px-2 py-2"
		>
			<span className="text-lg">
				{theme === "dark" ? "Dark Mode" : " Light Mode"}
			</span>
			<div className="relative w-[30px] h-[30px]">
				<input
					type="checkbox"
					onChange={handleThemeChange}
					name="theme"
					id=""
					checked={theme === "dark"}
					className="w-full h-full opacity-0"
				/>

				<FontAwesomeIcon
					className="absolute w-full h-full top-0 left-0 pointer-events-none"
					icon={theme === "dark" ? faMoon : faSun}
				/>
			</div>
		</div>
	);
}

export default ThemeSwitcher;

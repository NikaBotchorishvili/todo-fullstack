import { useState, useEffect } from "react";
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
		console.log("sda");
		setTheme(theme === "dark" ? "light" : "dark");
	}
	return (
		<div className="relative w-[30px] h-[30px]">
			<input
				type="checkbox"
				onChange={handleThemeChange}
				name="theme"
				id=""
				checked={theme === "dark"}
				className="w-full h-full opacity-0"
			/>
			<img
				src={
					theme === "dark"
						? "images/icon-sun.svg"
						: "images/icon-moon.svg"
				}
				alt="theme-icon"
				className="absolute w-full h-full top-0 pointer-events-none"
			/>
		</div>
	);
}

export default ThemeSwitcher;

import ThemeSwitcher from "./ThemeSwitcher";


function Navbar() {
	return (
		<header className="bg-light-mobile dark:bg-dark-mobile h-[200px]  sm:dark:bg-dark-desktop sm:bg-light-desktop w-screen sm:h-[300px] bg-cover dark:bg-cover dark:bg-no-repeat bg-no-repeat">
            <nav className="flex items-center w-[50%] justify-between mx-auto pt-10">
                <h1 className="text-4xl font-bold tracking-widest text-veryLightGray">Todo</h1>
                <ThemeSwitcher />
            </nav>
        </header> 
	);
}

export default Navbar;

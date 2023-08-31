import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Menu from "../../components/Navbar/Menu";
import { useState } from "react";

function Navbar() {
    const [ menuToggled, setMenuToggled ] = useState<boolean>(false)
	return (
		<header className="bg-light-mobile dark:bg-dark-mobile h-[200px]  sm:dark:bg-dark-desktop sm:bg-light-desktop w-screen sm:h-[300px] bg-cover dark:bg-cover dark:bg-no-repeat bg-no-repeat">
            <nav className="flex items-center relative w-[50%] justify-between mx-auto pt-10">
                <h1 className="text-4xl font-bold tracking-widest text-veryLightGray">Todo</h1>
                
                <FontAwesomeIcon onClick={() => setMenuToggled(prev => !prev)} className="text-[#fff]" icon={faBars} />
                <Menu menuToggled={menuToggled} />
            </nav>
        </header> 
	);
}

export default Navbar;

import { motion } from "framer-motion";
import Navigation from "./components/Navigation";


type MenuProps = {
	menuToggled: boolean;
};

function Menu({ menuToggled }: MenuProps) {
	const variants = {
		initial: {
			opacity: 0,
			top: -200,
		},
		animate: {
			top: menuToggled ? 100 : -200,
			opacity: menuToggled ? 1 : 0,
		},
	};
	return (
		<motion.nav
			variants={variants}
			initial="initial"
			animate="animate"
			key="menu"
			className="absolute right-0 h-fit top-[-200px] rounded-lg w-[200px] dark:text-veryLightGray dark:bg-darkVeryDarkGrayishBlue bg-veryLightGray py-2 z-50"
		>
			<Navigation />
		</motion.nav>
	);
}

export default Menu;

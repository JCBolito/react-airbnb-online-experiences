import airbnb from "../public/airbnb.png";
import Image from "next/image";
import style from "../styles/Navbar.module.css";

export function Navbar() {
	return (
		<nav className={style.nav}>
			<Image
				src={airbnb}
				alt="airbnb"
				className={style.logo}
				// position="relative"
				objectFit="contain"
				width="70px"
			// layout="fill"
			/>
		</nav>
	);
}
import Image from "next/image";
import heroImg from "../public/hero-img.png";
import style from "../styles/Hero.module.css";
export function Hero() {
	return (
		<section className={style.hero}>
			<div className={style.image}>
				<Image
					src={heroImg}
					alt="Hero Image"
					objectFit="contain"
				// layout="fill"
				/>
			</div>
			<h1 className={style.header}>Online Experiences</h1>
			<p className={style.text}>
				Join unique interactive activities
				led by one-of-a-kind hosts—all without
				leaving home.
			</p>
		</section>
	);
}
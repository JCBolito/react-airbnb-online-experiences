import Image from "next/image";
import starIcon from "../public/star.png";
import style from "../styles/Card.module.css";
export function Card(props) {
	let statusText;
	if (props.openSpots === 0) {
		statusText = "SOLD OUT";
	} else if (props.mode == "Online") {
		statusText = "ONLINE";
	}

	return (
		<section className={style.card}>
			{statusText && <div className={style.status}>{statusText}</div>}
			<div className={style.image}>
				<Image
					src={props.coverImg}
					alt=""
					layout="fill"
				/>
			</div>
			<div className={style.review}>
				<div className={style.star}>
					<Image
						src={starIcon}
						alt="Star Rating"
						objectFit="contain"
					/>
				</div>
				<span className={style.rating}>{props.stats.rating}</span>
				<span className={style.reviewCount}> ({props.stats.reviewCount}) • </span>
				<span className={style.reviewCount}>{props.location}</span>
			</div>
			<p className={style.title}>{props.title}</p>
			<p className={style.price}>
				<span className={style.from}>From ${props.price}</span>
				/ person
			</p>
		</section>
	);
}
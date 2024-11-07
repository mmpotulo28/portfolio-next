import React from "react";
import styles from "./footer.module.css";

const Ticker = ({ messages }: { messages: string[] }) => {
	return (
		<div className={styles.ticker}>
			<div className={styles.tickerContainer}>
				{messages.map((message, index) => (
					<span key={index} className={styles.tickerItem}>
						{message}
					</span>
				))}
			</div>
		</div>
	);
};

const Footer = () => {
	const messages = [
		"Exciting new project launched! Check out the details in the portfolio.",
		"Currently available for freelance work. Contact me for more information.",
		"New blog post: How to optimize your React applications for better performance.",
	];

	return (
		<footer className={styles.footer}>
			<div className={styles.footerContent}>
				<ul className={styles.footerItems}>
					<li>Manelisi Mpotulo</li>
					<li>Cape Town | SA</li>
					<li>Copyright &copy; {new Date().getFullYear()}</li>
				</ul>
				<Ticker messages={messages} />
			</div>
		</footer>
	);
};

export default Footer;

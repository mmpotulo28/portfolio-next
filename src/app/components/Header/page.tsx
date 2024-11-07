import React from "react";
// eslint-disable-next-line
import styles from "./styles/module.css";

const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.topNav}>top-nav</div>
			<div className={styles.mainNav}>main-nav</div>
		</div>
	);
};

export default Header;

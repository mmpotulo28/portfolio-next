import UnderDev from "./components/UnderDev/page";
import styles from "./page.module.css";

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<UnderDev />
			</main>
		</div>
	);
}

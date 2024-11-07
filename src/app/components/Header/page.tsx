"use client";

import React from "react";
import {
	FaFacebook,
	FaTwitter,
	FaLinkedin,
	FaEnvelopeOpen,
	FaPhone,
	FaAddressBook,
	FaBell,
	FaHome,
	FaProjectDiagram,
	FaTools,
	FaUser,
	FaPhoneSquare,
} from "react-icons/fa";
// eslint-disable-next-line	@next/next/no-css-tags
import styles from "./header.module.css"; // Ensure this file exists in the correct path
import Link from "next/link";
import Image from "next/image";
import useGlobalContext from "@/app/context/GlobalContext";

const Header = () => {
	const { openImageModal } = useGlobalContext();
	if (typeof window !== "undefined") {
	}

	const openModal = (data: { src: string; alt: string }) => {
		openImageModal(data);
	};

	return (
		<div className={styles.header}>
			<div className={styles.topNav}>
				<div className={styles.contacts}>
					<div className={styles.contact}>
						<FaEnvelopeOpen /> <span> example@example.com</span>
					</div>
					<div className={styles.contact}>
						<FaPhone /> <span> +123456789</span>
					</div>
					<div className={styles.contact}>
						<FaPhoneSquare /> <span> +987654321</span>
					</div>
				</div>

				<div className={styles.socials}>
					<FaFacebook />
					<FaTwitter />
					<FaLinkedin />
				</div>
			</div>

			<div className={styles.mainNav}>
				<div className={styles.navItems}>
					<Link href="#home">
						<FaHome /> Home
					</Link>
					<Link href="#about">
						<FaUser /> About Me
					</Link>
					<Link href="#skills">
						<FaTools /> Skills
					</Link>
					<Link href="#projects">
						<FaProjectDiagram /> Projects
					</Link>
					<Link href="#contacts">
						<FaAddressBook /> Contacts
					</Link>
					<Link href="#updates">
						<FaBell /> Updates
					</Link>
				</div>

				<div className={styles.navLogo}>
					<h3>Mr Mpotulo</h3>
					<Image
						src="/images/me.png"
						alt="Manelisi-Mpotulo-Logo"
						width={50}
						height={50}
						onClick={() =>
							openModal({
								src: "me.png",
								alt: "Manelisi Mpotulo",
							})
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default Header;

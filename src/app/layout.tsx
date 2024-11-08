import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header/page";
import Footer from "./components/Footer/page";
import { GlobalProvider } from "./context/GlobalContext";
// import Head from "next/head";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Manelisi Mpotulo | Personal Website",
	description: "Welcome to my Portfolio, Interactive and Responsive Full Stack Web Developer",
	authors: [{ name: "Manelisi Mpotulo" }],
	keywords: "Manelisi Mpotulo, portfolio, web developer, software engineer",
	robots: "index, follow",
};

export const viewport = {
	width: "device-width",
	initialScale: 1,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<meta
				name="google-site-verification"
				content="7j_MuCkA4qssfr-tjGTpq6LY5pLQQY4pDVtb3b6u4UI"
			/>
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<GlobalProvider>
					<Header />
					{children}
					<Footer />
				</GlobalProvider>
			</body>
		</html>
	);
}

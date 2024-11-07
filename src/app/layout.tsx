import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header/page";
import Footer from "./components/Footer/page";
import { GlobalProvider } from "./context/GlobalContext";

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
	viewport: "width=device-width, initial-scale=1",
	robots: "index, follow",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
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

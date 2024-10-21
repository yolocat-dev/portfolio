import type { Metadata } from "next";
import { inter } from "@/lib/fonts";

import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
	title: "yolocat",
	description: "software engineer",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased dark bg-background text-foreground w-screen h-screen`}>
				{children}
				<SpeedInsights />
			</body>
		</html>
	);
}

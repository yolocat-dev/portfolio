import type { Metadata } from "next";
import { inter } from "@/lib/fonts";

import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
	title: "yolocat",
	description: "software engineer",
	icons: [
		{
			url: "/api/icon",
			rel: "icon",
			sizes: "144x144",
		},
		{
			url: "/api/apple-touch-icon",
			rel: "apple-touch-icon",
			sizes: "180x180",
		}
	],
	openGraph: {
		type: "website",
		images: {
			url: "/api/og",
			alt: "yolocat",
			width: 1200,
			height: 630,
			type: "image/png",
		},
		siteName: "yolocat",
		title: "yolocat",
		description: "software engineer",
		url: "yolocat.dev",
	},
	twitter: {
		images: {
			url: "/api/og",
			alt: "yolocat",
			width: 1200,
			height: 630,
			type: "image/png",
		},
		card: "summary_large_image",
		title: "yolocat",
		description: "software engineer",
	}
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

import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
	width: 180,
	height: 180,
};

export const contentType = "image/png";

export async function GET() {
	const jbMonoMedium = await fetch(new URL("../../../fonts/JetBrainsMonoNL-Medium.ttf", import.meta.url)).then((res) => res.arrayBuffer());

	return new ImageResponse((
		<div style={{
			fontSize: 105,
			background: "#09090B",
			color: "#FAFAFA",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			width: "100%",
			height: "100%",
			borderRadius: "20%",
			WebkitFontSmoothing: "antialiased",
			MozOsxFontSmoothing: "grayscale",
			fontFamily: "JetBrains Mono",
		}}>
			<span>@y</span>
		</div>
	), {
		...size,
		fonts: [
			{
				name: "JetBrains Mono",
				data: jbMonoMedium,
				style: "normal",
				weight: 500,
			}
		],
	});
}

import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
	const jbMonoMedium = await fetch(new URL("../../../fonts/JetBrainsMonoNL-Medium.ttf", import.meta.url)).then((res) => res.arrayBuffer());

	return new ImageResponse((
		<div style={{
			fontSize: 84,
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
		width: 144,
		height: 144,
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

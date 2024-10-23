import { getMyAge } from "@/lib/age";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
	const interSemiBold = await fetch(new URL("../../../fonts/Inter-SemiBold.ttf", import.meta.url)).then((res) => res.arrayBuffer());
	const jbMonoSemiBold = await fetch(new URL("../../../fonts/JetBrainsMonoNL-SemiBold.ttf", import.meta.url)).then((res) => res.arrayBuffer());

	return new ImageResponse((
		<div style={{
			background: "#09090B",
			color: "#FAFAFA",
			display: "flex",
			flexDirection: "column",
			width: "100%",
			height: "100%",
			WebkitFontSmoothing: "antialiased",
			MozOsxFontSmoothing: "grayscale",
			fontFamily: "Inter",
			paddingLeft: "8rem",
		}}>
			<span style={{
				fontSize: "8rem",
				lineHeight: "1",
				fontWeight: "600",
				margin: "4rem 0 2rem 0",
			}}>{"yolocat"}</span>
			<div style={{
				display: "flex",
				flexDirection: "column",
			}}>
				<span style={{
					fontSize: "4rem",
					lineHeight: "1",
					fontWeight: "600",
					textWrap: "nowrap",
					color: "#64748B",
					fontFamily: "JetBrains Mono",
				}}>{"Software Engineer"}</span>
				<span style={{
					fontSize: "4rem",
					lineHeight: "1",
					fontWeight: "600",
					textWrap: "nowrap",
					color: "#334155",
					fontFamily: "JetBrains Mono",
				}}>{`${getMyAge()} * Sweden`}</span>
			</div>
		</div>
	), {
		width: 1200,
		height: 630,
		fonts: [
			{
				name: "Inter",
				data: interSemiBold,
				style: "normal",
				weight: 600,
			},
			{
				name: "JetBrains Mono",
				data: jbMonoSemiBold,
				style: "normal",
				weight: 600,
			}
		],
	});
}

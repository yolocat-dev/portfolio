import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "yolocat",
		short_name: "yolocat",
		description: "software engineer",
		start_url: "/",
		display: "standalone",
		background_color: "#09090B",
		theme_color: "#FAFAFA",
		icons: [
			{
				src: "/api/icon",
				sizes: "144x144",
				type: "image/png",
			}
		],
	};
}

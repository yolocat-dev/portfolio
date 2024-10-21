import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./components/**/*.tsx",
		"./app/**/*.tsx",
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				border: 'hsl(var(--border))',
				ring: 'hsl(var(--ring))',
			},
		}
	},
};

export default config;

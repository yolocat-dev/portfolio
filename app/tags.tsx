import { Angular, Arduino, Assembly, AuthJS, CPP, CSharp, Docker, Firebase, JavaScript, NextJS, NodeJS, PostgreSQL, React, Rust, ShadCN, Swift, TailwindCSS, TypeScript } from "@/components/icons";

export type Tag = {
	name: string;
	url?: string;
	icon?: React.ReactNode;
};

export const tags = {
	react: {
		name: "React",
		url: "https://react.dev",
		icon: <React size={24} className="group-hover:text-sky-300" />,
	},
	nextjs: {
		name: "Next.js",
		url: "https://nextjs.org",
		icon: <NextJS size={24} className="group-hover:text-slate-300" />,
	},
	tailwindcss: {
		name: "Tailwind CSS",
		url: "https://tailwindcss.com",
		icon: <TailwindCSS size={24} className="group-hover:text-sky-300" />,
	},
	typescript: {
		name: "TypeScript",
		url: "https://typescriptlang.org",
		icon: <TypeScript size={24} className="group-hover:text-sky-300" />,
	},
	javascript: {
		name: "JavaScript",
		icon: <JavaScript size={24} className="group-hover:text-yellow-200" />,
	},
	nodejs: {
		name: "Node.js",
		url: "https://nodejs.org",
		icon: <NodeJS size={24} className="group-hover:text-green-300" />,
	},
	firebase: {
		name: "Firebase",
		url: "https://firebase.google.com",
		icon: <Firebase size={24} className="group-hover:text-yellow-200" />,
	},
	postgresql: {
		name: "PostgreSQL",
		url: "https://postgresql.org",
		icon: <PostgreSQL size={24} className="group-hover:text-sky-300" />,
	},
	rust: {
		name: "Rust",
		url: "https://rust-lang.org",
		icon: <Rust size={28} className="group-hover:text-red-300" />,
	},
	docker: {
		name: "Docker",
		url: "https://docker.com",
		icon: <Docker size={24} className="group-hover:text-sky-300" />,
	},
	shadcnui: {
		name: "shadcn/ui",
		url: "https://ui.shadcn.com",
		icon: <ShadCN size={24} className="group-hover:text-slate-300"/>,
	},
	authjs: {
		name: "Auth.js",
		url: "https://authjs.dev",
		icon: <AuthJS size={24} className="group-hover:text-purple-300" />,
	},
	assembly: {
		name: "Assembly",
		icon: <Assembly size={24} className="group-hover:text-red-300" />,
	},
	cpp: {
		name: "C++",
		url: "https://isocpp.org",
		icon: <CPP size={24} className="group-hover:text-sky-300" />,
	},
	arduino: {
		name: "Arduino",
		url: "https://arduino.cc",
		icon: <Arduino size={24} className="group-hover:text-sky-300" />,
	},
	swift: {
		name: "Swift",
		url: "https://swift.org",
		icon: <Swift size={24} className="group-hover:text-red-300" />,
	},
	angular: {
		name: "Angular",
		url: "https://angular.dev",
		icon: <Angular size={24} className="group-hover:text-red-300" />,
	},
	csharp: {
		name: "C#",
		url: "https://learn.microsoft.com/en-us/dotnet/csharp/",
		icon: <CSharp size={24} className="group-hover:text-blue-300" />,
	},
}

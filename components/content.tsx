import { jetbrainsMono } from "@/lib/fonts";

export function Page({ children }: { children: React.ReactNode; }) {
	return (
		<main className="w-full h-full grid grid-rows-1 grid-cols-[auto_1fr] overflow-x-hidden overflow-y-auto">
			{children}
		</main>
	);
}

export function Content({ children }: { children: React.ReactNode; }) {
	return (
		<div className="w-full h-full">
			{children}
		</div>
	);
}

export function ContentTitle({ children }: { children: React.ReactNode; }) {
	return (
		<h1 className={`${jetbrainsMono.className} pl-16 pt-16 text-3xl font-semibold text-slate-500`}>
			{children}
		</h1>
	);
}

export function Section({ id, children }: { id: string; children: React.ReactNode; }) {
	return (
		<div id={id}>
			{children}
		</div>
	);
}

import { jetbrainsMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export function Sidebar({ children, rows }: { children: React.ReactNode; rows: number; }) {
	return (
		<div className="w-full h-full">
			<div className="h-full px-16 w-auto flex flex-col justify-center items-center border-border/50 border-r-2">
				<div className="grid grid-cols-1 place-items-start h-full" style={{ gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))` }}>
					{children}
				</div>
			</div>
			<div className="absolute left-0 top-0 h-full bg-background px-16 w-auto flex flex-col justify-center items-center border-border/50 border-r-2">
				<div className="grid grid-cols-1 place-items-start h-full" style={{ gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))` }}>
					{children}
				</div>
			</div>
		</div>
	);
}

export function SidebarName({ children }: { children: React.ReactNode; }) {
	return (
		<div className="h-full flex flex-col justify-center">
			{children}
		</div>
	);
}

export function SidebarTitle({ children }: { children: React.ReactNode; }) {
	return (
		<h1 className="text-6xl font-semibold mb-2">
			{children}
		</h1>
	);
}

export function SidebarSubtitle({ children, secondary }: { children: React.ReactNode; secondary?: boolean; }) {
	return (
		<h2 className={cn("text-3xl font-semibold text-nowrap", jetbrainsMono.className, secondary ? "text-slate-700" : "text-slate-500")}>
			{children}
		</h2>
	)
}

export function SidebarNavigation({ children, inter }: { children: React.ReactNode; inter?: boolean; }) {
	return (
		<div className={cn("h-full flex flex-col justify-center items-start", !inter && jetbrainsMono.className)}>
			{children}
		</div>
	);
}

export function SidebarNavLink({ children, href }: { children: React.ReactNode; href: string; }) {
	return (
		<a className="text-3xl transition-colors duration-100 font-semibold text-slate-700 hover:text-slate-500 text-nowrap" href={href} target="_blank" rel="noopener" referrerPolicy="no-referrer">
			{children}
		</a>
	)
}


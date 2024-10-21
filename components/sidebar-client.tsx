"use client";

import { useObserver } from "@/hooks/observer";
import { cn } from "@/lib/utils";

export function SidebarNavItem({ children, section }: { children: React.ReactNode; section: string; }) {
	const active = useObserver(["experience", "contact"]);

	const navigate = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		event.preventDefault();
		document.getElementById(section)?.scrollIntoView({
			behavior: "smooth",
		});
	};

	return (
		<a className={cn("text-3xl transition-colors duration-100 font-semibold text-slate-700 hover:text-slate-500 text-nowrap", active === section && "text-slate-500")} href={`#${section}`} onClick={navigate}>
			{children}
		</a>
	)
}

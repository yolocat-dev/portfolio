import { ContactCopyButton } from "./contact-client";

export function Contact({ children }: { children: React.ReactNode; }) {
	return (
		<div className="h-max w-full px-16 pb-16 grid grid-cols-[auto_1fr] gap-x-16">
			{children}
		</div>
	);
}

export function ContactCopy({ icon, title, value }: { icon: React.ReactNode; title: string; value: string;  }) {
	return (
		<>
			<div className="w-0.5 transition-all duration-500 bg-gradient-to-b from-border to-border relative">
				<div className="absolute transition-opacity opacity-0 left-0 top-0 w-0.5 h-full duration-300 bg-gradient-to-b from-border to-border via-slate-500" />
 				<div className="absolute left-1/2 top-1/2 w-4 h-4 bg-border -translate-x-1/2 -translate-y-1/2 rounded-full">
					<div className="w-3 h-3 bg-background rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
				</div>
 				<div className="absolute opacity-0 transition-opacity duration-300 left-1/2 top-1/2 w-4 h-4 bg-slate-500 -translate-x-1/2 -translate-y-1/2 rounded-full">
					<div className="w-3 h-3 bg-background rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
				</div>
			</div>
			<ContactCopyButton icon={icon} title={title} value={value} />
		</>
	);
}

export function ContactLink({ icon, title, href }: { icon: React.ReactNode; title: string; href: string; }) {
	return (
		<>
			<div className="w-0.5 transition-all duration-500 bg-gradient-to-b from-border to-border relative">
				<div className="absolute transition-opacity opacity-0 left-0 top-0 w-0.5 h-full duration-300 bg-gradient-to-b from-border to-border via-slate-500" />
 				<div className="absolute left-1/2 top-1/2 w-4 h-4 bg-border -translate-x-1/2 -translate-y-1/2 rounded-full">
					<div className="w-3 h-3 bg-background rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
				</div>
 				<div className="absolute opacity-0 transition-opacity duration-300 left-1/2 top-1/2 w-4 h-4 bg-slate-500 -translate-x-1/2 -translate-y-1/2 rounded-full">
					<div className="w-3 h-3 bg-background rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
				</div>
			</div>
			<a className="w-full flex flex-row items-center experience-content py-4 gap-4" href={href} target="_blank" referrerPolicy="no-referrer" rel="noopener">
				{icon}
				<h3 className="font-semibold text-2xl text-slate-500">{title}</h3>
			</a>
		</>
	);
}

export function ContactStart() {
	return (
		<>
			<div className="w-0.5 bg-gradient-to-b from-transparent to-border" />
			<div className="w-64 h-16" />
		</>
	);
}

export function ContactEnd() {
	return (
		<>
			<div className="w-0.5 bg-gradient-to-b from-border to-transparent" />
			<div className="w-64 h-16" />
		</>
	);
}

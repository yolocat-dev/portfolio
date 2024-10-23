"use client";

import { useCallback } from "react";

export function ContactCopyButton({ icon, title, value }: { icon: React.ReactNode; title: string; value: string;}) {
	const copy = useCallback(() => {
		window.navigator.clipboard.writeText(value);
	}, [value]);

	return (
		<button className="w-full flex flex-row items-center experience-content py-4 gap-4" onClick={copy}>
			{icon}
			<span className="font-semibold text-2xl text-slate-500">{title}</span>
		</button>
	);
}

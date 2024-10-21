import { useEffect, useRef, useState } from "react";

export function useObserver(ids: string[]) {
	const observer = useRef<IntersectionObserver>();
	const [active, setActive] = useState(ids[0]);

	useEffect(() => {
		const handleObserver = (entries: IntersectionObserverEntry[]) => {
			const id = entries.find((entry) => entry.isIntersecting)?.target.id;
			if(id) setActive(id);
		};

		observer.current = new IntersectionObserver(handleObserver, {
			rootMargin: "-90% 0px 0px 0px",
			threshold: 0,
		});

		const elems = ids.map((id) => document.getElementById(id)!);
		elems.forEach((elem) => observer.current?.observe(elem));

		return () => observer.current?.disconnect();
	}, [ids]);

	return active;
}

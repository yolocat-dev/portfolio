"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "@/components/icons";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

export function CarouselWrapper({ children }: { children: React.ReactNode; }) {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: false
	});

	const scrollPrev = useCallback(() => {
		if(emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if(emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	const [canScrollPrev, setCanScrollPrev] = useState(false);
	const [canScrollNext, setCanScrollNext] = useState(false);

	useEffect(() => {
		if(!emblaApi) return;
		
		const updateScroll = () => {
			setCanScrollPrev(emblaApi.canScrollPrev());
			setCanScrollNext(emblaApi.canScrollNext());
		};

		updateScroll();

		emblaApi.on("select", updateScroll);

		return () => {
			emblaApi.off("select", updateScroll);
		};
	}, [emblaApi]);

	return (
		<div className="w-[40rem] h-auto mt-4 rounded-3xl border-2 relative group">
			<div className="overflow-hidden rounded-3xl w-full h-full" ref={emblaRef}>
				<div className="flex">
					{children}
				</div>
			</div>
			<div className={cn("absolute w-40 h-full bg-gradient-to-r transition-opacity opacity-0 duration-150 from-background/75 to-transparent rounded-l-3xl left-0 top-0", canScrollPrev && "group-hover:opacity-100")}></div>
			<div className={cn("absolute w-40 h-full bg-gradient-to-l transition-opacity opacity-0 duration-150 from-background/75 to-transparent rounded-r-3xl right-0 top-0", canScrollNext && "group-hover:opacity-100")}></div>
			<button aria-label="View Previous Image" className={cn("absolute transition-opacity opacity-0 duration-150 text-slate-200 left-4 top-0 h-full w-20 grid place-items-center pointer-events-none", canScrollPrev && "group-hover:opacity-100 pointer-events-auto")} onClick={scrollPrev}>
				<ChevronLeft size={48} />
			</button>
			<button aria-label="View Next Image" className={cn("absolute transition-opacity opacity-0 duration-150 text-slate-200 right-4 top-0 h-full w-20 grid place-items-center pointer-events-none", canScrollNext && "group-hover:opacity-100 pointer-events-auto")} onClick={scrollNext}>
				<ChevronRight size={48} />
			</button>
		</div>
	)
}

import Image, { StaticImageData } from "next/image";
import { CarouselWrapper } from "./carousel-client";

export default function Carousel({ images, title }: { images: StaticImageData[]; title: string; }) {
	return (
		<CarouselWrapper>
			{images.map((image, index) => (
				<div className="flex-[0_0_100%] min-w-0" key={`carousel-${index}`}>
					<Image src={image} alt={`Carousel image ${index} of ${title}`} />
				</div>
			))}
		</CarouselWrapper>
	)
}

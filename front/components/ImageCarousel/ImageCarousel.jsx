import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const ImageCarousel = ({ imageArray }) => {
  if (!imageArray?.length) return null;

  return (
    <Carousel className="mx-auto w-full max-w-3xl">
      <CarouselContent>
        {imageArray.map((image, index) => (
          <CarouselItem key={image.original ?? index}>
            <img
              src={image.original}
              alt={`gallery-image-${index}`}
              className="aspect-video w-full rounded-lg object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  );
};

export default ImageCarousel;

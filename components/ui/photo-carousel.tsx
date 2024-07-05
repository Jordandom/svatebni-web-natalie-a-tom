'use client'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

// Placeholder image for loading
const placeholderImage = '/placeholder.jpeg'

const images = Array.from({ length: 22 }, (_, index) => ({
  name: `${index + 1}`,
  src: `/${index + 1}.jpeg`,
}))

export const PhotoCarousel = () => {
  return (
    <Carousel
      options={{
        loop: true,
        dragFree: true,
      }}
      plugins={[
        Autoplay({
          delay: 4_000,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image.name} className="md:basis-1/2 lg:basis-1/3">
            <Image
              layout="responsive"
              width={800}
              height={600}
              key={image.name}
              src={image.src}
              alt={image.name}
              placeholder="blur"
              blurDataURL={placeholderImage}
              className="object-cover"
              priority={false} // Do not prioritize these images for loading
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive sizes
              // loading="lazy" // Lazy load the images
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

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
// import AutoHeight from 'embla-carousel-auto-height'

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
          delay: 3_000,
        }),
        // AutoHeight(),
      ]}
      className="w-full"
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={image.name} className="md:basis-1/2 lg:basis-1/3">
            <Image
              layout="responsive"
              width={800}
              height={600}
              key={image.name}
              src={image.src}
              alt={image.name}
              quality={100}
              loading={index >= 3 ? 'lazy' : 'eager'}
              className="object-cover" // This ensures the image covers the container properly
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

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
import AutoHeight from 'embla-carousel-auto-height'

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
          delay: 2_000,
        }),
        AutoHeight(),
      ]}
      className="w-full"
    >
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image.name} className="md:basis-1/2 lg:basis-1/3">
            <Image
              width={150}
              height={300}
              key={image.name}
              src={image.src}
              alt={image.name}
              className="w-full"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

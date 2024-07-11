import Image from 'next/image'

export const Hero = () => (
  <Image
    className="mx-auto my-0"
    priority
    src="/uvodni-obrazek-transparent-compress.webp"
    width={1920}
    height={1080}
    alt="Naty a Tom úvodní obrázek"
  />
)

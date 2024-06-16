'use client'

import { SparklesCore } from '@/components/ui/sparkles'
import { H1 } from '@/components/ui/typography'
import Image from 'next/image'

export const Schedule = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-md ">
      <div className="absolute inset-0 h-screen w-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="h-[120rem] w-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="relative z-20 flex flex-col items-center gap-8">
        <H1 className="uppercase">
          <span className="underline-offset-3 text-blue decoration-8">Harmonogram</span>
        </H1>
        <div className="grid grid-cols-1 gap-8">
          {images.map((image) => (
            <div key={image.name} className="flex items-center gap-4">
              <Image src={image.src} width={50} height={50} alt={image.name} />
              <div>
                <h3 className="font-bold">{image.text}</h3>
                <p>{image.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const images = [
  {
    name: 'heart',
    src: '/heart.svg',
    text: 'Příjezd hostů',
    time: '12:00',
  },
  {
    name: 'rings',
    src: '/rings.svg',
    text: 'Svatební obřad',
    time: '13:00',
  },
  {
    name: 'camera',
    src: '/camera.svg',
    text: 'Společné focení',
    time: '14:00',
  },
  {
    name: 'glasses',
    src: '/glasses.svg',
    text: 'Slavnostní přípitek',
    time: '14:55',
  },
  {
    name: 'lunch',
    src: '/lunch.svg',
    text: 'Slavnostní oběd',
    time: '15:00',
  },
  {
    name: 'cake',
    src: '/cake.svg',
    text: 'Krájení svatebního dortu',
    time: '15:30',
  },
  {
    name: 'dance',
    src: '/dance.svg',
    text: 'První novomanželský tanec',
    time: '15:30',
  },
  {
    name: 'flower-throw',
    src: '/flower-throw.svg',
    text: 'Vyplétání svatební kytice',
    time: '17:00',
  },
  {
    name: 'toast',
    src: '/toast.svg',
    text: 'Zábava a hry',
    time: '17:30',
  },
  {
    name: 'food',
    src: '/food.svg',
    text: 'Raut',
    time: '18:00',
  },
  {
    name: 'party',
    src: '/party.svg',
    text: 'Zábava až do rána',
    time: '20:00',
  },
]

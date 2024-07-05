import { Hero } from '@/components/layout/hero'
import { PhotoCarousel } from '@/components/ui/photo-carousel'
import { TracingBeam } from '@/components/ui/tracing-beam'
import { Schedule } from '@/components/layout/schedule'
import { Gifts } from '@/components/layout/gifts'
import { Cormorant_Garamond } from 'next/font/google'
import { DressCode } from '@/components/layout/dresscode'
import dynamic from 'next/dynamic'
const Map = dynamic(() => import('@/components/ui/map'), {
  ssr: false,
})
const Countdown = dynamic(() => import('@/components/ui/countdown'), {
  ssr: false,
})
const GuestConfirmationForm = dynamic(() => import('@/components/layout/guest-confirmation-form'), {
  ssr: false,
})
const OurStory = dynamic(() => import('@/components/layout/our-story'), {
  ssr: false,
})

const cormorantGaramond = Cormorant_Garamond({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <div className={cormorantGaramond.className}>
      <Hero />
      <TracingBeam className="px-6">
        <div className="relative flex flex-col text-3xl antialiased">
          <div className="flex flex-col items-center gap-16 px-1 pb-16 pt-1 sm:px-8 sm:pt-8">
            <PhotoCarousel />
            <OurStory />
            <Countdown />
            <Schedule />
            <Gifts />
            <DressCode />
            <GuestConfirmationForm />
            <Map />
            <div className="ml-auto flex flex-col text-sm font-semibold">
              <div>Vytvořeno: Ing. Jordan Domovčijski</div>
              <a href="tel:+420777978066">+420 777978066</a>
              <div>jordan.domovcijski@gmail.com</div>
            </div>
          </div>
        </div>
      </TracingBeam>
    </div>
  )
}

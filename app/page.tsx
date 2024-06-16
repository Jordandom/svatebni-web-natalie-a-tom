import { GuestConfirmationForm } from '@/components/layout/guest-confirmation-form'
import { Hero } from '@/components/layout/hero'
import { OurStory } from '@/components/layout/our-story'
import { Countdown } from '@/components/ui/countdown'
import { PhotoCarousel } from '@/components/ui/photo-carousel'
import { TracingBeam } from '@/components/ui/tracing-beam'
import { Schedule } from '@/components/layout/schedule'
import { Gifts } from '@/components/layout/gifts'
import { Cormorant_Garamond } from 'next/font/google'
import { DressCode } from '@/components/layout/dresscode'
import dynamic from 'next/dynamic'
const Map = dynamic({ ssr: false })

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
          <div className="flex flex-col items-center gap-16 p-1 sm:p-8">
            <PhotoCarousel />
            <OurStory />
            <Countdown />
            <Schedule />
            <Gifts />
            <DressCode />
            <GuestConfirmationForm />
            <Map />
          </div>
        </div>
      </TracingBeam>
    </div>
  )
}

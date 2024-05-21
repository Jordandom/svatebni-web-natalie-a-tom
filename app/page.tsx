import { Countdown } from '@/components/ui/countdown'
import { WavyBackground } from '@/components/ui/wavy-background'

export default function Home() {
  return (
    <WavyBackground className="mx-auto flex max-w-4xl flex-col items-center gap-10 pb-40">
      <Countdown />
      <p className="inter-var text-center text-2xl font-bold text-white md:text-4xl lg:text-7xl">
        Naty a Tom
      </p>
      <p className="inter-var mt-4 text-center text-base font-normal text-white md:text-lg">
        24. 8. 2024
      </p>
    </WavyBackground>
  )
}

'use client'

import { H1 } from '@/components/ui/typography'

const Map = () => {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <H1 className="uppercase">
        <span className="underline-offset-3 text-blue decoration-8">Poloha</span>
      </H1>

      <div className="flex flex-col items-center">
        <p className="text-center">Courtyard by Marriott</p>
        <p className="text-center">sady 5. května 57, 301 00 Plzeň 3</p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2577.9936940150374!2d13.378986876823616!3d49.74856243765207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470af1ef997f5db1%3A0xa4048e0d18dc3c89!2sCourtyard%20Pilsen!5e0!3m2!1scs!2scz!4v1723487176674!5m2!1scs!2scz"
        width="100%"
        height="600"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}

export default Map

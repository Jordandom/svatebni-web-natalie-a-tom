'use client'

import { useEffect, useState } from 'react'
import CountdownReact, { CountdownRenderProps } from 'react-countdown'

const countdownDate = new Date(2024, 8, 24, 13, 0, 0)
export const Countdown = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const renderer = ({ days, hours, minutes, seconds, completed }: CountdownRenderProps) => {
    if (completed) {
      // Render a completed state
      return <>Completed</>
    } else {
      // Render a countdown
      return (
        <div className="flex items-center gap-1">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
            {days}:
          </h1>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
            {hours}:
          </h1>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
            {minutes}:
          </h1>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
            {seconds}
          </h1>
        </div>
      )
    }
  }
  return isMounted ? <CountdownReact date={countdownDate} renderer={renderer} /> : null
}

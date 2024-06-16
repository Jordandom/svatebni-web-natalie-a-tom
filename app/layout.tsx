import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Naty a Tom',
  description: 'Svatba Natálie Černické a Tomáše Šedivého',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="overflow-y-scroll" lang="cs">
      <body className={`overflow-x-hidden ${inter.className}`}>{children}</body>
      <Toaster richColors position="top-center" />
    </html>
  )
}

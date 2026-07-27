import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Architecture Studio',
  description: 'Premium 3D architecture portfolio with immersive visuals',
  themeColor: '#0f172a',
  openGraph: {
    title: 'Architecture Studio',
    description: 'Premium 3D architecture portfolio with immersive visuals',
    url: 'https://architecture-studio.com',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Architecture Studio',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head />
      <body
        className={`${inter.className} bg-black text-white min-h-screen overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  )
}

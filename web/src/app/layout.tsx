import type { Metadata } from 'next'
import { Montserrat, Oxanium } from 'next/font/google'

import './global.css'

const oxanium = Oxanium({
  weight: ['500', '600'],
  subsets: ['latin'],
  variable: '--font-oxanium',
})

const montserrat = Montserrat({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Devstage App',
  description: 'Devstage app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${oxanium.variable} ${montserrat.variable}`}>
      <body className="bg-[url(/background.png)] bg-gray-900 bg-top bg-no-repeat text-gray-100 antialiased md:bg-right-top">
        {children}
      </body>
    </html>
  )
}

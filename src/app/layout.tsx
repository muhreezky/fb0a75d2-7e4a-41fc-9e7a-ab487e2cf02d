import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Suspense } from 'react'
import Loading from './loading'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DummyJSON Products Demo',
  description: 'API Implementation of DummyJSON products',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
        <Footer />
      </body>
    </html>
  )
}

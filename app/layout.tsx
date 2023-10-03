import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from '@/lib/providers'
import Navbar from './layout/navbar'

const inter = Inter({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <html lang="en" className={`${inter.className}`}>
        <body>
          <main className="w-screen bg-[#1f2026]">
            <div className="w-full px-8 pb-16 pt-4">
              <Navbar />
            </div>
            {children}
          </main>
        </body>
      </html>
    </Providers>
  )
}

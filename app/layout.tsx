import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from '@/lib/providers'

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
          <main className="h-screen w-screen bg-[#1f2026]">{children}</main>
        </body>
      </html>
    </Providers>
  )
}

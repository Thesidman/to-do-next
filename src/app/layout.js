import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'to do App',
  description: 'created by sidman #1 project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900 text-orange-200 container mx-auto p-10`}>{children}</body>
    </html >
  )
}

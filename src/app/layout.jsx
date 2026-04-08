import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Playfair_Display, Inter } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair'
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata = {
  title: 'Naim Talip - Software Engineer',
  description: 'Portfolio of Naim Talip — Software Engineer specializing in AI-driven solutions, full-stack development, and RAD. Based in Kuching, Sarawak.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans text-primary">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { TooltipProvider } from '@/components/ui/tooltip'
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
  title: 'Naim Talip - Executive: AI, Robotics & Innovation | Software & AI Engineer',
  description: 'Portfolio of Naim Talip — Executive: AI, Robotics and Innovation Project Expert at TEGAS, specializing in AI systems, full-stack engineering, and emerging tech enablement. Based in Kuching, Sarawak.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
        <TooltipProvider delayDuration={200}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </TooltipProvider>
      </body>
    </html>
  )
}

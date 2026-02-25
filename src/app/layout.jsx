import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Naim Talip - Software Engineer',
  description: 'Portfolio of Naim Talip — Software Engineer specializing in AI-driven solutions, full-stack development, and RAD. Based in Kuching, Sarawak.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

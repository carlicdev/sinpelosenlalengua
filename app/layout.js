import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'
import { Comic_Neue, Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
 })

const comicNeue = Comic_Neue({ 
  weight: ['700'],
  subsets: ['latin'],
  variable: '--font-comic',
 })

export const metadata = {
  title: 'Sin Pelos en la Lengua',
  description: 'Un lugar para escribir sobre cualquier tema. Un blog para opinar sin pelos en la lengua.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${comicNeue.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

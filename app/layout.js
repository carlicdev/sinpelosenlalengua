import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'
import { Poppins, Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
 })

const poppins = Poppins({ 
  weight: ['800'],
  subsets: ['latin'],
  variable: '--font-poppins',
 })

export const metadata = {
  title: 'Sin Pelos en la Lengua',
  description: 'Un lugar para escribir sobre cualquier tema. Un blog para opinar sin pelos en la lengua.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

import Header from './components/Header'
import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDB Clone',
  description: 'Build on Next13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* header */}
        <Header />

        {/* navbar */}
        <Navbar/>

        {/* searchbox */}

        {children}
      </body>
    </html>
  )
}

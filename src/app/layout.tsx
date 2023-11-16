
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from './components/Nav'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Threedee',
  description: 'A website to Experiment with 3d Designs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
<div className='flex justify-center content-center'>
        <Nav />
      <img src="/Group 5.png" className="net" />  
      <div className='constant-gradient'></div>
      </div>
      {children}
      </body>
    </html>
  )
}

import LeftBar from './components/leftbar/Leftbar'
import Rightbar from './components/rightbar/Rightbar'

import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight:["400","500"],style:["normal","normal"]})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex flex-row h-[100%] w-[100%]'>
        <LeftBar/>
        {children}
        <Rightbar/>
        </div>
        </body>
    </html>
  )
}

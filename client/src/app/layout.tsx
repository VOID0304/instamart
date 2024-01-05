import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Theme } from '@radix-ui/themes'

const poppins = Poppins({ weight: ['100','200','300','400','500','600','700','800','900'], subsets:['latin']})

export const metadata: Metadata = {
  title: 'VoidMart',
  description: 'Online Grocery Delivery From Trusted Vendors',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Theme appearance={'light'}>
      <body className={poppins.className} suppressHydrationWarning={true}>{children}</body>
      </Theme>
    </html>
  
  )
}

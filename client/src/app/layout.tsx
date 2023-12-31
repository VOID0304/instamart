import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Theme } from '@radix-ui/themes'
import { Provider } from 'jotai'
import '@radix-ui/themes/styles.css';

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
    <>
    <html lang="en">
      <Provider>
      <body className={poppins.className} suppressHydrationWarning={true}>
      <Theme appearance={'light'}>
        {children}
      </Theme>
      </body>
      </Provider>
    </html>
    </>
  )
}

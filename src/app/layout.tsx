import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Providers } from './providers'
import Main from '@/components/Main/Main'


const roboto = Roboto({ subsets:['latin'], weight:['500']})
export const metadata: Metadata = {
  title: 'Color Palettes',
  description: 'Generated by create next app',
}

const RootLayout =({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          <Main>
            {children}
          </Main>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout

import { Inter } from 'next/font/google'
import './globals.css'
import GlobalState from '@/context'
import NextThemeProvider from '@/theme-provider'
import CommonLayout from '@/components/common-layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Admin Dashboard',
  description: 'Created by Maria Nazehat',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalState>
          <NextThemeProvider>
            <CommonLayout>{children}</CommonLayout>
          </NextThemeProvider>
        </GlobalState>
      </body>
    </html>
  )
}

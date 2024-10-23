import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import '../src/app/styles/index.scss'
import { Header } from '@/widgets/header'

const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Mammy Pizza | Главная',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={nunito.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}

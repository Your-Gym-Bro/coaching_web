import './globals.css'
import { EB_Garamond } from 'next/font/google'
import { AuthContextProvider } from '../context/AuthContext'
const eb_garamond = EB_Garamond({
  weight: ["400", "700"],
  subsets: ['latin'],
  variable: '--font-eb-garamond',
})

export const metadata = {
  title: 'Namsrai Khatanbaatar',
  description: 'Namsrai Khatanbaatar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="eng">

      <body className={`${eb_garamond.className}`}>
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </body>

    </html>
  )
}

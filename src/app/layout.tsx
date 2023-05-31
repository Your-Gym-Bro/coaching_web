import './globals.css'
import { EB_Garamond } from 'next/font/google'

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
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">about</a>
            </li>
          </ul>
        </nav>
        {children}
        <footer>
          <p>footer</p>
        </footer>
      </body>

    </html>
  )
}

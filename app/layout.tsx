import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'
import { AuthProvider } from '@/lib/context/AuthContext'
import { ThemeProvider } from '@/lib/context/ThemeContext'

export const metadata: Metadata = {
  title: 'Vybz Streams',
  description: 'Created with v0',
  generator: 'v0.app',
}

const proximaFont = localFont({
    src: [
        {
            path: "../public/fonts/ProximaNova-Semibold.otf",
            weight: "400", //normal
            style: "normal",
        },
        {
            path: "../public/fonts/ProximaNova-Semibold.otf",
            weight: "500", //medium
            style: "normal",
        },
        {
            path: "../public/fonts/ProximaNova-Bold.otf",
            weight: "600", //semibold
            style: "normal",
        },
        {
            path: "../public/fonts/ProximaNova-Bold.otf",
            weight: "700", //bold
            style: "normal",
        },
        {
            path: "../public/fonts/ProximaNova-Bold.otf",
            weight: "800", // extrabold
            style: "normal",
        },
        {
            path: "../public/fonts/ProximaNova-Bold.otf",
            weight: "900", // black
            style: "normal",
        }
    ],
    display: "swap",
    variable: "--font-proximanova",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${proximaFont.variable}`}>
      <head>
        <style>{`
html {
   font-family: ${proximaFont.style.fontFamily};
  --font-sans: ${proximaFont.variable};
  --font-mono: ${proximaFont.variable};
}
        `}</style>
      </head>
      <body className={proximaFont.className}>
        <AuthProvider>
          <ThemeProvider>
           {children}
          </ThemeProvider>
        </AuthProvider>
       
        </body>
    </html>
  )
}

import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import  Navbar  from '@/components/navbar'


const inter = Inter({ subsets: ['latin'] })

const poppins = Poppins({
  subsets: ['latin'],
  weight:['100','200','300','400','500','600','700','800','900']
})

export const metadata: Metadata = {
  title: 'To Do App',
  description: 'To do app suing next/shadcn/tailwind',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

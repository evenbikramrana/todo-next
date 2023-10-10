import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import  Navbar  from '@/components/navbar'
import { Toaster } from "@/components/ui/toaster"
import Header from '@/components/Header'


const inter = Inter({ subsets: ['latin'] })

const poppins = Poppins({
  subsets: ['latin'],
  weight:['100','200','300','400','500','600','700','800','900']
})

export const metadata: Metadata = {
  title: 'To Do App',
  description: 'To do app using next/shadcn/tailwind',
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
          <Header />
          {/* <Navbar /> */}
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

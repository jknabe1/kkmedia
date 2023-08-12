import './globals.css'
import Navigation from '@/components/navigation/navigation'
import Footer from '@/components/footer/footer'
import { Providers } from '@/components/provider'
import Cursor from '@/components/cursor/cursor'


export const metadata = {
  title: 'K&K MEDIA GROUP ',
  description: 'Generated by create next app',
  
}

console.log('%c JavaScript!!', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');




export default function RootLayout(
  {
  children,
  }: 
  {
  children: React.ReactNode
  }
  
)
 {
  return (
    <html lang="SE_sv" suppressHydrationWarning>
      <link rel="manifest" href="/public/manifest.json" />
      <script async src="//instant.page/5.2.0" type="module" integrity="sha384-jnZyxPjiipYXnSU0ygqeac2q7CVYMbh84q0uHVRRxEtvFPiQYbXWUorga2aqZJ0z"></script>
      <body>
        <Cursor/>
        <Providers> 
        <Navigation/>
          <main className="">
            {children}
          </main>
          <Footer/>
        </Providers>
      </body>
    </html>
  )
}



import '../styles/styles.scss';
import Header from '@/layouts/header/Header';
import Footer from '@/layouts/footer/Footer';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <head />
      <body>
        <main className='gossip'>
          <Header />
          <div className='content'>
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  )
}

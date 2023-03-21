

import '../styles/styles.scss';
import { Providers } from './providers'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="dark:bg-gray-800">
      {/* <ThemeProvider> */}
      <Providers>{children}</Providers>
        {/* </ThemeProvider> */}
        </body>
    </html>
  )
}

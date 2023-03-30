// import "../styles/styles.scss";
import "../styles/globals.css";
import Header from "@/layouts/Header/Header";
import Footer from "@/layouts/Footer/Footer";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Providers } from './providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Slab:wght@300;400;500;600;700;800;900&display=swap"  />
        </head>
      <body>
      <Providers>
        <main className="gossip bg-bodycolor dark:bg-brandDark2">
          <Header />
          <div className="content">{children}</div>
          <Footer />
        </main>
        </Providers>
      </body>
    </html>
  );
}
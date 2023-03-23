import "../styles/styles.scss";
import Header from "@/layouts/header/Header";
import Footer from "@/layouts/footer/Footer";
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
      <head />
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

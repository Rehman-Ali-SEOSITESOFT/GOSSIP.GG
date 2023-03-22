import "../styles/styles.scss";
import Header from "@/layouts/header/Header";
import Footer from "@/layouts/footer/Footer";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <main className="gossip bg-bodycolor">
          <Header />
          <div className="">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}

import Nav from '../components/Nav';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Layout.module.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <Header title="Toronto Food And Weather" />
        <Nav />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
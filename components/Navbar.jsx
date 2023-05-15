import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <ul className={styles.nav}>
        <Link href="/" className={styles.navLink}>
          Home
        </Link>
        <Link href="/categories/sports" className={styles.navLink}>
          Sports
        </Link>
        <Link href="/categories/businnes" className={styles.navLink}>
          Businnes
        </Link>
        <Link href="/categories/entertainment" className={styles.navLink}>
          Entertainment
        </Link>
        <Link href="/categories/general" className={styles.navLink}>
          General
        </Link>
        <Link href="/categories/health" className={styles.navLink}>
          Health
        </Link>
        <Link href="/categories/science" className={styles.navLink}>
          Science
        </Link>
        <Link href="/categories/technology" className={styles.navLink}>
          Technology
        </Link>
        <Link href="/about" className={styles.navLink}>
          About
        </Link>
        <Link href="/contact" className={styles.navLink}>
          Contact
        </Link>
      </ul>
    </>
  );
}

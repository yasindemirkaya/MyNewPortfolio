import Link from 'next/link';
import styles from './index.module.scss';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/" className={styles.logoLink}>My Portfolio</Link>
            </div>
            <nav className={styles.nav}>
                <Link href="about" className={styles.navLink}>About</Link>
                <Link href="projects" className={styles.navLink}>Projects</Link>
                <Link href="contact" className={styles.navLink}>Contact</Link>
            </nav>
        </header>
    );
}
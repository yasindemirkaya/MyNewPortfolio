// pages/index.js
import styles from './index.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Welcome to My Portfolio</h1>
        <p className={styles.subtitle}>I am a Software Developer</p>
        <button className={styles.cta}>Contact Me</button>
      </div>
    </div>
  );
}

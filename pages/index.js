import { motion } from 'framer-motion';
import styles from './index.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        {/* Hero başlık */}
        <motion.h1
          className={styles.title}
          initial={{ y: -100, opacity: 0 }}   // Başlangıçta yukarıda ve görünmez
          animate={{ y: 0, opacity: 1 }}      // Hedef: normal konumda ve görünür
          transition={{
            type: 'spring',                  // Yavaş ve doğal geçiş tipi
            stiffness: 120,                  // Zıplama kuvveti
            damping: 10,                     // Zıplama kaybı
            duration: 1,                     // Süre
            delay: 0.2                       // Başlangıç gecikmesi
          }}
        >
          Hello!
        </motion.h1>

        <motion.h1
          className={styles.title}
          initial={{ y: -100, opacity: 0 }}   // Başlangıçta yukarıda ve görünmez
          animate={{ y: 0, opacity: 1 }}      // Hedef: normal konumda ve görünür
          transition={{
            type: 'spring',                  // Yavaş ve doğal geçiş tipi
            stiffness: 120,                  // Zıplama kuvveti
            damping: 10,                     // Zıplama kaybı
            duration: 1,                     // Süre
            delay: 0.4                       // Başlangıç gecikmesi
          }}
        >
          I'm Yasin Demirkaya!
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ y: 100, opacity: 0 }}   // Başlangıçta aşağıda ve görünmez
          animate={{ y: 0, opacity: 1 }}     // Hedef: normal konumda ve görünür
          transition={{
            type: 'spring',                  // Yavaş ve doğal geçiş tipi
            stiffness: 120,                  // Zıplama kuvveti
            damping: 10,                     // Zıplama kaybı
            duration: 1,                     // Süre
            delay: 0.6                       // Başlangıç gecikmesi
          }}
        >
          Computer Engineer | Vue.js & Nuxt | React & Next.js | Node.js & Express
        </motion.p>

        <motion.button
          className={styles.cta}
          initial={{ y: 50, opacity: 0 }}    // Başlangıçta aşağıda ve görünmez
          animate={{ y: 0, opacity: 1 }}     // Hedef: normal konumda ve görünür
          transition={{
            type: 'spring',                  // Yavaş ve doğal geçiş tipi
            stiffness: 120,                  // Zıplama kuvveti
            damping: 10,                     // Zıplama kaybı
            duration: 1,                     // Süre
            delay: 0.8                       // Başlangıç gecikmesi
          }}
        >
          Contact Me
        </motion.button>
      </div>
    </div>
  );
}

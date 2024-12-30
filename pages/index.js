import { motion } from 'framer-motion';
import styles from './index.module.scss';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <motion.h1
          className={styles.title}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 120,
            damping: 10,
            duration: 1,
            delay: 0.2
          }}
        >
          Hello!
        </motion.h1>

        <motion.h1
          className={styles.title}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 120,
            damping: 10,
            duration: 1,
            delay: 0.4
          }}
        >
          I'm Yasin Demirkaya.
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 120,
            damping: 10,
            duration: 1,
            delay: 0.6
          }}
        >
          Computer Engineer | Vue.js & Nuxt | React & Next.js | Node.js & Express
        </motion.p>

        <motion.div
          className={styles.ctaWrapper}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 120,
            damping: 10,
            duration: 1,
            delay: 0.8,
          }}
        >
          <Link href="/about-me" passHref>
            <motion.button className={styles.cta}>
              <span>About Me</span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

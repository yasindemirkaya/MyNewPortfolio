import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './index.module.scss'

const SocialLinks = () => {
    return (
        <motion.div
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
            <div className="d-flex justify-content-between">
                <Link href="https://github.com/yasindemirkaya" passHref target="_blank">
                    <motion.div className={styles.socialLinks}>
                        <span>GitHub</span>
                    </motion.div>
                </Link>
                <Link href="https://www.linkedin.com/in/yasin-demirkaya" passHref target="_blank">
                    <motion.div className={styles.socialLinks}>
                        <span>LinkedIn</span>
                    </motion.div>
                </Link>
                <Link href="mailto:yasin97demirkaya@gmail.com" passHref>
                    <motion.div className={styles.socialLinks}>
                        <span>Email</span>
                    </motion.div>
                </Link>
            </div>
        </motion.div>
    );
};

export default SocialLinks;

import React from 'react';
import styles from '../styles/Pricing.module.scss';
import Link from 'next/link';
import Section from './Section';

const Feature = ({ children }) => {
    return (
        <div className={styles.feature}>
            <div className={styles.feature__icon}>
                <span>✔</span>
            </div>
            <div className={styles.feature__text}>
                <span>{ children }</span>
            </div>
        </div>
    )
}
const Pricing = () => {
  return (
    <Section
        subtitle="Our Price Model"
        title="Detailed Pricing Table"
        description="Details price here"
        id="pricing"
    >
        <div className={styles.container}>
            <div className={styles.plan}>
                <h2>With Your Purchase</h2>
                <p>
                    After your purchase we will deliver
                </p>
                <div className={styles.price}>
                    <span className={styles.num}>$50</span>
                    <span className={styles.unit}>/mo</span>
                </div>
                <div className={styles.actions}>
                    <Link href="">
                    <a className={styles.purchase}>Purchase Now</a>
                    </Link>
                    <Link href="">
                    <a className={styles.upgrade}>Upgrade</a>
                    </Link>
                </div>
                <div className={styles.reviews}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span className={styles.review}>
                        Rated 4.8/5 Stars in 27 reviews.
                    </span>
                </div>
            </div>
            <div className={styles.details}>
                <div className={styles.detail}>
                    <h3>With Your Purchase</h3>
                    <Feature>A Design for your Web or App</Feature>
                    <Feature>Digital Marketing</Feature>
                    <Feature>Web Development</Feature>
                    <Feature>App Development</Feature>
                    <Feature>Community Manager </Feature>
                    <Feature>Social Development</Feature>
                    <Feature>Seo Friendly</Feature>
                    <Feature>Database Analytics</Feature>
                </div>
                <div className={styles.detail}>
{/*                 <h3>For Free</h3>
                    <Feature>Review of your actual website</Feature>
  */}
                </div>
            </div>
        </div>
    </Section>
  )
}

export default Pricing
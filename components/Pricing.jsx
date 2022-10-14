import React from 'react';
import styles from '../styles/Pricing.module.scss';
import Link from 'next/link';
import Section from './Section';

const Feature = ({ children }) => {
    return (
        <div className={styles.feature}>
            <div className={styles.feature__icon}>
                <span>X</span>
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
        description="Details"
    
    >
        
    </Section>
  )
}

export default Pricing
import React from 'react'
import Section from './Section'
import styles from '../styles/intro.module.scss'
import Image from 'next/image';
import {FaArrowRight} from 'react-icons/fa'
import Link from "next/link"

const Intro = () => {
  return (
    <Section className={styles.padding}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h1>
            Frontend <br />
            Developers <br />
            At your service
          </h1>
          <p>
          We make it easy <br />
          Tell us what you want, and we will do it for you
          </p>
          <div className={styles.actions}>
            <Link href="#">
              <a className={styles.customer}>
                <span>New Costumer</span>
                <FaArrowRight/>
              </a>
            </Link>
            <Link href="#">
              <a className={styles.contact}>
                <span>Contact Us</span>
                <FaArrowRight/>
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.illustration}>
          <Image 
            width="100%"
            height="100%"
            objectFit= "contain"
            layout="responsive"
            src="/intro.png"
          />
        </div>
      </div>
    </Section>
  )
}

export default Intro
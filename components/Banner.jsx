import React from 'react'
import styles from '../styles/Banner.module.scss'
import {MdKeyboardArrowDown} from 'react-icons/md'
import {IoLocationOutline} from 'react-icons/io5'
import {BsTelephone} from 'react-icons/bs'
import { TbBrandLinkedin} from 'react-icons/tb'
import Link from 'next/link'

const Banner = () => {
  return (
    <div className={styles.outer}>
        <div  className={styles.container}>
            <div className={styles.support}>
                <Link href='#'>
                  <a>
                    <MdKeyboardArrowDown />
                    <span>Call Me</span>
                  </a>
                </Link>
            </div>
            <div className={styles.contact}>
                <div className={styles.location}>
                    <IoLocationOutline />
                    <span>Buenos Aires, Argentina</span>
                </div>
            </div>
            <div className={styles.phone}>
                <Link href='#'>
                    <a>
                        <BsTelephone />
                        <span>+54 9 1130850984</span>
                    </a>
                </Link>
            </div>
            <div className={styles.socials}>
                <Link href='#'>
                  <a>
                    <TbBrandLinkedin />
                  </a>
                </Link>
                <Link href='#'>
                  <a>
                    <TbBrandLinkedin />
                  </a>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Banner
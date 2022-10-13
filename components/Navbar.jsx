import React from 'react';
import styles from '../styles/Navbar.module.scss';
import {FaBars} from "react-icons/fa";
import {BsMoon, BsSun} from "react-icons/bs";
import useOnClickOutside from '../hooks/ClickOutside'
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = ({setMode, mode}) => {
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileNav = useRef(null);
  useOnClickOutside(mobileNav, () => setIsActive(false));
  const handleScroll = () =>{
    window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false)
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
  }, [])
  return (
    <div className={`${styles.outer} ${isScrolled ? styles.scrolled : undefined}`}
    >
      <div className={styles.container}>
        <nav className={styles.inner}>
          <div className={styles.me}>
            <Link href="/">
              <a>
                <span>Durodev</span>
                <div className={styles.profile}>
                  <div className={styles.imgBorder}>
                    <Image 
                      src="/profi.png"
                      alt="profile"
                      width="100%"
                      height="100%"
                      objectFit="cover"
                    />
                  </div>
                  <div className={styles.border}></div>
                </div>
              </a>        
            </Link> 
          </div>
          <ul className={styles.nav_list}>
            <li>
                <Link href="#">
                  <a></a>
                </Link>
            </li>
            <li>
                <Link href="#">
                  <a></a>
                </Link>
            </li>
            <li>
                <Link href="#">
                  <a></a>
                </Link>
            </li>
            <li>
                <Link href="#">
                  <a></a>
                </Link>
            </li>
            <li>
                <Link href="#">
                  <a></a>
                </Link>
            </li>
            <li>
                <Link href="#">
                  <a></a>
                </Link>
            </li>
            <li>
                <Link href="#">
                  <a></a>
                </Link>
            </li>
            <div className={styles.mobile}>
                <button onClick={() => setIsActive(true)}>
                    <FaBars />
                </button>
            </div>
            <button 
                className={`${styles.mode} ${!mode ? styles.light : ""}`} onClick={() => setMode(!mode)}>
                {mode ? <BsSun/> : <BsMoon/>}
            </button>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
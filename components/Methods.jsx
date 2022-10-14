import React, { useState } from 'react'
import styles from '../styles/Methods.module.scss';
import { useAutoAnimate } from "@formkit/auto-animate/react"
import { Fade, JackInTheBox } from "react-awesome-reveal";
import Image from 'next/image';
import Section from './Section';

const Methods = () => {
  
  const [method1, setMethod1] = useState(true);
  const [method2, setMethod2] = useState(false);
  const [method3, setMethod3] = useState(false);
  const [parent] = useAutoAnimate();
  return (
    <Section
        subtitle="Achieve all your Dreams"
        title="Acquiere new customers"
        description="Give us your ideas, and we will deliver them to you"
        id="methods"
    >
      <div className={styles.container}>
        <div className={styles.methods}>
          <JackInTheBox cascade damping={0.04}>
            <button 
              className={method1 ? styles.active : ""}
              onClick={() => {
                setMethod1(true);
                setMethod2(false);
                setMethod3(false);
              }}
            >
              <h3>Market Research</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipsicing moltes</p>
            </button>
            <button 
              className={method2 ? styles.active : ""}
              onClick={() => {
                setMethod1(false);
                setMethod2(true);
                setMethod3(false);
              }}
            >
              <h3>{` UX/UI DESIGN`}</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipsicing moltes</p>
            </button>
            <button 
              className={method3 ? styles.active : ""}
              onClick={() => {
                setMethod1(false);
                setMethod2(false);
                setMethod3(true);
              }}
            >
              <h3>Web & Mobile Development</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipsicing moltes</p>
            </button>
          </JackInTheBox>
        </div>
        <div className={styles.images} ref={parent}>
          {method1 && (
            <Image
              width="100%"
              height="100%"
              objectFit="cover"
              layout="fill"
              src="/method1.jpg"
            />
          )}
          {method2 && (
            <Image
              width="100%"
              height="100%"
              objectFit="cover"
              layout="fill"
              src="/method2.jpg"
            />
          )}
          {method3 && (
            <Image
              width="100%"
              height="100%"
              objectFit="cover"
              layout="fill"
              src="/method3.jpg"
            />
          )}
        </div>
      </div>
    </Section>
  );
};

export default Methods
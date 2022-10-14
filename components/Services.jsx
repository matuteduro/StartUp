import React from 'react';
import styles from '../styles/Services.module.scss';
import Section from "./Section"
import { Fade } from "react-awesome-reveal"

const Service = ({ line, number, background, color, title, description }) => {
    return (
        <div className={styles.service}>
            <div className={styles.circle} style={{ background: background }}>
                <span style={{ color : color}}>{number}</span>
                {line ? <div className={styles.line}></div> : null}
            </div>
            <div className={styles.title}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};
Service.defaultProps ={
    line: true,
    number: 1,
    color: "var(--color-primary)",
    background: "var(--color-primary-dark)",
    title: "Web Development",
    description: "There are many things we can do"
};

const Services = () => {
  return (
    <Section
        title="Services provided for you"
        subtitle="We Make It For You"
        description="We have the team to meet all your needs, just ask and we will give you a plan about how to do it"
        id="services" 
    >  
        <div className={styles.container}>
            <Fade cascade damping={0.05}>

                <Service 
                    number={1}
                    background="var(--color-secondary-dark"
                    color="var(--color-secondary)"
                    title="Design & Creative"
                    description="You give us your ideas, and we will give you what our expert in UX/UI design says that will be best for your business"
                />
                <Service
                    number={2}
                    background="var(--color-tertiary-dark)"
                    color="var(--color-tertiary"
                    title="Web/App Development"
                    description="At this point, your Web and App will be ready to deploy and start growing"
                />
                <Service 
                    number={3}
                    line={false}
                    background="var(--color-pink-dark)"
                    color="var(--color-pink)"
                    title="Product Design"
                />
            </Fade>
        </div>
        
    </Section>
  )
}

export default Services
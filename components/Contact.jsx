import React from 'react'
import Section from './Section'
import styles from '../styles/Contact.module.scss';

const Contact = () => {
  return (
    <Section
    title="Contact with Us!"
    id="team"
>
    <div>
        <div>
            <form className={styles.form} action="">
                <div className={styles.name}>
                    <div className={styles.inputOuter}>
                        <div className={styles.inputContainer}>
                            <label htmlFor="Name">Your Name</label>
                            <input type="text" id='name' name="name"/>
                        </div>
                        <div className={styles.error}></div>
                    </div>
                    <div className={styles.inputOuter}>
                        <div className={styles.inputContainer}>
                            <label htmlFor="Phone">Phone</label>
                            <input type="text" id='phone' name="phone"/>
                        </div>
                        <div className={styles.error}></div>
                    </div>
                </div>
                <div className={styles.name}>
                    <div className={styles.inputOuter}>
                        <div className={styles.inputContainer}>
                            <label htmlFor="Email">EMAIL</label>
                            <input type="text" id='email' name="name"/>
                        </div>
                        <div className={styles.error}></div>
                    </div>
                </div>
                <div className={styles.name}>
                    <div className={styles.inputOuter}>
                        <div className={styles.inputContainer}>
                            <label htmlFor="Subject">SUBJECT</label>
                            <input type="text" id='subject' name="subject"/>
                        </div>
                        <div className={styles.error}></div>
                    </div>
                </div>
                <div className={styles.name}>
                    <div className={styles.inputOuter}>
                        <div className={styles.inputContainer}>
                            <label htmlFor="Subject">SUBJECT</label>
                            <textarea type="text" id='message' name="message"></textarea>
                        </div>
                        <div className={styles.error}></div>
                    </div>
                </div>
                <button type='submit'>
                    <span>Send Message</span>
                </button>
            </form>
        </div>
    </div>
    </Section>
  )
}

export default Contact
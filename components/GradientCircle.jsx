import styles from "../styles/GradientCircle.module.scss"
import React from 'react'

const GradientCircleRight = () => {
  return (
    <div className={styles.right}></div>
  )
}

const GradientCircleLeft = () => {
  return (
    <div className={styles.left}></div>
  )
}

export { GradientCircleRight, GradientCircleLeft}
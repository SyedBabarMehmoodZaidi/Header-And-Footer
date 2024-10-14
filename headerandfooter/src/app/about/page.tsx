import React from 'react'
import Link from 'next/link'
import styles from '../about/about.module.css'
const AboutPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>About Page</h1>
      <ul >
        <li><Link href="/"> Go To Home Page</Link></li>
        <li><Link href="/contact"> Go To Contact Page </Link></li>
        <li><Link href="/service"> Go To Service Page </Link></li>
      </ul>
    </div>
  )
}

export default AboutPage
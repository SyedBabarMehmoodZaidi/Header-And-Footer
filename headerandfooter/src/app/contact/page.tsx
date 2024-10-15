import React from 'react'
import Link from 'next/link'
import styles from '../contact/conatct.module.css'
const ContactPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Contact Page</h1>
      <ul className={styles.navbar}>
        <li><Link href='/'>Go To Home Page</Link></li>
        <li><Link href='/about'>Go To About Page</Link></li>
        <li><Link href='/service'>Go To Service Page</Link></li>

      </ul>
    </div>
  
)

}

export default ContactPage




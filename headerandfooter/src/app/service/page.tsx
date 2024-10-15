import React from 'react'
import Link from 'next/link'
import styles from '../service/service.module.css'
const ServicePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Service Page</h1>
      <ul className={styles.navbar}>
        <li><Link href='/'>Go To Home Page</Link></li>
        <li><Link href='/about'>Go To About Page</Link></li>
        <li><Link href='/service'>Go To Contact Page</Link></li>

      </ul>

    </div>
  )
}

export default ServicePage

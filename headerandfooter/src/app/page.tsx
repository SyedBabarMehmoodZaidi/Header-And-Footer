import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <h1 className='logo'>Welcome To Pak Angro Trader</h1>
      <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/contact">Contact</Link></li>
      <li><Link href="/service">Service</Link></li>  
      </ul>
    </div>
  )
}

export default HomePage

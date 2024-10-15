import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div className='backgroundcover'>
      {/* Navbar */}
      <header className='logo'>
        <h1>Pak Angro Trader</h1>
        <ul className='navbar'>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/service">Service</Link></li>  
        </ul>
      </header>

      {/* Hero Section */}
      <section className='hero'>
        <h1>Fresh Vegetables & Juicy Fruits</h1>
        <p>
          Discover a wide variety of farm-fresh vegetables and handpicked, juicy fruits. Whether you're looking for organic greens, ripe tomatoes, or delicious berries, we have it all. Eat healthy, stay fresh!
        </p>
      </section>


      
      <footer className='footer'>
        <p>&copy; 2024 Pak Angro Trader. All Rights Reserved.</p>
        
      </footer>
    </div>

  )
}

export default HomePage
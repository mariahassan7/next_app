import React from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className={styles.div_nav}>
            <div>
                <Link className={styles.hyperlinks} href="/">Home</Link>
            </div>
            <div>
                <Link className={styles.hyperlinks} href="/about">About Educative</Link>
            </div>
    </nav>
  )
}
export default Navbar
import React from 'react'
import Navbar from './components/navbar'
import styles from '@/styles/Home.module.css'
function about() {
  return (
    <>
      <div className={styles.main_body}>
            <Navbar />
            <div className={styles.banner}>
              <h1>About Educative</h1>
            </div> 
            <div className={styles.next_properties}>
                  <div className={styles.flex_items}>
                    Learn in-demand tech skills in half the time
                  </div>
            </div>
      </div>   
    </>
    
  )
}

export default about
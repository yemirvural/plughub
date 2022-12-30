import React from 'react'
import styles from './styles.module.css'

function Navbar() {
  return (
    <div className={styles.navbar}>
      <a className={styles.logo} href="#"><img src="https://assets.plugshare.com/assets/plugshare-web.png" alt="plugshare" /></a>
      <div className={styles.navbaritems}>
        <span className={styles.business}><button>PlugShare for Business</button></span>
        <span className={styles.langswitch} href=""><button>EN</button></span>
        <a href=""><button>Login</button></a>
        <a href=""><button>Register</button></a>
      </div>
    </div>
  )
}

export default Navbar
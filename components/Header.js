import { useContext } from 'react'
import {FaSignInAlt, FaSignOutAlt} from 'react-icons/fa'
import Link from 'next/link'
import Search from './Search'
import styles from '@/styles/Header.module.css'
import AuthContext from '@/context/AuthContext'

export default function Header() {
  const {user,logout} = useContext(AuthContext)
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'>
          Trailblazer Events Clone
        </Link>
      </div>
      
      <nav>
        <ul>
          <li>
            <Link href="/events">Events</Link>
          </li>
          {user ? <>
          {/* if logged in  */}
            <li>
            <Link href="/events/add">Add Event</Link>
          </li>
          <li>
            <Link href="/account/dashboard">Dashboard</Link>
          </li>
          <li>
          <button onClick={()=>logout()} className="btn-secondary btn-icon">
              <FaSignOutAlt/> Logout
          </button>
        </li>
          </>:
          <><li>
          <Link href="/account/login">
            <a className="btn-secondary btn-icon">
              <FaSignInAlt/> Login
            </a>
          </Link>
        </li></>}
          
          

        </ul>
      </nav>
    </header>
  )
}

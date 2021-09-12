import styles from '@/styles/Showcase.module.css'
import Link from 'next/link'

export default function Showcase({heading, goBack}) {
  return (
    <>
    {heading ? <div className={styles.heading}>
      <h1>{heading}</h1>
      {goBack && <Link href='/events'>Go Back</Link>}
    </div>:<div className={styles.showcase}>
     <h1>Welcome To The Trailblazer Events!</h1>
     <h2>Find the Latest Salesforce events</h2>
   </div>}
   </>
  )
}

import Link from 'next/link'
import Layout from "@/components/Layout"
import styles from '@/styles/404.module.css'
export default function NotFoundPage() {
  return (
    <Layout title='Page Not Found'>
      <div className={styles.error}>
      <div className={styles.bgImage}>
        <h1>404</h1>
      </div>
        <h2>Look like you're lost</h2>
        <p>the page you are looking for not avaible!</p>
        <Link href='/'>Go Back Home</Link>
      </div>
    </Layout>
  )
}

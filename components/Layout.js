import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from './Header'
import Footer from './Footer'
import Showcase from './Showcase'
import styles from '@/styles/Layout.module.css'

export default function Layout({title, keywords, description, children}) {
  const router = useRouter()
  console.log(router)
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Header/>
      {router.pathname === '/' && <Showcase/>}
      {router.pathname === '/events' && <Showcase heading="Events"/>}
      {router.pathname === '/events/add' && <Showcase heading="Add Events" goBack="true"/>}
      {router.pathname === '/account/dashboard' && <Showcase heading="Dashboard"/>}
      
      <div className={styles.container}>
      {children}
      </div>
      <Footer/>
    </div>
  )
}

Layout.defaultProps = {
  title: 'Events | Find the latest events',
  description: 'Find the latest events related to salesforce',
  keywords: 'salesforce, lwc, aura, apex',
}
import Link from 'next/link'
import EventItem from '@/components/EventItem'
import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import Search from '@/components/Search'

export default function Home({events}) {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      <Search/>
    {events.length ===0 && <h3>No Events to Show</h3>}
    {events.map(evt=>(
     <EventItem key={evt.id} evt={evt}/>
    ))}
    {events.length>0 && (
      <div className="text-center">
      <Link href="/events" >
        <a className="btn-secondary">Show More</a>
      </Link>
      </div>
    )}
    </Layout>
  )
}

export async function getStaticProps(){
  const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`)
  const events = await res.json(res)
  return {
    props:{events},
    revalidate:1
  }
}

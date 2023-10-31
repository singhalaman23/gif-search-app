import Image from 'next/image'
import styles from './page.module.css'
import GifSearch from './components/GifSearch'
export default function Home() {
  return (
    <main className={styles.main}>
      <GifSearch/>
    </main>
  )
}

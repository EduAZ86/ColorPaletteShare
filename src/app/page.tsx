import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/components/Header/Header'

export default function Home() {
  return (
      <div className={styles.contanier}>
        <Header/>
        <span >Hola mundo Next.js 13</span>
        <br/>
        <p>Este es el primer proyecto desarrollado en next.js 13 y sea una aplicacion web </p>
      </div>
     )
}

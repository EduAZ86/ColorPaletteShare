import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
      <div >
        <span style={style.span}  >Hola mundo Next.js 13</span>
        <br/>
        <p>Este es el primer proyecto desarrollado en next.js 13 y sea una aplicacion web </p>
      </div>
     )
}

const style = ({
  span:{
    fontFamily: 'Arial',
    fontSize: '150px',
    color: '#ca9959'
  }
})

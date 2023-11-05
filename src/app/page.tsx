import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
   <div>
    Home page 
    <Image style={{background:"transparent",marginLeft:"10px"}} width={100} height={100} alt='sdsd' src='./next.svg'/>
   </div>
  )
}

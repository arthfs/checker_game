import Affichage from './final'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const player = 'player 1'

export default function Home() {
 return ( <div> 
          <Affichage></Affichage>
 </div>
 )

}


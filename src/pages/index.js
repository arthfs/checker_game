import Affichage from './final'
import { Inter } from 'next/font/google'
import King from './king'
import Piece from './piece'
const inter = Inter({ subsets: ['latin'] })

export const player = 'player 1'

export default function Home() {
 return ( <div> 
          <King id='k1 3' piece={<Piece color = 'red' position={''} id={'0 1'}></Piece>}></King>
          <Affichage></Affichage>
 </div>
 )

}


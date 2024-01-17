import '@/styles/globals.css'

import Context from './context'
import Reference from './reference'

export default function App({ Component, pageProps }) {
 // return <Context>  <Component {...pageProps} /> </Context>
 return <Context> <Reference> <Component {...pageProps} /> </Reference> </Context>
}

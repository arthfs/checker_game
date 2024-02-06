import '@/styles/globals.css'

import Context from './context'
import ExperienceContext from './experience'
import Reference from './reference'

export default function App({ Component, pageProps }) {
 // return <Context>  <Component {...pageProps} /> </Context>
 return (
 <Context> 
    <Reference> 
        <ExperienceContext>
      
                <Component {...pageProps} /> 
          
        </ExperienceContext>
       
    </Reference> 
</Context>
 )
}

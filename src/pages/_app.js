import '@/styles/globals.css'

import Context from './context'
import ExperienceContext from './experience'
import Reference from './reference'
import Turncontext from './turncontext'

export default function App({ Component, pageProps }) {
 // return <Context>  <Component {...pageProps} /> </Context>
 return (
 <Context> 
    <Reference> 
        <ExperienceContext>
        <Turncontext>
                <Component {...pageProps} /> 
        </Turncontext>
        </ExperienceContext>
       
    </Reference> 
</Context>
 )
}

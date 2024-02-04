import '@/styles/globals.css'

import Context from './context'
import Deletecontext from './deletecontext'
import ExperienceContext from './experience'
import Reference from './reference'

export default function App({ Component, pageProps }) {
 // return <Context>  <Component {...pageProps} /> </Context>
 return (
 <Context> 
    <Reference> 
        <ExperienceContext>
            <Deletecontext>
                <Component {...pageProps} /> 
            </Deletecontext>
        </ExperienceContext>
       
    </Reference> 
</Context>
 )
}

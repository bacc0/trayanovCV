// import '../styles/styles.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp


import { Fragment } from 'react'
import Head from 'next/head'
import '../styles/styles.css'

function MyApp({ Component, pageProps }) {
     return (
          <>
               <Head>

                    <title>Veselin Trayanov</title>



                    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                    <link
                         rel="stylesheet"


                         // href="https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz|Raleway" rel="stylesheet"

                         // href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Maven+Pro:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"
                         href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet"

                    // href="https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap" rel="stylesheet"

                    />
               </Head>
               <Component {...pageProps} />
             
          </>
     )
}

export default MyApp
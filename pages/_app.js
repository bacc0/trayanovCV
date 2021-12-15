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
          <Fragment>
               <Head>
                    <title>Veselin Trayanov</title>
                    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
{/* 
                    <link rel='shortcut icon' href={`/extras/vt.svg`} type="image/x-icon" />
                    <link rel='apple-touch-icon' href={`/extras/vt.svg`} type="image/x-icon" /> */}
               </Head>
               <Component {...pageProps} />
          </Fragment>
     )
}

export default MyApp
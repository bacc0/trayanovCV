import Head from 'next/head'
import '../styles/styles.css'

function MyApp({ Component, pageProps }) {
     return (
          <>
               <Head>

                    <title>Veselin Trayanov</title>



                    <meta name="theme-color" content="#3F3D56" />
                    {/* <meta name="theme-color" media="(prefers-color-scheme: light)" content="#a2f5f3"></meta>
                        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#111111"></meta> */}

                    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"

                    />
               </Head>
               <Component {...pageProps} />

          </>
     )
}

export default MyApp
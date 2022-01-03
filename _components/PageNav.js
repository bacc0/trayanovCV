import { motion } from 'framer-motion'
import TitleSVG from './_illustratins/TitleSVG'
import { typeWriter } from './_sections/helpers/TypeWriter'
import Script from 'next/script'

export default function MenuAppBar({ state }) {


     const colibri = (
          <>
               <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 0.9 }}
                    transition={{ delay: 0.4, duration: 1.2 }}
               >

                    <div id='colibri_hype_container'
                         class='HYPE_document'
                         style={{
                              // backgroundColor:'lime',
                              position: 'relative',
                              top: -20,
                              right: 150,
                              margin: 'auto',
                              position: 'relative',
                              width: '81px',
                              height: '68px',
                              overflow: 'hidden'
                         }} />
               </motion.div>
               <Script
                    src='colibri.hyperesources/colibri_hype_generated_script.js?23464'
                    strategy='afterInteractive'
               >
               </Script>
          </>
     )

     return (

          <div className='vertical-center'>

               {colibri}
               <div
                    style={{
                         position: 'relative',
                         top: -95,
                         minWidth: 250,
                    }}
               >
                    <h3
                         style={{
                              position: 'relative',
                              top: 0,
                              fontSize: 16,
                              minWidth: 250,
                              color: state.strongText
                         }}
                    >
                         hello i'm
                    </h3>
                    <h1
                         style={{
                              position: 'relative',
                              top: 27,
                              fontSize: 51,
                              fontWeight: 600,
                              textAlign: 'center',
                              letterSpacing: 2.5,
                              minWidth: 250,
                         }}

                    >
                         veselin
                    </h1>
                    <h3
                         style={{
                              position: 'relative',
                              top: 43,
                              fontSize: 19.5,
                              fontWeight: 400,
                              color: state.strongText,
                              minHeight: 24,
                              minWidth: 250,
                         }}
                    >
                         {typeWriter('front ...end developer')}
                    </h3>
               </div>
          </div>
     )
}

import { motion } from 'framer-motion'
import { typeWriter } from './_sections/helpers/TypeWriter'
import Script from 'next/script'

import { useTheme } from '@mui/material/styles'
import * as React from 'react'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Veselin from './_illustratins/Veselin'


export default function MenuAppBar({ state, min_width_600px }) {

     const theme = useTheme()

     const colibri = (
          <>
               <motion.div
                    initial={{ opacity: 0, scale: 1, x: 32, y: 3 }}
                    animate={{ opacity: 1, scale: 0.8, x: 0, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.25 }}
               >

                    <div id='colibri_hype_container'
                         class='HYPE_document'
                         style={{

                              position: 'relative',
                              top: -40,
                              right: 156,
                              margin: 'auto',
                              position: 'relative',
                              width: '81px',
                              height: '50px',
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

     const style_hello_container = {
          mt: '-58px',
          ml: '-75px',
          minHeight: '20px',
          minWidth: '300px',
          // backgroundColor: 'red',
     }
     const style_hello = {
          color: state.strongText,
          fontWeight: 100,
          fontSize: 20,
          letterSpacing: 1.2,
          // ,backgroundColor:'lime'
     }

     const hello = (
          <Box sx={{ minWidth: '300px' }} >

               <motion.div
                    initial={{ opacity: 0, scale: 1.5, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.25 }}
               >
                    <Typography
                         variant="h5"
                         sx={style_hello}
                    >
                         hello i'm
                    </Typography>

               </motion.div>
          </Box>
     )

     const style_typing_container = {
          mt: 1,
          mt: '6px',
          minHeight: 100,
          minHeight: '30px', 
          // backgroundColor: 'red',
     }
     const style_typing = {
          color: state.strongText,
          fontSize: 22,
          letterSpacing: 1.3,
     }

     const [vis, setVis] = React.useState(false);
     setInterval(() => {
          setVis(true)
     }, 3200);

     const typing = (
          <Box sx={{ minWidth: '300px' }} >
               <Typography
                    variant="h4"
                    sx={style_typing}
               >
                    {vis && (<div>
                         {typeWriter(['...end ', 'front ...end developer'])}
                    </div>)}
               </Typography>
          </Box>
     )

     const card_style_container = { display: 'flex', justifyContent: 'center', minHeight: 205 }

     const card_style = {
          m: 0,
          pt: min_width_600px ? 5.5 : 3.5,
          pb: 0,
          minWidth: 300,
          boxShadow: 0,
          borderLeft: 0,
          backgroundColor: "transparent",
     }
     const card_veselin = { 
          height: '160px',
           mt: '-98px', minWidth: '310px'
          }


     const cardTitle = (
          <div style={card_style_container}>
               <Card sx={card_style}>
                    <Box sx={{ color: state.backgroundColor, textAlign: 'center', fontSize: 19.4, letterSpacing: 2, }}>
                         <Box sx={{ minHeight: '50px' }}>
                              {colibri}
                         </Box>
                         <Box sx={style_hello_container} >
                              {hello}
                         </Box>
                         <Box sx={card_veselin} >
                              <Veselin color={state.strongText} />
                         </Box>
                         <Box sx={style_typing_container}>
                              {typing}
                         </Box>
                    </Box>
               </Card>
          </div>
     )

     const style_root = {
          position: 'relative',
          top: 0,
          minWidth: 300,
          width: '100%',
          height: 205,
     }

     return (
          <div style={style_root}>
               {cardTitle}
          </div>
     )
}

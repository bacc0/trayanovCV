import { motion } from 'framer-motion'
import { typeWriter } from './_sections/helpers/TypeWriter'
import Script from 'next/script'

import * as React from 'react'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Veselin from './_illustratins/Veselin'


export default function MenuAppBar({ state, min_width_600px }) {

     const style_colibri = {
          top: -40,
          right: 156,
          margin: 'auto',
          width: '81px',
          height: '50px',
          overflow: 'hidden',
          position: 'relative',
     }

     const colibri = (
          <motion.div
               initial={{ opacity: 0, scale: 1, x: 32, y: 3 }}
               animate={{ opacity: 1, scale: 0.8, x: 0, y: 0 }}
               transition={{ delay: 0.2, duration: 0.25 }}
          >
               <div id='colibri_hype_container' class='HYPE_document' style={style_colibri} />
               <Script
                    src='colibri.hyperesources/colibri_hype_generated_script.js?23464'
                    strategy='afterInteractive'
               />
          </motion.div>
     )

     const style_hello_container = {
          mt: '-58px',
          ml: '-75px',
          minHeight: '20px',
          minWidth: '300px',
          
     }
     const style_hello = {
          color: state.strongText,
          fontWeight: 100,
          fontSize: 20,
          letterSpacing: 1.2,
     }

     const hello = (
          <Box sx={{ minWidth: '300px' }} >
               <motion.div
                    initial={{ opacity: 0, scale: 1.5, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.25 }}
               >
                    <Typography variant='h5' sx={style_hello} >
                         hello i'm
                    </Typography>
               </motion.div>
          </Box>
     )

     const style_typing_container = {
         
          minHeight: 100,
          minHeight: '30px', 
          minWidth: '300px',
          position: 'absolute',
          top: 128
     }
     const style_typing = {
          color: state.strongText,
          fontSize: 22,
          letterSpacing: 1.3,
     }

     const [vis, setVis] = React.useState(false)

     setInterval(() => { setVis(true) }, 3200);

     const typing = (
          <Typography variant='h4' sx={style_typing}>
               {vis && (<div>
                    {typeWriter([ '... end ', 'front end developer' ])}
               </div>)}
          </Typography>
     )

     const card_title_style = { 
          display: 'flex', 
          minHeight: 205,
          justifyContent: 'center', 
     }

     const card_style_container = {
          m: 0,
          pt: min_width_600px ? 5.5 : 5.5,
          pb: 0,
          minWidth: 300,
          boxShadow: 0,
          borderLeft: 0,
          backgroundColor: 'transparent',
     }
     const card_style = {
          color: state.backgroundColor,
          textAlign: 'center',
          fontSize: 19.4,
          letterSpacing: 2
     }

     const card_veselin = {
          mt: '-98px', 
          height: '160px',
          minWidth: '310px',
          position: 'absolute'
     }
     const style_root = {
          top: 0,
          width: '100%',
          height: 205,
          position: 'relative',
          minWidth: 300,
     }

     const cardTitle = (
          <div style={style_root}>
               <div style={card_title_style}>
                    <Card sx={card_style_container}>
                         <Box sx={card_style}>
                              <div style={{  height: '50px',}}>
                                   {colibri}
                              </div>
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
          </div>
     )



     return cardTitle
}

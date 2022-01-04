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

     const hello = (
          <motion.div
               initial={{ opacity: 0, scale: 1.7 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 2.2, duration: 0.3 }}
          >
               <Typography variant="h5" sx={{ letterSpacing: 1.3, color: state.strongText, fontWeight: 100 }}>
                    hello i'm
               </Typography>
          </motion.div>
     )
     const veselin = (
          <Box sx={{ height: theme.spacing(44), mt: theme.spacing(-7.2), ml: theme.spacing(-0.8) }} >
               <Veselin color={state.bodyColor} />
          </Box>
     )

     const typing = (
          <motion.div
               initial={{ opacity: 0, pathLength: 0 }}
               animate={{ opacity: 1, pathLength: 1 }}
               transition={{ delay: 0.2, duration: 1.5 }}
          >
               <Typography
                    variant="h5"
                    sx={{
                         mt: 1,
                         mt: theme.spacing(-28.7),
                         color: state.strongText,
                         fontWeight: 100,
                         letterSpacing: 1.3,
                    }}
               >
                    {typeWriter('front ...end developer')}
               </Typography>
          </motion.div>
     )
     const cardStyle = {
          m: 0,
          pt: min_width_600px ? 5.5 : 3.5,
          pb: 0,
          width: 300,
          boxShadow: 0,
          borderLeft: 0,
          backgroundColor: "transparent",
     }

     const cardTitle = (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
               <Card sx={cardStyle}>
                    <Box sx={{ color: state.backgroundColor, textAlign: 'center', fontSize: 19.4, letterSpacing: 2 }}>
                         {hello}
                         {veselin}
                         {typing}
                    </Box>
               </Card>
          </div>
     )


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
                              top: -152,
                              right: 122,
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

          <div
               style={{
                    position: 'relative',
                    top: 0,
                    minWidth: 250,
                    height: 205,
               }}
          >
               {cardTitle}
               {colibri}





          </div>
     )
}

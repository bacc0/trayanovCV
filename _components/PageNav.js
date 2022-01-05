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

     const hello = (
            <Box sx={{ minWidth: '300px'}} >
               {colibri}
               <motion.div
                    initial={{ opacity: 0, scale: 1.5, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.25 }}
               >
                    <Typography
                         variant="h5"
                         sx={{
                              letterSpacing: 1.3,
                              color: state.strongText,
                              fontWeight: 100,
                              fontSize: 20,
                              letterSpacing: 1.2,
                              minHeight: 20,
                              ml: '-75px',
                              minWidth: '300px',
                              mt: '-58px',
                              minWidth: 300
                              // ,backgroundColor:'lime'
                         }}
                    >
                         hello i'm
                    </Typography>

               </motion.div>
            </Box>
     )

     const veselin = (
          <Box sx={{ height: theme.spacing(50), mt: '-98px', minWidth: '310px'}} >
               <Veselin color={state.strongText} />
          </Box>
     )

     const [vis, setVis] = React.useState(false);
     setInterval(() => {
          setVis(true)
     }, 3200);

     const typing = (
          <Box sx={{ minWidth: '300px'}} >
               <Typography
                    variant="h4"
                    sx={{
                         mt: 1,
                         mt: '-237px',
                         color: state.strongText,
                         fontSize: 22,
                         letterSpacing: 1.3,
                         minHeight: 50,
                         // fontWeight: 600,
                         // backgroundColor: '#22222222'
                    }}
               >
                    {vis && (<div>
                         {typeWriter(['...end ', 'front ...end developer'])}
                    </div>)}
               </Typography>
          </Box>
     )

     const cardStyle = {
          m: 0,
          pt: min_width_600px ? 5.5 : 3.5,
          pb: min_width_600px ? 5.5 : 3.5,
          pb: 0,
          minWidth: 300,
          boxShadow: 0,
          borderLeft: 0,
          backgroundColor: "transparent",
     }



     const cardTitle = (
          <div style={{ display: 'flex', justifyContent: 'center', height: 205 }}>
               <Card sx={cardStyle}>
                    <Box sx={{ color: state.backgroundColor, textAlign: 'center', fontSize: 19.4, letterSpacing: 2 }}>
                         {hello}
                         {veselin}
                         {typing}
                    </Box>
               </Card>
          </div>
     )



     const styleRoot = {
          position: 'relative',
          top: 0,
          minWidth: 300,
          width: '100%',
          height: 205,
          // backgroundColor: 'beige'

     }


     return (
          <div style={styleRoot}>
               {cardTitle}
          </div>
     )
}

import Experience from './1_Experience'
import Technologies from './2_Technologies'
import AboutMe from './3_AboutMe'
import Footer from './4_Footer'
import Box from '@mui/material/Box'
import { motion } from 'framer-motion'
import * as React from 'react'
import { useSelector } from 'react-redux'


export default function _CombineSections() {


     const min_width_600px = useSelector(state => state.min_width_600px_Reducer.value)
     const colors = useSelector(state => state.appColorsReducer.value)

     const { strongText, thirdLettersColor, separationsColor, footerColor } = colors

     const measurements = {
          pageContainerWidth: 526,
          sectionWidth: 230,
     }

     const p_spacing = (<Box sx={{ height: '11px' }} />)

     const stylesPage = {

          sectionsContainer: {
               // backgroundColor: 'tan',
               width: '100%',
               display: 'flex',
               justifyContent: 'center',
          },
          titleContainer: {
               // backgroundColor: '#44444422',
               width: min_width_600px ? measurements.pageContainerWidth : '80%',
               maxWidth: min_width_600px ? measurements.pageContainerWidth : 380,
               padding: `56px 0 48px`,
          },
          sectionsBody: {
               // backgroundColor: '#44444422',
               width: min_width_600px ? measurements.pageContainerWidth : '100%',
               maxWidth: min_width_600px ? measurements.pageContainerWidth : 300,
               display: min_width_600px ? 'flex' : 'block',
               justifyContent: min_width_600px ? 'space-between' : 'center',
               height: 'auto',
          },
          sections: {
               //  backgroundColor: '#44444411',
               width: min_width_600px ? measurements.sectionWidth : '100%',
          },

          h3_Style: {
               color: strongText,
               letterSpacing: 2,
               fontSize: min_width_600px ? 28 : 40,
               fontWeight: min_width_600px ? 600 : 600
          },
          h4_Style: {
               mt: 1.7,
               color: thirdLettersColor,
               letterSpacing: 1,
               fontWeight: min_width_600px ? 600 : 600,
               fontSize: min_width_600px ? 17 : 25
          },
          h5_Style: {

               mt: 0.6,
               mb: 3.24,
               color: thirdLettersColor,
               letterSpacing: 0.62,
               fontWeight: min_width_600px ? 600 : 600,
               fontSize: min_width_600px ? 12 : 16,
          },
          period_style: {
               fontWeight: 'bold',
               color: strongText,
               fontSize: min_width_600px ? 12 : 16,
          },
          borderBottomStyle: {
               borderBottom: 0.8,
               width: min_width_600px ? measurements.sectionWidth : '100%',
               color: strongText,
          }

     }

     const [h3_scale, set_h3_scale] = React.useState(`scale(0.95)`)

     if (h3_scale === `scale(0.95)`) {
          setInterval(() => {
               set_h3_scale(`scale(1)`)
          }, 6600)
     }


     return (
          <motion.div
               initial={{ opacity: 0., y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2, duration: 0.25, ease: 'easeInOut' }}
          >
               <Box
                    sx={{
                         fontSize: min_width_600px ? 12 : 17,
                         lineHeight: min_width_600px ? 1.7 : 1.9,
                         fontWeight: min_width_600px ? 300 : 300,
                         color: strongText
                    }}
               >

                    <Experience
                         stylesPage={stylesPage}
                         measurements={measurements}
                         p_spacing={p_spacing}
                         h3_scale={h3_scale}
                    />

                    <div style={{ borderTop: `0.3px solid ${separationsColor}` }} />

                    <Technologies
                         stylesPage={stylesPage}
                         measurements={measurements}
                         p_spacing={p_spacing}
                    />
                    <div style={{ borderTop: `0.3px solid ${ separationsColor}` }} />

                    <AboutMe
                         stylesPage={stylesPage}
                         measurements={measurements}
                         p_spacing={p_spacing}
                    />
                    <div style={{ borderTop: `0.3px solid ${ separationsColor}` }} />

                    <Footer
                         stylesPage={stylesPage}
                         measurements={measurements}
                         p_spacing={p_spacing}
                    />
               </Box>
               <div style={{ borderTop: `0.3px solid ${footerColor}` }} />

          </motion.div>
     )
}
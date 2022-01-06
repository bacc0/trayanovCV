import Experience from './1_Experience'
import Technologies from './2_Technologies'
import AboutMe from './3_AboutMe'
import Footer from './4_Footer'
import Kkk from './Kkk'
import Box from '@mui/material/Box'
import { motion } from 'framer-motion'


export default function _CombineSections({
     state, theme, min_width_600px, animationTransition, Y_position }) {

     const measurements = {
          pageContainerWidth: 526,
          sectionWidth: 230,
     }

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
          }
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
                         color: state.strongText
                    }}
               >

                    <Experience
                         state={state}
                         min_width_600px={min_width_600px}
                         stylesPage={stylesPage}
                         measurements={measurements}
                    />

                    <div style={{ borderTop: `0.3px solid ${state.separationsColor}` }} />

                    <Technologies
                         theme={theme}
                         min_width_600px={min_width_600px}
                         state={state}
                         animationTransition={animationTransition}
                         stylesPage={stylesPage}
                         measurements={measurements}
                    />
                    <div style={{ borderTop: `0.3px solid ${state.separationsColor}` }} />

                    <AboutMe
                         state={state}
                         min_width_600px={min_width_600px}
                         animationTransition={animationTransition}
                         stylesPage={stylesPage}
                         measurements={measurements}
                    />
                    <div style={{ borderTop: `0.3px solid ${state.separationsColor}` }} />

                    <Footer
                         state={state}
                         stylesPage={stylesPage}
                    />
               </Box>
          </motion.div>
     )
}
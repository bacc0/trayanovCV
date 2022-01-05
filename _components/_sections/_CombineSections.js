import Experience from './1_Experience'
import Technologies from './2_Technologies'
import AboutMe from './3_AboutMe'
import Footer from './4_Footer'
import Kkk from './Kkk'
import Box from '@mui/material/Box'
import { motion } from 'framer-motion'


export default function _CombineSections({
     state, theme, min_width_600px, animationTransition, Y_position }) {




          


     return (
          <motion.div
               initial={{ opacity: 0., y: 30 }}
               animate={{ opacity: 1,  y: 0 }}
               transition={{ delay: 0.2, duration: 0.25, ease: 'easeInOut' }}
          >
               <Box
                    sx={{
                         fontSize: min_width_600px ? 14 : 17,
                         lineHeight: min_width_600px ? 1.7 : 1.9,
                         fontWeight: min_width_600px ? 100 : 300,
                    }}
               >
                  
                    <Experience
                         state={state}
                         min_width_600px={min_width_600px}
                    />

                    <div style={{ borderTop: `0.3px solid ${state.separationsColor}` }} />

                    <Technologies
                         theme={theme}
                         min_width_600px={min_width_600px}
                         state={state}
                         animationTransition={animationTransition}
                    />
                    <div style={{ borderTop: `0.3px solid ${state.separationsColor}` }} />

                    <AboutMe
                         state={state}
                         min_width_600px={min_width_600px}
                         animationTransition={animationTransition}
                    />
                    <div style={{ borderTop: `0.3px solid ${state.separationsColor}` }} />

                    <Footer
                         state={state}
                         min_width_600px={min_width_600px}
                    />
               </Box>
          </motion.div>
     )
}
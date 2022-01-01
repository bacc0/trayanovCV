import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Experience from './1_Experience'
import Technologies from './2_Technologies'
import AboutMe from './3_AboutMe'
import Footer from './4_Footer'


export default function _CombineSections({
     state, theme, min_width_600px, animationTransition }) {



     // const animation = (is_Ref_Visible, delay, html) => {
     //      return (
     //           <AnimatePresence>
     //                {is_Ref_Visible == 1 && (
     //                     <motion.div exit={{ opacity: 0.3, y: -10 }}>
     //                          <motion.div
     //                               initial={{ scale: 0.99, y: 50, opacity: 0 }}
     //                               animate={{ scale: 1, y: 0, opacity: 1 }}
     //                               transition={{ type: 'spring', ease: 'anticipate', duration: 0.9, delay: delay }}
     //                          >
     //                               {html}
     //                          </motion.div>
     //                     </motion.div>
     //                )}
     //           </AnimatePresence >
     //      )
     // }


     return (
          <>
               <Experience
                    state={state}
                    min_width_600px={min_width_600px}
               />
               <Technologies
                    theme={theme}
                    min_width_600px={min_width_600px}
                    state={state}
                    animationTransition={animationTransition}
               />
               <AboutMe
                    state={state}
                    min_width_600px={min_width_600px}
                    animationTransition={animationTransition}
               />
               <Footer
                    state={state}
                    min_width_600px={min_width_600px}
               />
          </>
     )
}
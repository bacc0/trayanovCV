import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Experience from './1_Experience'
import Technologies from './2_Technologies'
import AboutMe from './3_AboutMe'
import Footer from './4_Footer'


export default function _CombineSections({
     state, theme, min_width_600px, animationTransition, Y_position }) {



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

               <div
                    style={{
                         // position: 'relative',
                         // top: - Number((Y_position * 300)).toFixed(0),
                         // borderTop: `0.3px solid ${state.secLettersColor}55`,
                         // backgroundColor: state.AppBackgroundColor,
                         // '-webkit-backdrop-filter': `blur(10px)`,
                         // ' backdrop-filter': `blur(10px)`,

                    }}
               >
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
               </div>
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
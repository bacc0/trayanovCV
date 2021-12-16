import { Fragment, useState } from 'react'
import { motion } from 'framer-motion'



export default ({ logo_W_H, primeLettersColor, secLettersColor, thirdLogoColor, backgroundColor, strokeWidth, setOnAnimationEnd }) => {



     return (
               <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width={logo_W_H}
                    height={logo_W_H}
                    viewBox="0, 0, 400, 20"

               >
                    





                    <g
                         >
                              <motion.path 
                              initial={{ opacity: 0, pathLength: 0 }}
                              animate={{ opacity: 1, pathLength: 1 }}
                              transition={{ delay: 0, duration: 1, ease: 'easeInOut' }} id="Text-Second"
                              
                              d="M0.5,10.5 L400.5,10.5" fill-opacity="0" stroke="#FF0000" stroke-width="0.5"/>
                         
                    </g>



               </svg>
     )
}

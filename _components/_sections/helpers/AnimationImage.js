import * as React from 'react'
import Image from 'next/image'
import useInView from 'react-cool-inview'
import { motion, AnimatePresence } from 'framer-motion'

export default function AnimationImage({ image, width, height, threshold = 0.5 }) {

     const { observe, inView } = useInView({ threshold: threshold })

     return (
          <div ref={observe} style={{height: height}}>
               <AnimatePresence>
                    {inView && (
                         <motion.div
                              initial={{ opacity: 0, pathLength: 0, y: 0 }}
                              animate={{ opacity: 1, pathLength: 1, y: 0 }}
                              transition={{ delay: 0, duration: 0.5, ease: 'linear' }}
                              exit={{ opacity: 0 }}
                         >
                              <Image
                                   src={image}
                                   alt={image}
                                   width={width}
                                   height={height}
                              />
                         </motion.div>
                    )}
               </AnimatePresence>
          </div>
     )
}

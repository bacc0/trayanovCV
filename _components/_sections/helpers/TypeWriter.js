import { Typewriter } from 'react-simple-typewriter'
import { motion, AnimatePresence } from 'framer-motion'

export const typeWriter = (sentence, typeSpeed = 75) => {
     return (

          <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.6 }}
          >
               <Typewriter
                    words={sentence}
                    loop={1}
                    cursor
                    cursorStyle='_'
                    typeSpeed={140}
                    deleteSpeed={50}
                    delaySpeed={500}

                  
               />
          </motion.div>
     )
}
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

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
                    typeSpeed={90}
                    deleteSpeed={40}
                    delaySpeed={200}

                  
               />
          </motion.div>
     )
}
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { TypewriterProps } from 'react-simple-typewriter/dist/Hooks/useTypewriter';

interface ITypeWriter {
     (sentence: string[], typeSpeed?: number): JSX.Element;
};


const typeWriter: ITypeWriter = (sentence, typeSpeed = 75) => {
     
     
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
                    typeSpeed={typeSpeed}
                    deleteSpeed={40}
                    delaySpeed={200}
               />
          </motion.div>
     )
};

export default typeWriter;
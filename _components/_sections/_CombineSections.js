import { useEffect, useRef, useState } from 'react'

import Experience from './1_Experience'
import Technologies from './2_Technologies'
import AboutMe from './3_AboutMe'

export default function _CombineSections({
     min_width_600px, backgroundColor, hrColorMain, thirdLettersColor, typeWriter, hrColor, animationTransition
}) {

     const [aaa2, setAaa2] = useState(false)
     const [aaa3, setAaa3] = useState(false)

     const Ref_2 = useRef()
     const Ref_2b = useRef()

     const Ref_3 = useRef();

     useEffect(() => {

          window.addEventListener('scroll', scrollHandler);
          return () => window.removeEventListener('scroll', scrollHandler);

     }, []);


     const scrollHandler = () => {


          // if (window.pageYOffset + window.innerHeight - 100 >= Ref_1.current.offsetTop) {
          //      setAaa(true)
          // } else {
          //      setAaa(false)
          // }

          if ( (window.pageYOffset + window.innerHeight - 44 >= Ref_2.current.offsetTop) || 
               (window.pageYOffset + window.innerHeight - 44 >= Ref_2b.current.offsetTop) ) {
               
                    setAaa2(true)
          } else {
               setAaa2(false)
          }

          if (window.pageYOffset + window.innerHeight - 44 >= Ref_3.current.offsetTop) {
               setAaa3(true)
          } else {
               setAaa3(false)
          }
     }

     // const animationHandler = (sign) => (
     //      <motion.div exit={{ opacity: 0, y: -6 }} >
     //           <motion.div
     //                initial={{ scale: 0.9, y: `20vh` }}
     //                animate={{ scale: 1, y: `0vh` }}
     //                transition={{ type: 'spring', ease: 'anticipate', duration: 0.6, delay: 0 }}

     //                style={{
     //                     fontSize: 27,
     //                     padding: '14px 40px',
     //                     backgroundColor: '#FFFFFF88',
     //                     textAlign: 'center',
     //                     borderRadius: 6,
     //                     '-webkit-backdrop-filter': 'blur(10px)',
     //                     'backdrop-filter': 'blur(10px)',
     //                     marginBottom: 20
     //                }}
     //           >
     //                {sign}
     //           </motion.div>
     //      </motion.div>
          
     // )


     return (

          <div >

               <Experience
                    min_width_600px={min_width_600px}
                    backgroundColor={backgroundColor}
                    hrColorMain={hrColorMain}
                    thirdLettersColor={thirdLettersColor}
                    typeWriter={typeWriter}
                    hrColor={hrColor}
                    animationTransition={animationTransition}
               />
        
               <Technologies
                    min_width_600px={min_width_600px}
                    backgroundColor={backgroundColor}
                    hrColorMain={hrColorMain}
                    thirdLettersColor={thirdLettersColor}
                    typeWriter={typeWriter}
                    hrColor={hrColor}
                    animationTransition={animationTransition}

                    Ref_2={Ref_2}
                    Ref_2b={Ref_2b}
                    aaa2={aaa2}
               />

               <div style={{ height: 46 }} />

               <AboutMe
                    min_width_600px={min_width_600px}
                    backgroundColor={backgroundColor}
                    hrColorMain={hrColorMain}
                    thirdLettersColor={thirdLettersColor}
                    typeWriter={typeWriter}
                    hrColor={hrColor}
                    animationTransition={animationTransition}

                    Ref_3={Ref_3}
                    aaa3={aaa3}
               />

               <div style={{ height: min_width_600px ? 62 : 34 }} />
          </div>
     )
}
import { motion } from 'framer-motion'
import TitleSVG from './_illustratins/TitleSVG'
import { typeWriter } from './_sections/helpers/TypeWriter'

export default function MenuAppBar({
     state, logo_W_H, strokeWidth, setOnAnimationEnd, animationTransition }) {


     return (

          <div className='vertical-center'>
               {/* <motion.div
                    initial={{ scale: 1, y: -200, x: 10, opacity: 0 }}
                    animate={{ scale: 1, y: 0, x: 10, opacity: 1 }}
                    transition={{ type: 'spring', duration: 0.9, delay: 0 }}
                    className='title'
               >
                    <TitleSVG
                         state={state}
                         logo_W_H={logo_W_H}
                         strokeWidth={strokeWidth}
                         setOnAnimationEnd={setOnAnimationEnd}
                         animationTransition={animationTransition}
                    />
               </motion.div> */}
               <div
                    style={{
                         position: 'relative',
                         top: -65,
                         minWidth: 250,
                         // backgroundColor: 'pink'
                    }}

               >
                    <h3
                         style={{
                              position: 'relative',
                              top: -13,
                              fontSize: 16,
                              minWidth: 250,
                         // backgroundColor: 'lime'

                         }}
                    >hello i'm </h3>
                    <h1
                         style={{
                              position: 'relative',
                              top: 8,
                              fontSize: 51,
                              fontWeight: 600,
                              textAlign: 'center',
                              letterSpacing: 2.5,
                              minWidth: 250,
                         // backgroundColor: 'beige',
                         // minHeight: 25,

                         }}

                    >
                         veselin
                    </h1>
                    <h3
                         style={{
                              position: 'relative',
                              top: 19,
                              fontSize: 19.5,
                              fontWeight: 400,
                              // textAlign: 'center',
                              // backgroundColor: 'red',
                              minHeight: 24,
                              minWidth: 250,
                         }}
                    >
                         {typeWriter('front ...end developer')}
                    </h3>
               </div>
          </div>

     )
}

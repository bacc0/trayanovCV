import { motion, AnimatePresence } from 'framer-motion'

import { Hidden } from '@mui/material'
import { useState } from 'react'

export default function Technologies({
     min_width_600px, backgroundColor, hrColorMain, animationTransition,
     Ref_2,Ref_2b,
     aaa2,
     // animationHandler

}) {

     const [onAnimationEnd, setOnAnimationEnd] = useState(false)

     return (


          <div className='page-body'>

               <div className='page-body-left '>
                    <div className='container-content-left'>
                         <div className='content-left'>
                             
 <div ref={Ref_2b} >
 <Hidden smUp >

                                  
                                        <AnimatePresence>
                                             {aaa2 == 1 && (
                                                  <motion.div exit={{ opacity: 0, y: -10 }}>
                                                       <motion.div
                                                            initial={{ scale: 1, y: 50, opacity: 0 }}
                                                            animate={{ scale: 1, y: 0, opacity: 1 }}
                                                            transition={{ type: 'spring', ease: 'anticipate', duration: 0.9, delay: 0 }}

                                                            style={{ margin: `24px 0 52px` }}



                                                       >
                                                            <h2 style={{
                                                                 color: backgroundColor, fontSize: 35, letterSpacing: 2.5,
                                                                 transition: `color ${animationTransition} ease`
                                                            }}
                                                            >
                                                                 Tech stack
                                                            </h2>
                                                            <hr style={{ 'background-color': hrColorMain, transition: `background-color ${animationTransition} ease` }} />
                                                       </motion.div>
                                                  </motion.div>
                                             )}
                                        </AnimatePresence >
                                   

                              </Hidden>
                              </div>
                              <AnimatePresence>
                                   {aaa2 && (
                                        <motion.div exit={{ opacity: 0, y: -10 }}>
                                             <motion.div
                                                  initial={{ scale: 1, y: 50, opacity: 0 }}
                                                  animate={{ scale: 1, y: 0, opacity: 1 }}
                                                  transition={{ type: 'spring', ease: 'anticipate', duration: 0.9, delay: 0.4 }}
                                                

                                             >
                                                  <p>ReactJS</p>
                                                  <p>Hook</p>
                                                  <p>NextJS</p>
                                                  <p>Javascript</p>
                                                  <p>Material UI</p>
                                                  <p>CSS</p>
                                                  <p>SASS</p>
                                                  <p>HTML</p>
                                                  <p>Framer Motion </p>
                                                  <p>SVG Animations</p>
                                                  <p>Adobe Illustrator</p>
                                                  <p>Autodesk Graphic (iDraw) </p>
                                                  <p>GIMP</p>
                                                  <p>Adobe Photoshop</p>
                                             </motion.div>
                                        </motion.div>
                                   )}
                              </AnimatePresence >
                         </div>
                    </div>
               </div>

               <div className='page-body-right' >



                    <div className='container-content-right'>

                         <div
                              className='content-right'
                              style={{
                                   marginTop: min_width_600px ? 0 : -45,
                                   marginBottom: min_width_600px ? 0 : -8
                              }}
                         >
                              <div ref={Ref_2} >
                              <Hidden smDown >
                                   
                                        <AnimatePresence>
                                             {aaa2 == 1 && (
                                                  <motion.div exit={{ opacity: 0, y: -10 }}>
                                                       <motion.div
                                                            initial={{ scale: 1, y: 50, opacity: 0 }}
                                                            animate={{ scale: 1, y: 0, opacity: 1 }}
                                                            transition={{ type: 'spring', ease: 'anticipate', duration: 0.9, delay: 0 }}

                                                            style={{ margin: `20px 0 38px` }}
                                                       >
                                                            <h2 style={{
                                                                 color: backgroundColor, fontSize: 35, letterSpacing: 2.5,
                                                                 transition: `color ${animationTransition} ease`
                                                            }}
                                                            >
                                                                 Tech stack
                                                            </h2>
                                                            <hr style={{
                                                                 'background-color': hrColorMain,
                                                                 transition: `background-color ${animationTransition} ease`
                                                            }}
                                                            />
                                                       </motion.div>
                                                  </motion.div>
                                             )}
                                        </AnimatePresence >
                                  
                              </Hidden>

 </div>
                              <AnimatePresence>
                                   {aaa2 && (
                                        <motion.div exit={{ opacity: 0, y: -10 }}>
                                             <motion.div
                                                  initial={{ scale: 1, y: 50, opacity: 0 }}
                                                  animate={{ scale: 1, y: 0, opacity: 1 }}
                                                  transition={{ type: 'spring', ease: 'anticipate', duration: 0.9, delay: 0.2 }}
                                             >
                                                  <p>Typescript</p>
                                                  <p>NodeJS</p>
                                                  <p>Express</p>
                                                  <p>Git Github Bitbucket</p>
                                                  <p>Sourcetree,</p>
                                                  <p>Jira</p>
                                                  <p>Jenkins</p>
                                                  <p>Storybook</p>
                                             </motion.div>
                                        </motion.div>
                                   )}
                              </AnimatePresence >
                         </div>
                    </div>
               </div>
          </div>
     )
}


// import { motion, AnimatePresence } from 'framer-motion'

// import { Hidden } from '@mui/material'
// import { useState } from 'react'

// export default function Technologies({
//      min_width_600px, backgroundColor, hrColorMain, animationTransition,
//      Ref_2, Ref_2b,
//      aaa2,
//      // animationHandler

// }) {

//      const [onAnimationEnd, setOnAnimationEnd] = useState(false)

//      return (


//           <div className='page-body'>

//                <div className='page-body-left '>
//                     <div className='container-content-left'>
//                          <div className='content-left'>
//                               {/* <Hidden smUp > */}



//                                    <div ref={Ref_2} >
//                                         <AnimatePresence>
//                                              {aaa2 == 1 && (
//                                                   <motion.div exit={{ opacity: 0, y: -10 }}>
//                                                        <motion.div
//                                                             initial={{ scale: 1, y: 50, opacity: 0 }}
//                                                             animate={{ scale: 1, y: 0, opacity: 1 }}
//                                                             transition={{ type: 'spring', ease: 'anticipate', duration: 0.9, delay: 0 }}

// style={{ marginTop: 37}}



//                                                        >
//                                                             <h2 style={{
//                                                                  color: backgroundColor, fontSize: 35, letterSpacing: 2.5,
//                                                                  transition: `color ${animationTransition} ease`
//                                                             }}
//                                                             >
//                                                                  Tech stack
//                                                             </h2>
//                                                             <hr style={{ 'background-color': hrColorMain, transition: `background-color ${animationTransition} ease` }} />
//                                                        </motion.div>
//                                                   </motion.div>
//                                              )}
//                                         </AnimatePresence >
//                                    </div>

//                               {/* </Hidden> */}
//                               <AnimatePresence>
//                                    {aaa2 && (
//                                         <motion.div exit={{ opacity: 0, y: -10 }}>
//                                              <motion.div
//                                                   initial={{ scale: 1, y: 50, opacity: 0 }}
//                                                   animate={{ scale: 1, y: 0, opacity: 1 }}
//                                                   transition={{ type: 'spring', ease: 'anticipate', duration: 0.9, delay: 0.2 }}

//                                                   style={{ marginTop: 37}}

//                                              >
//                                                   <p>ReactJS</p>
//                                                   <p>Hook</p>
//                                                   <p>NextJS</p>
//                                                   <p>Javascript</p>
//                                                   <p>Material UI</p>
//                                                   <p>CSS</p>
//                                                   <p>SASS</p>
//                                                   <p>HTML</p>
//                                                   <p>Framer Motion </p>
//                                                   <p>SVG Animations</p>
                                                
//                                              </motion.div>
//                                         </motion.div>
//                                    )}
//                               </AnimatePresence >
//                          </div>
//                     </div>
//                </div>

//                <div className='page-body-right' >



//                     <div className='container-content-right'>

//                          <div
//                               className='content-right'
//                               style={{
//                                    marginTop: min_width_600px ? 0 : -45,
//                                    marginBottom: min_width_600px ? 0 : -8
//                               }}
//                          >
//                                    <div ref={Ref_2b} >
//                               <Hidden smDown >
//                                         <AnimatePresence>
//                                              {aaa2 == 1 && (
//                                                   <motion.div exit={{ opacity: 0, y: -10 }}>
//                                                        <motion.div
//                                                             initial={{ scale: 1, y: 50, opacity: 0 }}
//                                                             animate={{ scale: 1, y: 0, opacity: 1 }}
//                                                             transition={{ type: 'spring', ease: 'anticipate', duration: 0.9, delay: 0 }}
//                                                        >
//                                                             <h2 style={{
//                                                                  color: backgroundColor, fontSize: 35, letterSpacing: 2.5,
//                                                                  transition: `color ${animationTransition} ease`
//                                                             }}
//                                                             >
//                                                                  Tech stack
//                                                             </h2>
//                                                             <hr style={{
//                                                                  'background-color': hrColorMain,
//                                                                  transition: `background-color ${animationTransition} ease`
//                                                             }}
//                                                             />
//                                                        </motion.div>
//                                                   </motion.div>
//                                              )}
//                                         </AnimatePresence >
//                               </Hidden>
//                                    </div>


//                               <AnimatePresence>
//                                    {aaa2 && (
//                                         <motion.div exit={{ opacity: 0, y: -10 }}>
//                                              <motion.div
//                                                   initial={{ scale: 1, y: 50, opacity: 0 }}
//                                                   animate={{ scale: 1, y: 0, opacity: 1 }}
//                                                   transition={{ type: 'spring', ease: 'anticipate', duration: 0.9, delay: 0.4 }}
                                                  
// style={{ marginTop: 40}}
//                                              >
//                                                     <p>Adobe Illustrator</p>
//                                                   <p>Autodesk Graphic (iDraw) </p>
//                                                   <p>GIMP</p>
//                                                   <p>Adobe Photoshop</p>
//                                                   <p>Typescript</p>
//                                                   <p>NodeJS</p>
//                                                   <p>Express</p>
//                                                   <p>Git Github Bitbucket</p>
//                                                   <p>Sourcetree,</p>
//                                                   <p>Jira</p>
//                                                   <p>Jenkins</p>
//                                                   <p>Storybook</p>
//                                              </motion.div>
//                                         </motion.div>
//                                    )}
//                               </AnimatePresence >
//                          </div>
//                     </div>
//                </div>
//           </div>
//      )
// }
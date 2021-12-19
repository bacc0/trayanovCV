import { motion, AnimatePresence } from 'framer-motion'

import { Hidden } from '@mui/material'
import { useState } from 'react'

export default function Technologies({
     min_width_600px, backgroundColor, hrColorMain, animationTransition,
     Ref_2,Ref_2b,
     isRef_2_Visible,
     animation
}) {

     

     return (
          <div className='page-body'>
               <div className='page-body-left '>
                    <div className='container-content-left'>
                         <div className='content-left'>
                              <div ref={Ref_2b} >

                                   <Hidden smUp >
                                        {    animation( isRef_2_Visible, 0, 
                                                  <div style={{ margin: `24px 0 52px` }}>
                                                       <h2 style={{
                                                            color: backgroundColor, fontSize: 35, letterSpacing: 2.5,
                                                            transition: `color ${animationTransition} ease`
                                                       }}
                                                       >
                                                            Tech stack
                                                       </h2>
                                                       <hr 
                                                       style={{ 'background-color': hrColorMain, transition: `background-color ${animationTransition} ease` }} 
                                                       />
                                                  </div>
                                             )
                                        }
                                   </Hidden>
                              </div>

                              {   animation( isRef_2_Visible, 0.1, <p>ReactJS</p> ) }
                              {   animation( isRef_2_Visible, 0.14, <p>Hook</p> ) }
                              {   animation( isRef_2_Visible, 0.18, <p>NextJS</p> ) }
                              {   animation( isRef_2_Visible, 0.22, <p>Javascript</p> ) }
                              {   animation( isRef_2_Visible, 0.26, <p>Material</p> ) }
                              {   animation( isRef_2_Visible, 0.3, <p>CSS</p> ) }
                              {   animation( isRef_2_Visible, 0.34, <p>SASS</p> ) }
                              {   animation( isRef_2_Visible, 0.38, <p>HTML</p> ) }
                              {   animation( isRef_2_Visible, 0.42, <p>Framer Motion</p> ) }
                              {   animation( isRef_2_Visible, 0.46, <p>SVG Animations</p> ) }
                              {   animation( isRef_2_Visible, 0.5, <p>Adobe Illustrator</p> ) }
                              {   animation( isRef_2_Visible, 0.54, <p>Autodesk Graphic</p> ) }
                              {   animation( isRef_2_Visible, 0.58, <p>GIMP</p> ) }
                              {   animation( isRef_2_Visible, 0.62, <p>Adobe Photoshop</p> ) }
                            
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

                                   {    animation( isRef_2_Visible, 0, 
                                             <div style={{ margin: `20px 0 38px` }}>
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
                                             </div>
                                        )
                                   }
                                   
                              </Hidden>
                              </div>

                              {   animation( isRef_2_Visible, min_width_600px ? 0.22 : 0.66, <p>Typescript</p> ) }
                              {   animation( isRef_2_Visible, min_width_600px ? 0.26 : 0.7, <p>NodeJS</p> ) }
                              {   animation( isRef_2_Visible, min_width_600px ? 0.3  : 0.74, <p>Express</p> ) }
                              {   animation( isRef_2_Visible, min_width_600px ? 0.34 : 0.78,<p>Git Github Bitbucket</p> ) }
                              {   animation( isRef_2_Visible, min_width_600px ? 0.38  : 0.82  , <p>Sourcetree</p> ) }
                              {   animation( isRef_2_Visible, min_width_600px ? 0.42  : 0.84, <p>Jira</p> ) }
                              {   animation( isRef_2_Visible, min_width_600px ? 0.46  : 0.88, <p>Jenkins</p> ) }
                              {   animation( isRef_2_Visible, min_width_600px ? 0.5   : 0.92, <p>Storybook</p> ) }

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
//      isRef_2_Visible,
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
//                                              {isRef_2_Visible == 1 && (
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
//                                    {isRef_2_Visible && (
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
//                                              {isRef_2_Visible == 1 && (
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
//                                    {isRef_2_Visible && (
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
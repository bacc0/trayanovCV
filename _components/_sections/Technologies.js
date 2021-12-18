import { motion } from 'framer-motion'

import { Hidden } from '@mui/material'


export default function Technologies({
     min_width_600px, backgroundColor, hrColorMain, animationTransition
}) {

     return (


          <div className='page-body'>

               <div className='page-body-left '>
                    <div className='container-content-left'>
                         <div className='content-left'>
                              <Hidden smUp >
                                   <motion.div
                                        initial={{ scale: 1, x: 100, opacity: 0 }}
                                        animate={{ scale: 1, x: 0, opacity: 1 }}
                                        transition={{ type: 'spring', ease: 'anticipate', duration: 0.9, delay: 0 }}
                                        style={{ margin: `18px 0 50px` }}

                                   >
                                        <h2 style={{
                                             color: backgroundColor, fontSize: 35, letterSpacing:2.5 ,
                                             transition: `color ${animationTransition} ease`
                                        }}
                                        >
                                             Tech stack
                                        </h2>
                                        <hr style={{ 'background-color': hrColorMain, transition: `background-color ${animationTransition} ease` }} />
                                   </motion.div>
                              </Hidden>
  <motion.div
                                        initial={{ scale: 1, x: -100, opacity: 0 }}
                                        animate={{ scale: 1, x: 0, opacity: 1 }}
                                        transition={{ type: 'spring', ease: 'anticipate', duration: 0.9, delay: 0 }}
                                      

                                   >
                              <p>ReactJS,</p>
                              <p>Hooks,</p>
                              <p>NextJS,</p>
                              <p>Javascript,</p>
                              <p>Material UI,</p>
                              <p>CSS,</p>
                              <p>SASS,</p>
                              <p>HTML</p>
                              <p>Framer Motion, </p>
                              <p>SVG Animations,</p>
                              <p>Adobe Illustrator, </p>
                              <p>Autodesk Graphic (iDraw), </p>
                              <p>GIMP,</p>
                              <p>Adobe Photoshop,</p>
                               </motion.div>
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
                              <Hidden smDown >
                                   <motion.div
                                        initial={{ scale: 1, x: 100, opacity: 0 }}
                                        animate={{ scale: 1, x: 0, opacity: 1 }}
                                        transition={{ type: 'spring', ease: 'anticipate', duration: 0.9, delay: 0 }}
                                        style={{ margin: `18px 0  36px` }}

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
                              </Hidden>
  <motion.div
                                        initial={{ scale: 1, x: 100, opacity: 0 }}
                                        animate={{ scale: 1, x: 0, opacity: 1 }}
                                        transition={{ type: 'spring', ease: 'anticipate', duration: 0.9, delay: 0 }}
                              

                                   >
                              <p>Typescript,</p>
                              <p>NodeJS,</p>
                              <p>Express,</p>
                              <p>Git, Github, Bitbucket,</p>
                              <p>Sourcetree,</p>
                              <p>Jira,</p>
                              <p>Jenkins,</p>
                              <p>Storybook</p>
                               </motion.div>
                         </div>
                    </div>
               </div>
          </div>
     )
}
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, Fragment } from 'react'

export default function Experience({
     min_width_600px, backgroundColor, hrColorMain, thirdLettersColor, typeWriter, hrColor, animationTransition,
     Ref_0, isRef_0_Visible,
     Ref_05, isRef_05_Visible,
     Ref_1, isRef_1_Visible,
     animation,

}) {

     const [onAnimationEnd, setOnAnimationEnd] = useState(true)

     const handleAnimationEnd = () => {
          setTimeout(() => {
               setOnAnimationEnd(false)
          }, 6000);
     }

     return (

          <div className='page-body'>
               <div className='page-body-left'>

                    <div className='container-content-left' >
                         <div
                              className='content-left'
                              // style={{ marginTop: min_width_600px ? 0 : 16 }}
                              style={{ margin: `5px 0 ${min_width_600px ? 36 : -7}px` }}
                         >
                              <motion.div
                                   initial={{ scale: 1, x: -100, opacity: 0 }}
                                   animate={{ scale: 1, x: 0, opacity: 1 }}
                                   transition={{ type: 'spring', ease: 'anticipate', duration: 0.9, delay: 0 }}

                              >
                                   <h2 style={{
                                        color: backgroundColor, fontSize: 35, letterSpacing: 2.5,
                                        transition: `color ${animationTransition} ease`
                                   }}
                                   >
                                        Experience
                                   </h2>
                                   <hr style={{ 'background-color': hrColorMain, transition: `background-color ${animationTransition} ease` }} />
                              </motion.div>
                         </div>
                    </div>

                    <div className='container-content-left' ref={Ref_0} >
                         <div
                              className='content-left'
                              style={{ marginTop: min_width_600px ? 0 : 16 }}
                         >
                              
                              {animation(isRef_0_Visible, 0.1,
                                   <h3 style={{
                                        color: thirdLettersColor, minHeight: 30, letterSpacing: 1.3,
                                        transition: `color ${animationTransition} ease`
                                   }}
                                   >
                                        {onAnimationEnd
                                             ?    typeWriter('React Developer - Groundbits Ltd')
                                             :   'React Developer - Groundbits Ltd'
                                        }
                                   </h3>
                              )}

                              {animation(isRef_0_Visible, 0.14,
                                   <hr
                                        style={{
                                             'background-color': hrColor,
                                             transition: `background-color ${animationTransition} ease`
                                        }}
                                   />
                              )}
                              {animation(isRef_0_Visible, 0.18,
                                   <strong>Dec 2021 – Present </strong>
                              )}
                              {animation(isRef_0_Visible, 0.22,
                                   <p>Developing a Website Builder.</p>
                              )}
                              {animation(isRef_0_Visible, 0.26,
                                   <p>
                                        Using
                                        <span className='font-weight-300'> REACT </span>
                                        with
                                        <span className='font-weight-300'> NEXTJS</span>
                                        , for styling
                                        <span className='font-weight-300'> MATERIAL UI (MUI)</span>
                                        ,
                                        <span className='font-weight-300'> STRAPI </span>
                                        for contains management system (CMS), for animation
                                        <span className='font-weight-300'> FRAMER MOTION </span>
                                        and directly
                                        <span className='font-weight-300'> SVG’s </span>
                                        manipulation.
                                   </p>
                              )}
                              <br />
                              {animation(isRef_0_Visible, 0.3,
                                   <p>
                                        <strong>Ricard Rosson </strong>
                                        <div>ricard@iacos.net</div>
                                   </p>
                              )}
                         </div>
                    </div>
               </div>



               <div
                    className='page-body-right'>


                    <div
                         // initial={{ scale: 1, x: 100, opacity: 0 }}
                         // animate={{ scale: 1, x: 0, opacity: 1 }}
                         // transition={{ type: 'spring', ease: 'anticipate', duration: 0.9, delay: 0 }}

                         className='container-content-right'
                    >

                         <div className='content-right' ref={Ref_05}>

                              {animation(isRef_05_Visible, 0,
                                   <div >
                                        <h3
                                             style={{
                                                  color: thirdLettersColor, minHeight: 30, letterSpacing: 1.3,
                                                  transition: `color ${animationTransition} ease`
                                             }}
                                        >
                                             {onAnimationEnd
                                                  ? typeWriter(' React Developer - Amdocs via Appgr8')
                                                  : ' React Developer - Amdocs via Appgr8'
                                             }
                                        </h3>
                                        <hr
                                             style={{
                                                  'background-color': hrColor,
                                                  transition: `background-color ${animationTransition} ease`
                                             }}
                                        />
                                   </div>,

                              )}

                              {animation(isRef_05_Visible, 0.1, <strong> July 2021 - Nov 2021 </strong>)}

                              {animation(isRef_05_Visible, 0.14,
                                   <p>Building a new components for the application.</p>
                              )}
                              {animation(isRef_05_Visible, 0.18,
                                   <p>
                                        Using
                                        <span className='font-weight-300'> MATERIAL UI</span>
                                        ,
                                        <span className='font-weight-300'> TYPESCRIPT</span>
                                        ,
                                        <span className='font-weight-300'> SOURCETREE</span>
                                        ,
                                        <span className='font-weight-300'> BITBUKET </span>
                                        ect.
                                   </p>
                              )}
                              {animation(isRef_05_Visible, 0.22,
                                   <p>
                                        For the software development the company used
                                        <span className='font-weight-300'> AGILE </span>
                                        with the
                                        <span className='font-weight-300'> SCRUM </span>
                                        framework
                                        and
                                        <span className='font-weight-300'> JIRA</span>
                                        .
                                   </p>
                              )}





                         </div>
                    </div>






                    <div className='container-content-right'>
                         <div className='content-right' ref={Ref_1}>

                              {animation(isRef_1_Visible, 0,
                                   <div >
                                        <h3 style={{
                                             color: thirdLettersColor, minHeight: 30, letterSpacing: 1.3,
                                             transition: `color ${animationTransition} ease`
                                        }}
                                        >
                                             {onAnimationEnd
                                                  ? typeWriter('React Developer - Groundbits Ltd')
                                                  : 'React Developer - Groundbits Ltd'
                                             }
                                        </h3>

                                        <hr style={{
                                             'background-color': hrColor,
                                             transition: `background-color ${animationTransition} ease`
                                        }}
                                        />
                                   </div>
                              )}
                              {handleAnimationEnd()}



                              {animation(isRef_1_Visible, 0.1, <strong>Jan 2020 – Jan 2021 </strong>)}
                              {animation(isRef_1_Visible, 0.14,
                                   <p>
                                        Creating a web builder application.
                                   </p>
                              )}
                              {animation(isRef_1_Visible, 0.18,
                                   <p>
                                        Using
                                        <span className='font-weight-300'> REACT </span>
                                        with
                                        <span className='font-weight-300'> NEXTJS</span>
                                        , for styling
                                        <span className='font-weight-300'> MATERIAL UI (MUI)</span>
                                        ,
                                        <span className='font-weight-300'> STRAPI </span>
                                        for contains management system (CMS), for animation
                                        <span className='font-weight-300'> FRAMER MOTION </span>
                                        and directly
                                        <span className='font-weight-300'> SVG’s </span>
                                        manipulation.
                                   </p>
                              )}
                         </div>
                    </div>
               </div>
          </div >
     )
}
import { useState, useEffect } from 'react'
import Image_experience from '../_illustratins/Image_experience'
import { Typewriter } from 'react-simple-typewriter'
import { motion, AnimatePresence } from 'framer-motion'


export default function Experience({
     state, min_width_600px, onAnimationEnd, Ref_0, isRef_0_Visible,
     Ref_05, isRef_05_Visible, Ref_1, isRef_1_Visible, animation }) {


     const {
          strongText, animationTransition, hrColorMain,
          thirdLogoColor, thirdLettersColor, hrColor, backgroundColor } = state

     const [onAnimationStart, setOnAnimationStart] = useState(true)

     const paddingTop = min_width_600px ? 63 : 62
     const paddingBottom = min_width_600px ? 65 : 18

     useEffect(() => {
          setTimeout(() => {
               setOnAnimationStart(false)
          }, 6000)
     }, [])
     const typeWriter = (sentence, typeSpeed = 75) => {
          return (
               onAnimationEnd && (
                    <motion.div
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         transition={{ duration: 0.6 }}
                    >
                         <Typewriter
                              words={[sentence]}
                              loop={1}
                              typeSpeed={typeSpeed}
                              deleteSpeed={50}
                              delaySpeed={2000}
                         />
                    </motion.div>
               )
          )
     }


     const styleContainer = {
         
          paddingTop: paddingTop,
          paddingBottom: paddingBottom,
          minHeight: min_width_600px ? 300 : 300,

          // backgroundColor: '#7026A5',
          // background: `radial-gradient(at 50% top, #4A0A6A, #4A0A6A, #040F1B, #040F1B, #040F1B)`,

          // backgroundColor: '#040F1B',
          // 'background-image':`url('backAppGradient.svg')`,
          // // backgroundPosition: `center -128px, top`,
          // backgroundPosition: `center 0%`,
          // backgroundSize: 536,
          // 'background-repeat': 'no-repeat',

     }
     const style_h2_ = {
          color: backgroundColor,
          transition: `color ${animationTransition} ease`,
     }
     const style_h3_ = {
          minHeight: min_width_600px ? 40 : 56,
          // backgroundColor: 'lime',
          fontSize: 19.5,
          color: thirdLettersColor,
          transition: `color ${animationTransition} ease`,
     }

     const style_hr_I = {
          'background-color': hrColorMain,
          transition: `background-color ${animationTransition} ease`
     }
     const style_hr_II = {
          'background-color': hrColor,
          transition: `background-color ${animationTransition} ease`,
          marginBottom: min_width_600px ? 6 : 20
     }

     const styleContact = {
          color: strongText,
          marginTop: 28
     }


     return (
          <div className='page-body' style={styleContainer}>
               <div className='page-body-left'>
                    <div className='container-content-left' >
                         <div
                              ref={Ref_0}
                              className='content-left'
                         // style={{ margin: `0 0 ${min_width_600px ? 0 : -7}px` }}
                         >
                              {animation(isRef_0_Visible, 0.1,
                                   <>
                                        <h2 style={style_h2_}>
                                             Experience
                                        </h2>
                                        <hr style={style_hr_I} />
                                   </>
                              )}
                         </div>
                    </div>

                    <div className='container-content-left'  >
                         <div
                              className='content-left'
                              style={{ marginTop: min_width_600px ? 20 : -2 }}
                         >
                              {animation(isRef_0_Visible, 0.14,
                                   <h3 style={style_h3_}>
                                        {onAnimationStart
                                             ? typeWriter('React Developer')
                                             : 'React Developer'
                                        }
                                        <div style={{ fontSize: min_width_600px ? 14 : 16 }}>
                                             {onAnimationStart
                                                  ? typeWriter('Groundbits Ltd', 165)
                                                  : 'Groundbits Ltd'
                                             }
                                        </div>
                                   </h3>
                              )}

                              {animation(isRef_0_Visible, 0.18,
                                   <hr style={style_hr_II} />
                              )}
                              {animation(isRef_0_Visible, 0.22,
                                   <strong style={{ color: strongText }}>Dec 2021 – Present </strong>
                              )}
                              {animation(isRef_0_Visible, 0.26,
                                   <p>Developing a Website Builder.</p>
                              )}
                              {animation(isRef_0_Visible, 0.30,
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

                              {animation(isRef_0_Visible, 0.34,
                                   <p style={styleContact}>
                                        <strong>Ricard Rosson </strong>
                                        <div>ricard@iacos.net</div>
                                   </p>
                              )}

                              {animation(isRef_0_Visible, 0.38,
                                   <div
                                        style={{
                                             marginTop: min_width_600px ? 10 : 34,
                                             marginBottom: min_width_600px ? 0 : 2
                                        }}
                                   >
                                        <Image_experience
                                             min_width_600px={min_width_600px}
                                             color={thirdLogoColor}
                                        />
                                   </div>
                              )}
                         </div>
                    </div>
               </div>
               <div className='page-body-right'>
                    <div className='container-content-right'>
                         <div className='content-right' ref={Ref_05}>
                              {animation(isRef_05_Visible, 0.1,
                                   <>
                                        <h3
                                             style={{ ...style_h3_, ...{ marginTop: min_width_600px ? 0 : 0 } }}
                                        >
                                             {onAnimationStart
                                                  ? typeWriter('React Developer')
                                                  : 'React Developer'
                                             }
                                             <div style={{ fontSize: min_width_600px ? 14 : 16 }}>
                                                  {onAnimationStart
                                                       ? typeWriter('Amdocs via Appgr8', 165)
                                                       : 'Amdocs via Appgr8'
                                                  }
                                             </div>
                                        </h3>
                                        <hr style={style_hr_II} />
                                   </>
                              )}

                              {animation(isRef_05_Visible, 0.14,
                                   <strong style={{ color: strongText }}>
                                        July 2021 - Nov 2021
                                   </strong>
                              )}

                              {animation(isRef_05_Visible, 0.18,
                                   <p>Building a new application for the mobile network operator.</p>
                              )}
                              {animation(isRef_05_Visible, 0.22,
                                   <p>
                                        Using
                                        <span className='font-weight-300'> REACT</span>
                                        ,
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
                              {animation(isRef_05_Visible, 0.26,
                                   <p>
                                        For the software development the company used
                                        <span className='font-weight-300'> AGILE </span>
                                        with the
                                        <span className='font-weight-300'> SCRUM </span>
                                        framework and
                                        <span className='font-weight-300'> JIRA</span>
                                        .
                                   </p>
                              )}
                         </div>
                    </div>

                    <div className='container-content-right'>
                         <div className='content-right' ref={Ref_1}>
                              {animation(isRef_1_Visible, 0,
                                   <>
                                        <h3 style={{ ...style_h3_, ...{ marginTop: min_width_600px ? 26 : 0 } }}>
                                             {onAnimationStart
                                                  ? typeWriter('React Developer ')
                                                  : 'React Developer'
                                             }
                                             <div style={{ fontSize: min_width_600px ? 14 : 16 }}>
                                                  {onAnimationStart
                                                       ? typeWriter('Groundbits Ltd', 165)
                                                       : 'Groundbits Ltd'
                                                  }
                                             </div>
                                        </h3>

                                        <hr style={style_hr_II} />
                                   </>
                              )}

                              {animation(isRef_1_Visible, 0.1,
                                   <strong style={{ color: strongText, marginTop: 0 }}>
                                        Jan 2020 – Jan 2021
                                   </strong>
                              )}
                              {animation(isRef_1_Visible, 0.14,
                                   <p>Creating a web builder application.</p>
                              )}
                              {animation(isRef_1_Visible, 0.18,
                                   <p
                                        style={{
                                             marginBottom: min_width_600px ? '0em' : '0em',
                                        }}
                                   >
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



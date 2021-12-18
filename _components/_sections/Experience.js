import { motion } from 'framer-motion'


export default function Experience({
     min_width_600px, backgroundColor, hrColorMain, thirdLettersColor, typeWriter, hrColor, animationTransition
}) {

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

                    <motion.div
                         initial={{ scale: 1, y: 100, opacity: 0 }}
                         animate={{ scale: 1, y: 0, opacity: 1 }}
                         transition={{ type: 'spring', ease: 'anticipate', duration: 0.9, delay: 0 }} className='container-content-left'>
                         <div
                              className='content-left'
                              style={{ marginTop: min_width_600px ? 0 : 16 }}
                         >


                              <h3 style={{
                                   color: thirdLettersColor, minHeight: 30, letterSpacing:1.3,
                                   transition: `color ${animationTransition} ease`
                              }}
                              >
                                   {typeWriter('React Developer - Groundbits Ltd')}
                              </h3>
                              <hr style={{ 
                                   'background-color': hrColor, 
                              transition: `background-color ${animationTransition} ease` 
                              }} />
                              <p>Attention to Detail.</p>
                              <strong>Dec 2021 – Present </strong>
                              <p>
                                   Developing a Website Builder.
                              </p>
                              <p>
                                   Using REACT with NEXTJS, for styling MATERIAL UI (MUI), STRAPI for contains management system (CMS), for animation FRAMER MOTION and directly SVG’s manipulation.
                              </p>
                              <br />
                              <p>
                                   <strong>Ricard Rosson </strong>
                                   <div>ricard@iacos.net</div>
                              </p>
                         </div>
                    </motion.div>
               </div>



               <motion.div
                    initial={{ scale: 1, x: 100, opacity: 0 }}
                    animate={{ scale: 1, x: 0, opacity: 1 }}
                    transition={{ type: 'spring', ease: 'anticipate', duration: 0.9, delay: 0 }} className='page-body-right'>

                    <div className='container-content-right'>
                         <div className='content-right'>
                              <h3 style={{
                                   color: thirdLettersColor, minHeight: 30, letterSpacing: 1.3,
                                   transition: `color ${animationTransition} ease`
                              }}
                              >
                                   {typeWriter(' React Developer - Amdocs via Appgr8')}

                              </h3>
                              <hr style={{ 
                                   'background-color': hrColor, 
                              transition: `background-color ${animationTransition} ease`
                               }} 
                               />
                              <p>Attention to Detail.</p>
                              <strong>July 2021 - Nov 2021 </strong>
                              <p>Building a new components for the application.</p>
                              <p>Using  MATERIAL UI, TYPESCRIPT, SOURCETREE, BITBUKET ect.</p>
                              <p>
                                   For the software development the company used AGILE with the SCRUM framework
                                   and JIRA.
                              </p>
                         </div>
                    </div>
                    <div className='container-content-right'>
                         <div className='content-right'>
                              <h3 style={{
                                   color: thirdLettersColor, minHeight: 30, letterSpacing: 1.3,
                                   transition: `color ${animationTransition} ease`
                              }}
                              >
                                   {typeWriter(' React Developer - Groundbits Ltd')}
                              </h3>
                              <hr style={{ 
                                   'background-color': hrColor, 
                                   transition: `background-color ${animationTransition} ease`
                                    }} 
                                    />
                              <p>Attention to Detail.</p>
                              <strong>Jan 2020 – Jan 2021 </strong>
                              <p>
                                   <p>
                                        Creating a web builder application.
                                   </p>
                                   <p>
                                        Using REACT with NEXTJS, for styling MATERIAL UI (MUI), STRAPI for contains management system (CMS), for animation FRAMER MOTION and directly SVG’s manipulation.
                                   </p>
                              </p>
                         </div>
                    </div>
               </motion.div>
          </div>
     )
}
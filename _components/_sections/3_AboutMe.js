import { motion, AnimatePresence } from 'framer-motion'



export default function AboutMe({
     min_width_600px, backgroundColor, hrColorMain, thirdLettersColor, hrColor, animationTransition,
     Ref_3,
     // animationHandler, 
     aaa3
}) {

     return (
          <div>
               <div className='page-body'>
                    <div className='page-body-left'>

                         <div className='container-content-left' >
                              <div
                                   className='content-left'
                                   // style={{ marginTop: min_width_600px ? 0 : 16 }}
                                   style={{ margin: `${min_width_600px ? 0 : -20}px 0 ${min_width_600px ? 36 : -7}px` }}
                              >

                                   <div ref={Ref_3} >
                                        <AnimatePresence>
                                             {aaa3 == 1 && (
                                                  <motion.div exit={{ opacity: 0, y: -10 }} >
                                                       <motion.div
                                                            initial={{ scale: 1, y: 50, opacity: 0 }}
                                                            animate={{ scale: 1, y: 0, opacity: 1 }}
                                                            transition={{ type: 'spring', ease: 'anticipate', duration: 0.9, delay: 0 }}

                                                            style={{ marginTop: 6}}

                                                       >
                                                            <h2 style={{
                                                                 color: backgroundColor, fontSize: 35, letterSpacing: 2.5,
                                                                 transition: `color ${animationTransition} ease`
                                                            }}
                                                            >
                                                                 About me
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
                                   </div>

                              </div>
                         </div>


                         <div className='container-content-left'>









                              <AnimatePresence>
                                   {aaa3 && (
                                        <motion.div exit={{ opacity: 0, y: -10 }}>
                                             <motion.div
                                                  initial={{ scale: 1, y: 50, opacity: 0 }}
                                                  animate={{ scale: 1, y: 0, opacity: 1 }}
                                                  transition={{ type: 'spring', ease: 'anticipate', duration: 0.9, delay: 0.2 }}

                                                  className='content-left'
                                                  style={{ marginTop: min_width_600px ? 0 : 16 }}

                                             >
                                                  <h3 style={{
                                                       color: thirdLettersColor,
                                                       transition: `color ${animationTransition} ease`
                                                  }}
                                                  >
                                                       Skills
                                                  </h3>
                                                  <hr style={{
                                                       'background-color': hrColor,
                                                       transition: `background-color ${animationTransition} ease`
                                                  }}
                                                  />


                                                  <p>I’m very focusin my work.</p>
                                                  <p>
                                                       I’m very good on planning and organising my work, so my tasks will always be done on time in
                                                       necessary standard.
                                                  </p>
                                                  <p>
                                                       I’m happy working on my own, but I have also like to work as part of the team.
                                                  </p>
                                                  <p>I'm very positive creative, flexible and responsible.</p>

                                             </motion.div>
                                        </motion.div>
                                   )}
                              </AnimatePresence >
                         </div>
                    </div>



                   <AnimatePresence>
                                   {aaa3 && (
                                        <motion.div exit={{ opacity: 0, y: -10 }}>
                                             <motion.div
                                                  initial={{ scale: 1, y: 50, opacity: 0 }}
                                                  animate={{ scale: 1, y: 0, opacity: 1 }}
                                                  transition={{ type: 'spring', ease: 'anticipate', duration: 0.9, delay: 0.4 }}
                         className='page-body-right'
                         style={{ marginTop: min_width_600px ? -1 : -50 }}
                    >
                         <div className='container-content-right'>
                              <div className='content-right'>


                                   <p>Experience working with dynamic content.</p>
                                   <p>Developing with ReactJS single page JavaScript Applications.</p>
                                   <p>Attention to Detail.</p>
                                   <p>Problem Solving Skills.</p>

                                   <p>Good understanding working with APIs (RESTful services).</p>
                                   <p>Web developer able to build a Web presence from the ground up, from concept, navigation, working with data and programming to UX.</p>
                                   <p>Skilled at writing well-designed, efficient code using current best practices in Web development.</p>
                              </div>
                         </div>
                              </motion.div>
                                        </motion.div>
                                   )}
                              </AnimatePresence >
               </div>
          </div>


     )
}
import { motion } from 'framer-motion'



export default function AboutMe({
     min_width_600px, backgroundColor, hrColorMain, thirdLettersColor, hrColor, animationTransition
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
                                   <motion.div
                                        initial={{ scale: 1, x: -100, opacity: 0 }}
                                        animate={{ scale: 1, x: 0, opacity: 1 }}
                                        transition={{ type: 'spring', ease: 'anticipate', duration: 0.9, delay: 0 }}

                                   >
                                        <h2 style={{
                                             color: backgroundColor, fontSize: 35, letterSpacing:  2.5,
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
                              </div>
                         </div>
          

                         <div
                              className='container-content-left'>
                              <motion.div 
                                 initial={{ scale: 1, y: 100, opacity: 0 }}
                                 animate={{ scale: 1, y: 0, opacity: 1 }}
                                 transition={{ type: 'spring', ease: 'anticipate', duration: 0.9, delay: 0 }}
                              
                              className='content-left'
                                   style={{ marginTop: min_width_600px ? 0 : 16 }}>
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
                                    }} /
                                    >

                                   <p>I’m very positive.</p>
                                   <p>I’m very focus in my work.</p>
                                   <p>
                                        I’m very good on planning and organising my work, so my tasks will always be done on time in
                                        necessary standard.
                                   </p>
                                   <p>
                                        I’m happy working on my own, but I have also like to work as part of the team.
                                   </p>



                              </motion.div>
                         </div>
                    </div>



                    <motion.div 
                                 initial={{ scale: 1, x: 100, opacity: 0 }}
                                 animate={{ scale: 1, x: 0, opacity: 1 }}
                                 transition={{ type: 'spring', ease: 'anticipate', duration: 0.9, delay: 0 }}
                         className='page-body-right'
                         style={{ marginTop: min_width_600px ? -19 : -50 }}
                    >
                         <div className='container-content-right'>
                              <div className='content-right'>

                                   <p>Creativity, Flexibility, Responsibility.</p>
                                   <p>Experience working with dynamic content.</p>
                                   <p>Developing with ReactJS single page JavaScript Applications.</p>
                                   <p>Problem Solving Skills.</p>

                                   <p>Good understanding working with</p>
                                   <p>APIs (RESTful services).</p>
                                   <p>Web developer able to build a Web presence from the ground up, from concept, navigation, working with data and programming to UX.</p>
                                   <p>Skilled at writing well-designed, efficient code using current best practices in Web development.</p>
                              </div>
                         </div>
                    </motion.div>
               </div>
          </div>


     )
}
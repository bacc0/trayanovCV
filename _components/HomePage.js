import { Hidden, useMediaQuery } from '@mui/material'
import { motion } from 'framer-motion'
import Title from './Title'


export default function HomePage({ W_screenSize }) {


     const min_width_600px = useMediaQuery('(min-width:600px)')
     const logo_W_H = 230
     const strokeWidth = min_width_600px ? 1.6 : 2.2
     const primeLettersColor = '#FFFFFF'
     const secLettersColor = '#BBC5CD'
     const thirdLettersColor = '#3770FE'
     const thirdLogoColor = '#3770FE'
     const hrColor = '#EDF0F2'
     const hrColorMain = '#13478B'

     const backgroundColor = '#13478B'
     const backgroundColor_second = '#0E366B'

     const backgroundColor2 = '#3770FE'
     const backgroundColor_second2 = '#1764E1'



     return (
          <div className='page'>
               <div className='page-nav'>
                    <div className='title-container vertical-center-container'>

                         <div className='vertical-center' >
                              <motion.div
                                   initial={{ scale: 1, y: -200, opacity: 0 }}
                                   animate={{ scale: 1, y: 0, opacity: 1 }}
                                   transition={{ type: 'spring', duration: 0.9, delay: 0 }}
                                   className='title'
                              >
                                   <Title
                                        logo_W_H={logo_W_H}
                                        primeLettersColor={primeLettersColor}
                                        secLettersColor={secLettersColor}
                                        thirdLogoColor={thirdLogoColor}
                                        backgroundColor={backgroundColor}
                                        strokeWidth={strokeWidth}
                                   />
                                   {/* <h1 >
                                        <div className='second' style={{ fontFamily: "'Audiowide', sans-serif" }}>
                                             HELLO I'M
                                        </div>
                                        VESELIN
                                   </h1> */}
                              </motion.div>
                         </div>

                    </div>
               </div>


               <div
               >
                    <div className='page-body'>
                         <div className='page-body-left'>
                              {/* <motion.div
                                   initial={{ scale: 1, x: -100, opacity: 0 }}
                                   animate={{ scale: 1, x: 0, opacity: 1 }}
                                   transition={{ type: 'spring', ease: 'anticipate', duration: 0.9, delay: 0 }} className='container-left-accent'
                                   style={{ 
                                        background: 
                                        `linear-gradient(90deg, ${backgroundColor_second} 0%, ${backgroundColor} 100%)` 
                                   }}
                              >
                                   <div className='vertical-center-container left-accent' >
                                        <div className='vertical-center accent-title' >
                                             <div className='first' style={{ color: primeLettersColor }}>
                                                  EXPERIENCE
                                             </div>
                                             <div className='second'
                                                  style={{ fontFamily: "'Audiowide', sans-serif", color: secLettersColor }}

                                             >
                                                  WORK
                                             </div>
                                        </div>
                                   </div>
                              </motion.div> */}

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
                                             <h3 style={{ color: backgroundColor, fontSize: 35 }}>
                                                  Experience
                                             </h3>
                                             <hr style={{ backgroundColor: hrColorMain }} />
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


                                        <h3 style={{ color: thirdLettersColor }}>
                                             React Developer - Groundbits Ltd
                                        </h3>
                                        <hr style={{ backgroundColor: hrColor }} />
                                        <p>Attention to Detail.</p>
                                        <strong>Dec 2021 – Present </strong>
                                        <p>
                                             Developing a Website Builder.
                                        </p>
                                        <p>
                                             Using REACT with NEXTJS, for styling MATERIAL UI (MUI), STRAPI for contains management system (CMS), for animation FRAMER MOTION and directly SVG’s manipulation.
                                        </p>
<br/>
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
                                        <h3 style={{ color: thirdLettersColor }}>
                                             React Developer - Amdocs via Appgr8
                                        </h3>
                                        <hr style={{ backgroundColor: hrColor }} />
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
                                        <h3 style={{ color: thirdLettersColor }}>
                                             React Developer - Groundbits Ltd
                                        </h3>
                                        <hr style={{ backgroundColor: hrColor }} />
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
               </div>








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
                                        <h3 style={{ color: backgroundColor, fontSize: 35 }}>
                                             Technologies
                                        </h3>
                                        <hr style={{ backgroundColor: hrColorMain }} />
                                   </motion.div>
</Hidden>
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
                              </div>
                         </div>
                    </div>

                    <div className='page-body-right' >

                         {/* <Hidden smDown >
                              <div
                                   className='container-right-accent vertical-center-container-right'
                                   style={{
                                        background:
                                             `linear-gradient(90deg, ${backgroundColor2} 0%, ${backgroundColor_second2} 100%)`
                                   }}
                              >
                                   <div className='vertical-center-right'>
                                        <div className='right-accent accent-title'>

                                             <div className='first' style={{ color: primeLettersColor }}>
                                                  TECHNOLOGIES
                                             </div>
                                             <div
                                                  className='second'
                                                  style={{ color: backgroundColor, fontFamily: "'Audiowide', sans-serif" }}
                                             >
                                                  STACK
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </Hidden> */}

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
                                        <h3 style={{ color: backgroundColor, fontSize: 35 }}>
                                             Technologies
                                        </h3>
                                        <hr style={{ backgroundColor: hrColorMain }} />
                                   </motion.div>
                                   </Hidden>
                                   {/* <hr style={{ backgroundColor: hrColor }} /> */}
                                   <p>Typescript,</p>
                                   <p>NodeJS,</p>
                                   <p>Express,</p>
                                   <p>Git, Github, Bitbucket,</p>
                                   <p>Sourcetree,</p>
                                   <p>Jira,</p>
                                   <p>Jenkins,</p>
                                   <p>Storybook</p>
                              </div>
                         </div>
                    </div>
               </div>

               <div style={{ height: 46 }} />

               {/* About */}

               <div>
                    <div className='page-body'>
                         <div className='page-body-left'>
                              {/* <div
                                   className='container-left-accent'
                                   style={{
                                        background:
                                             `linear-gradient(90deg, ${backgroundColor_second} 0%, ${backgroundColor} 100%)`
                                   }}
                              >
                                   <div className='vertical-center-container left-accent'>
                                        <div className='vertical-center accent-title'>
                                             <div className='first' style={{ color: primeLettersColor }}>
                                                  FRONT END
                                             </div>
                                             <div
                                                  className='second'
                                                  style={{
                                                       fontFamily: "'Audiowide', sans-serif",
                                                       color: secLettersColor
                                                  }}
                                             >
                                                  DEVELOPER
                                             </div>
                                        </div>
                                   </div>
                              </div> */}
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
                                             <h3 style={{ color: backgroundColor, fontSize: 35 }}>
                                                  Front end
                                             </h3>
                                             <hr style={{ backgroundColor: hrColorMain }} />
                                        </motion.div>
                                   </div>
                              </div>


                              <div
                                   className='container-content-left'>
                                   <div className='content-left'
                                        style={{ marginTop: min_width_600px ? 0 : 16 }}>
                                        <h3 style={{ color: thirdLettersColor }}>
                                             Hello
                                        </h3>
                                        <hr style={{ backgroundColor: hrColor }} />

                                        <p>I’m very positive.</p>
                                        <p>I’m very focus in my work.</p>
                                        <p>
                                             I’m very good on planning and organising my work, so my tasks will always be done on time in
                                             necessary standard.
                                        </p>
                                        <p>
                                             I’m happy working on my own, but I have also like to work as part of the team.
                                        </p>



                                   </div>
                              </div>
                         </div>



                         <div
                              className='page-body-right'
                              style={{ marginTop: min_width_600px ? -19 : -50 }}
                         >
                              <div className='container-content-right'>
                                   <div className='content-right'>
                                        {/* <h3 style={{ color: thirdLettersColor}} >Hello</h3> */}
                                        {/* <Hidden smDown >
                                             <hr style={{ marginTop: 1, backgroundColor: hrColor }} />
                                        </Hidden> */}
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
                         </div>
                    </div>
               </div>
               <div style={{ height: min_width_600px ? 62 : 34 }}
               />

          </div>
     )
}


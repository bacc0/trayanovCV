import Title from './Title'
import { motion } from 'framer-motion'
export default function HomePage({ W_screenSize }) {





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
                                        logo_W_H={230}
                                        primeLettersColor={'#FFFFFF'}
                                        secLettersColor={'#B8B8B8'}
                                        thirdLettersColor={'#0CA1C5'}
                                        backgroundColor={'#D2D845'}
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
               // style={{ display: 'flex', 'align-items': 'center', height: '75vh'}}
               >
                    <div className='page-body'>
                         <div className='page-body-left'>
                              <motion.div
                                   initial={{ scale: 1, x: -100 , opacity: 0}}
                                   animate={{ scale: 1, x: 0 , opacity: 1}}
                                   transition={{ type: 'spring', ease: 'anticipate', duration: 0.9, delay: 0 }} className='container-left-accent'
                              >
                                   <div className='vertical-center-container left-accent'>
                                        <div className='vertical-center accent-title' >
                                             <div className='first'>
                                                  EXPERIENCE
                                             </div>
                                             <div className='second' style={{ fontFamily: "'Audiowide', sans-serif" }}>
                                                  WORK
                                             </div>
                                        </div>
                                   </div>
                              </motion.div>
                              <motion.div
                                   initial={{ scale: 1, y: 100 , opacity: 0}}
                                   animate={{ scale: 1, y: 0 , opacity: 1}}
                                   transition={{ type: 'spring', ease: 'anticipate', duration: 0.9, delay: 0 }}  className='container-content-left'>
                                   <div className='content-left'>
                                        <h3>React Developer - Groundbits Ltd</h3>
                                        <hr />
                                        <strong>Dec 2021 – Present </strong>
                                        <p>
                                             Developing a Website Builder.
                                        </p>
                                        <p>
                                             Using REACT with NEXTJS, for styling MATERIAL UI (MUI), STRAPI for contains management system (CMS), for animation FRAMER MOTION and directly SVG’s manipulation.
                                        </p>
                                        <br />
                                        <p><strong>Ricard Rosson </strong>ricard@iacos.net</p>
                                   </div>
                              </motion.div>
                         </div>



                         <motion.div
                                   initial={{ scale: 1, x: 100 , opacity: 0}}
                                   animate={{ scale: 1, x: 0 , opacity: 1}}
                                   transition={{ type: 'spring', ease: 'anticipate', duration: 0.9, delay: 0 }}   className='page-body-right'>

                              <div className='container-content-right'>
                                   <div className='content-right'>
                                        <h3>React Developer - Amdocs via Appgr8 </h3>
                                        <hr />
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
                                        <h3>React Developer - Groundbits Ltd</h3>
                                        <hr />
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


               {/* Tech */}
               <div style={{ height: 80 }} />



               <div className='page-body'>

                    <div className='page-body-left '>
                         <div className='container-content-left'>
                              <div className='content-left'>
                                   <h3 style={{ color: '#1D3668' }}>
                                        Technologies
                                   </h3>
                                   <hr style={{ backgroundColor: '#1D3668' }} />
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

                         <div
                              className='container-right-accent vertical-center-container-right'
                              style={{ backgroundColor: '#0FA1C4' }}
                         >
                              <div className='vertical-center-right'>
                                   <div className='right-accent accent-title'>

                                        <div className='first' style={{ color: '#FFFFFF' }}>
                                             TECHNOLOGIES
                                        </div>
                                        <div
                                             className='second'
                                             style={{ color: '#D2D844', fontFamily: "'Audiowide', sans-serif" }}
                                        >
                                             STACK
                                        </div>
                                   </div>
                              </div>
                         </div>

                         <div className='container-content-right'>
                              <div className='content-right'>
                                   {/* <hr style={{ backgroundColor: '#1D3668' }} /> */}
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

               <div style={{ height: 78 }} />

               {/* About */}

               <div>
                    <div className='page-body'>
                         <div className='page-body-left'>
                              <div className='container-left-accent'>
                                   <div className='vertical-center-container left-accent'>
                                        <div className='vertical-center accent-title'>
                                             <div className='first'>
                                                  FRONT END
                                             </div>
                                             <div className='second' style={{ fontFamily: "'Audiowide', sans-serif" }}>
                                                  DEVELOPER
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className='container-content-left'>
                                   <div className='content-left'>
                                        <h3>Hello</h3>
                                        <hr />

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



                         <div className='page-body-right'>
                              <div className='container-content-right'>
                                   <div className='content-right'>
                                        {/* <h3>Hello</h3> */}
                                        <hr style={{ marginTop: 1 }} />
                                        <p>Attention to Detail.</p>
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
               <div style={{ height: 138 }} />
          </div>
     )
}


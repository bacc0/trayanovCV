import { Hidden } from '@mui/material'
import AnimationImage from './helpers/AnimationImage'


export default function Technologies({
     theme, min_width_600px, backgroundColor, backgroundColor_2, 
     hrColorMain, animationTransition, Ref_2, Ref_2b,
     isRef_2_Visible, animation, Y_position
}) {

     const styleContainer = {
          backgroundColor: backgroundColor_2,
          paddingTop: min_width_600px ? 93 : 92,
          paddingBottom: min_width_600px ? 54 : 74,
          // minHeight: min_width_600px ? 300 : 300,
          borderTop: `${theme === 'light' ? 0 : 1}px solid ${hrColorMain + 11}`,
          borderBottom: `${theme === 'light' ? 0 : 1}px solid ${hrColorMain + 11}`,
          transition: `background-color ${animationTransition} ease, 
          color ${animationTransition} ease`
     }

     return (
          <div className='page-body' style={styleContainer}
          >
               <div className='page-body-left '>
                    <div className='container-content-left'>
                         <div className='content-left' >
                              <div ref={Ref_2b} >

                                   <Hidden smUp >
                                        {animation(isRef_2_Visible, 0.02,
                                             <div style={{ margin: `24px 0 52px` }}>
                                                  <h2 style={{
                                                       color: backgroundColor, fontSize: 35, letterSpacing: 2.5,
                                                       transition: `color ${animationTransition} ease`
                                                  }}
                                                  >
                                                       Tech stack {backgroundColor_2 && 'RED'}
                                                  </h2>
                                                  <hr
                                                       style={{ 'background-color': hrColorMain, transition: `background-color ${animationTransition} ease` }}
                                                  />
                                             </div>
                                        )
                                        }
                                   </Hidden>
                              </div>

                              {animation(isRef_2_Visible, 0.1,  <p>ReactJS</p>)}
                              {animation(isRef_2_Visible, 0.14, <p>Hook</p>)}
                              {animation(isRef_2_Visible, 0.18, <p>NextJS</p>)}
                              {animation(isRef_2_Visible, 0.22, <p>Javascript</p>)}
                              {animation(isRef_2_Visible, 0.26, <p>Material</p>)}
                              {animation(isRef_2_Visible, 0.3,  <p>CSS</p>)}
                              {animation(isRef_2_Visible, 0.34, <p>SASS</p>)}
                              {animation(isRef_2_Visible, 0.38, <p>HTML</p>)}
                              {animation(isRef_2_Visible, 0.42, <p>Framer Motion</p>)}
                              {animation(isRef_2_Visible, 0.46, <p>SVG Animations</p>)}
                              {animation(isRef_2_Visible, 0.5,  <p>Adobe Illustrator</p>)}
                              {animation(isRef_2_Visible, 0.54, <p>Autodesk Graphic</p>)}
                              {animation(isRef_2_Visible, 0.58, <p>GIMP</p>)}
                              {animation(isRef_2_Visible, 0.62, <p>Adobe Photoshop</p>)}

                         </div>
                    </div>
               </div>

               <div className='page-body-right' >



                    <div className='container-content-right'>

                         <div
                              className='content-right'
                              style={{
                                   marginTop: min_width_600px ? 0 : -53,
                                   marginBottom: min_width_600px ? 0 : -8
                              }}
                         >
                              <div ref={Ref_2} >
                                   <Hidden smDown >

                                        {animation(isRef_2_Visible, 0.02,
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

                              {animation(isRef_2_Visible, min_width_600px ? 0.22 : 0.66, <p>Typescript</p>)}
                              {animation(isRef_2_Visible, min_width_600px ? 0.26 : 0.7,  <p>NodeJS</p>)}
                              {animation(isRef_2_Visible, min_width_600px ? 0.3 : 0.74,  <p>Express</p>)}
                              {animation(isRef_2_Visible, min_width_600px ? 0.34 : 0.78, <p>Git Github Bitbucket</p>)}
                              {animation(isRef_2_Visible, min_width_600px ? 0.38 : 0.82, <p>Sourcetree</p>)}
                              {animation(isRef_2_Visible, min_width_600px ? 0.42 : 0.84, <p>Jira</p>)}
                              {animation(isRef_2_Visible, min_width_600px ? 0.46 : 0.88, <p>Jenkins</p>)}
                              {animation(isRef_2_Visible, min_width_600px ? 0.5 : 0.92,  <p>Storybook</p>)}

                              {animation(isRef_2_Visible, min_width_600px ? 0.54 : 0.96,
                                   <AnimationImage
                                        imageURL={'/TECH2.svg'}
                                        width={140}
                                        height={110}
                                        threshold={0.5}
                                        Y_position={Y_position}
                                   />
                              )}
                         </div>
                    </div>
               </div>
          </div>
     )
}

import { Hidden } from '@mui/material'
import Image_technologies from '../_illustratins/Image_technologies'
import Img_handler from '../_illustratins/Img_handler'

export default function Technologies({
     state, min_width_600px,
     theme, animationTransition, animation }) {

     const { backgroundColor, hrColorMain, thirdLogoColor } = state

     const paddingTop = min_width_600px ? 62 : 35
     const paddingBottom = min_width_600px ? 65 : 17


     const styleContainer = {

          backgroundColor: state.backgroundColor_2,
          paddingTop: paddingTop,
          paddingBottom: paddingBottom,
          minHeight: 0,

          borderTop: `${theme === 'light' ? 0 : 1}px solid ${state.hrColorMain + 11}`,
          borderBottom: `${theme === 'light' ? 0 : 1}px solid ${state.hrColorMain + 11}`,
          transition: `background-color ${animationTransition} ease, 
                                                  color ${animationTransition} ease`,
          // background: `radial-gradient(at 50% top, #4A0A6A, #4A0A6A, #040F1B, #040F1B, #040F1B)`,
          // backgroundColor: 'red'
     }

     const style_h2_ = {

          color: backgroundColor,
          transition: `color ${animationTransition} ease`
     }

     const style_hr_ = {
          'background-color': hrColorMain,
          transition: `background-color ${animationTransition} ease`
     }

     return (
          <div className='page-body' style={styleContainer}>
               <div className='page-body-left '>
                    <div className='container-content-left'>
                         <div className='content-left' >
                              <Hidden smUp >
                                   <div style={{ margin: `24px 0 52px` }}>
                                        <h2 style={style_h2_}>
                                             Tech stack
                                        </h2>
                                        <hr style={style_hr_} />
                                   </div>
                              </Hidden>

                              <div style={{ marginTop: min_width_600px ? -9 : -6 }}>
                                   <p>ReactJS</p>
                              </div>
                              <p>Hook</p>
                              <p>NextJS</p>
                              <p>Javascript</p>
                              <p>Material</p>
                              <p>CSS</p>
                              <p>SASS</p>
                              <p>HTML</p>
                              <p>Framer Motion</p>
                              <p>SVG's Animations</p>
                              <p>Shapeshifter</p>
                              <p>Adobe Illustrator</p>
                              <p>Autodesk Graphic</p>
                              <p>GIMP</p>
                              <p
                                   style={{
                                        marginBottom: min_width_600px ? '0em' : '1em',
                                   }}
                              >
                                   Adobe Photoshop
                              </p>
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

                              <Hidden smDown >


                                   <>
                                        <h2 style={style_h2_} >
                                             Tech stack
                                        </h2>
                                        <hr style={{ ...style_hr_, ...{ marginBottom: 31 } }} />
                                   </>
                              </Hidden>


                              <p>Typescript</p>
                              <p>NodeJS</p>
                              <p>Express</p>
                              <p>Git Github Bitbucket</p>
                              <p>Sourcetree</p>
                              <p>Jira</p>
                              <p>Storybook</p>

                              <div
                                   style={{
                                        marginTop: min_width_600px ? 10 : 34,
                                        marginBottom: min_width_600px ? 0 : 0
                                   }}
                              >
                                   <Img_handler
                                        src={'./tech.svg'}
                                        min_width_600px={min_width_600px}
                                   />
                                   {/* <Image_technologies
                                        min_width_600px={min_width_600px}
                                        color={thirdLogoColor}
                                   /> */}
                              </div>

                         </div>
                    </div>
               </div>
          </div>
     )
}



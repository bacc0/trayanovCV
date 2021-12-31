import { useEffect, useRef, useState } from 'react'
import { Hidden } from '@mui/material'
import Image_technologies from '../_illustratins/Image_technologies'


export default function Technologies({
     state, min_width_600px, Ref_2, Ref_2b,
     theme, animationTransition, isRef_2_Visible, animation }) {

     const { backgroundColor, hrColorMain, thirdLogoColor } = state

     const paddingTop = min_width_600px ? 62 : 35
     const paddingBottom = min_width_600px ? 65 : 17

     const [top, setTop] = useState(-110)

     // const [opacity, setOpacity] = useState(0);

     useEffect(() => {
          if (isRef_2_Visible) {
               setTop(0)
               // setOpacity(1)
          } else {
               setTop(50)
               // setOpacity(1)
          }


     }, [isRef_2_Visible])


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


     const styleTextAnimation = {
          position: 'relative',
          top,
          transition: `top .3s ease-out`,
          transitionDelay: '.16s'
     }

     return (
          <div className='page-body' style={styleContainer}>
               <div className='page-body-left '>
                    <div className='container-content-left'>
                         <div className='content-left' >
                              <div ref={Ref_2b} >

                                   <Hidden smUp >
                                        <div style={{ ...styleTextAnimation, ...{ transitionDelay: '0s' } }}>
                                             <div style={{ margin: `24px 0 52px` }}>
                                                  <h2 style={style_h2_}>
                                                       Tech stack
                                                  </h2>
                                                  <hr style={style_hr_} />
                                             </div>
                                        </div>
                                        {/* {animation(isRef_2_Visible, 0.02,
                                             <div style={{ margin: `24px 0 52px` }}>
                                                  <h2 style={style_h2_}>
                                                       Tech stack
                                                  </h2>
                                                  <hr style={style_hr_} />
                                             </div>
                                        )} */}
                                   </Hidden>
                              </div>
                              <div style={{ marginTop: min_width_600px ? -9 : -6 }}>
                                   {animation(isRef_2_Visible, 0.12,
                                        <>


                                        </>
                                   )}

                                   <div style={styleTextAnimation}>

                                        <p>ReactJS</p>
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
                                        <p style={{
                                             marginBottom: min_width_600px ? '0em' : '1em',
                                        }}
                                        >
                                             Adobe Photoshop
                                        </p>
                                   </div>
                              </div>

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
                                        <div style={{ ...styleTextAnimation, ...{ transitionDelay: '0s' } }}>
                                             <h2 style={style_h2_} >
                                                  Tech stack
                                             </h2>
                                             <hr style={{ ...style_hr_, ...{ marginBottom: 31 } }} />
                                        </div>

                                        {/* {animation(isRef_2_Visible, 0.02,
                                             <div>
                                                  <h2 style={style_h2_} >
                                                       Tech stack
                                                  </h2>
                                                  <hr style={{ ...style_hr_, ...{ marginBottom: 31 } }} />
                                             </div>
                                        )} */}
                                   </Hidden>
                                   <div
                                        style={styleTextAnimation}
                                   >
                                        <p>Typescript</p>
                                        <p>NodeJS</p>
                                        <p>Express</p>
                                        <p>Git Github Bitbucket</p>
                                        <p>Sourcetree</p>
                                        <p>Jira</p>
                                        <p>Storybook</p>
                                   </div>
                              </div>

                              <div
                                   style={{ ...styleTextAnimation, ...{

                                        transitionDelay: '.22s',

                                        marginTop: min_width_600px ? 10 : 34,
                                        marginBottom: min_width_600px ? 0 : 0
                                   }}}
                              >
                                   <Image_technologies
                                        min_width_600px={min_width_600px}
                                        color={thirdLogoColor}
                                   />
                              </div>


                              {/* {animation(isRef_2_Visible, 0.22,
                                   <div
                                        style={{
                                             marginTop: min_width_600px ? 10 : 34,
                                             marginBottom: min_width_600px ? 0 : 0
                                        }}
                                   >
                                        <Image_technologies
                                             min_width_600px={min_width_600px}
                                             color={thirdLogoColor}
                                        />
                                   </div>
                              )} */}
                         </div>
                    </div>
               </div>
          </div>
     )
}



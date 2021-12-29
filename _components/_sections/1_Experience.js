import { useState, useEffect } from 'react'
import Image_type from '../_illustratins/Image_type'



export default function Experience({
     state,
     min_width_600px,
     typeWriter, Ref_0, isRef_0_Visible,
     Ref_05, isRef_05_Visible, Ref_1, isRef_1_Visible, animation,
}) {

     const { strongText, animationTransition, hrColorMain, thirdLogoColor,
          thirdLettersColor, hrColor, backgroundColor } = state

     const [onAnimationStart, setOnAnimationStart] = useState(true)

     const paddingTop = min_width_600px ? 58 : 67
     const paddingBottom =  min_width_600px ? 72 : 28

     useEffect(() => {
          setTimeout(() => {
               setOnAnimationStart(false)
          }, 6000)
     }, [])


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
          fontSize: 35,
          letterSpacing: 2.5,
          color: backgroundColor,
          transition: `color ${animationTransition} ease`,
     }
     const style_h3_ = {
          minHeight: 35,
          letterSpacing: 1.3,
          color: thirdLettersColor,
          transition: `color ${animationTransition} ease`,
     }

     const style_hr_I = {
          'background-color': hrColorMain,
          transition: `background-color ${animationTransition} ease`
     }
     const style_hr_II = {
          'background-color': hrColor,
          transition: `background-color ${animationTransition} ease`
     }


     return (
          <div className='page-body' style={styleContainer}>
               <div className='page-body-left'>
                    <div className='container-content-left' >
                         <div
                              ref={Ref_0}
                              className='content-left'
                              style={{ margin: `5px 0 ${min_width_600px ? 36 : -7}px` }}
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
                              style={{ marginTop: min_width_600px ? -20 : -2 }}
                         >
                              {animation(isRef_0_Visible, 0.14,
                                   <h3 style={style_h3_}>
                                        {onAnimationStart
                                             ? typeWriter('React Developer - Groundbits Ltd')
                                             : 'React Developer - Groundbits Ltd'
                                        }
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
                                   <p>
                                        <br />
                                        <strong style={{ color: strongText }}>Ricard Rosson </strong>
                                        <div>ricard@iacos.net</div>
                                   </p>
                              )}

                              {animation(isRef_0_Visible, 0.38,
                                   <div style={{ 
                                        marginTop: min_width_600px ? 15 : 36, 
                                        marginBottom: min_width_600px ? 0 : -3 
                                   }}
                                        >
                                        <Image_type
                                             image_Name={'experience_Image'}
                                             min_width_600px={min_width_600px}
                                             color={thirdLogoColor}
                                        />
                                        {/* <AnimationImage
                                             // imageURL={'/work1.svg'}
                                             imageURL={'/exp.svg'}
                                             width={243}
                                             height={200}
                                             min_width_600px={min_width_600px}
                                             threshold={0.5}
                                        />   */}
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
                                             style={{ ...style_h3_, ...{ marginTop: min_width_600px ? 19 : 10 } }}
                                        >
                                             {onAnimationStart
                                                  ? typeWriter(' React Developer - Amdocs via Appgr8')
                                                  : ' React Developer - Amdocs via Appgr8'
                                             }
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
                                        <h3 style={{ ...style_h3_, ...{ marginTop: min_width_600px ? 26 : -15 } }}>
                                             {onAnimationStart
                                                  ? typeWriter('React Developer - Groundbits Ltd')
                                                  : 'React Developer - Groundbits Ltd'
                                             }
                                        </h3>

                                        <hr style={style_hr_II} />
                                   </>
                              )}

                              {animation(isRef_1_Visible, 0.1,
                                   <strong style={{ color: strongText }}>
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



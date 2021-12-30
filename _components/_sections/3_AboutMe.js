import { useTheme } from '@mui/styles'
import Image_aboutMe from '../_illustratins/Image_aboutMe'
import { motion, AnimatePresence } from 'framer-motion'


export default function AboutMe({
     state, min_width_600px, Ref_3, isRef_3_Visible, animation, animationTransition }) {

     const { backgroundColor, hrColorMain, thirdLettersColor, hrColor, thirdLogoColor } = state

     const theme = useTheme()

     const paddingTop = min_width_600px ? 62 : 60
     const paddingBottom = min_width_600px ? 58 : 9

     const styles = (theme) => ({
          root: {
               color: 'blue',
               // Match [0, md)
               //       [0, 900px)
               [theme.breakpoints.down('md')]: {
                    color: 'red',
               },
          },
     });
     const styleContainer = {
          paddingTop: paddingTop,
          paddingBottom: paddingBottom,
          minHeight: 0,
          borderBottom: `0.3px solid ${hrColorMain}33`

     }
     const style_h2_ = {

          color: backgroundColor,
          transition: `color ${animationTransition} ease`
     }
     const style_h3_ = {
          color: thirdLettersColor,
          fontSize: 19.5,
          transition: `color ${animationTransition} ease`,
          marginTop: min_width_600px ? 26 : 1,
          marginBottom: min_width_600px ? -7 : 26
     }
     const style_hr_I = {
          'background-color': hrColorMain,
          transition: `background-color ${animationTransition} ease`
     }
     const style_hr_II = {
          'background-color': hrColor,
          transition: `background-color ${animationTransition} ease`,
          // marginBottom: 29
     }

     return (
          <div className='page-body' style={styleContainer}>
               <div className='page-body-left' >
                    <div className='container-content-left' >
                         <div ref={Ref_3}
                              className='content-left'
                         // style={{ margin: `${min_width_600px ? 0 : -20}px 0 ${min_width_600px ? 36 : -7}px` }}
                         >
                              {animation(isRef_3_Visible, 0.02,
                                   <>
                                        <h2 style={style_h2_}>
                                             About me
                                        </h2>
                                        <hr style={style_hr_I} />
                                   </>
                              )}
                         </div>
                    </div>

                    <div className='container-content-left'>
                         {isRef_3_Visible && (
                              <div
                                   className='content-left'
                              // style={{ marginTop: min_width_600px ? -15 : 16 }}
                              >
                                   {animation(isRef_3_Visible, 0.1,
                                        <>
                                             <h3 style={style_h3_}>
                                                  Skills
                                             </h3>
                                             <hr style={style_hr_II} />
                                        </>
                                   )}
                                   {animation(isRef_3_Visible, 0.24,
                                        <p>I’m very focusin my work.</p>
                                   )}
                                   {animation(isRef_3_Visible, 0.26,
                                        <p>
                                             I’m very good on planning and organising my work, so my tasks will always be done on time in
                                             necessary standard.
                                        </p>
                                   )}
                                   {animation(isRef_3_Visible, 0.28,
                                        <p>
                                             I’m happy working on my own, but I have also like to work as part of the team.
                                        </p>
                                   )}
                                   {animation(isRef_3_Visible, 0.32,
                                        <p>
                                             I'm very positive creative, flexible and responsible.
                                        </p>
                                   )}
                                   {animation(isRef_3_Visible, 0.36,
                                        <p>Experience working with dynamic content.</p>
                                   )}
                                   {animation(isRef_3_Visible, 0.40,
                                        <p
                                             style={{
                                                  marginBottom: min_width_600px ? '0em' : '1em',
                                             }}
                                        >Problem Solving Skills. Attention to Detail.</p>
                                   )}
                              </div>
                         )}
                    </div>
               </div>

               {isRef_3_Visible && (
                    <div
                         className='page-body-right'
                         style={{ marginTop: min_width_600px ? -1 : -50 }}
                    >
                         <div className='container-content-right'>
                              <div
                                   className='content-right'
                                   style={{ marginTop: min_width_600px ? -8 : 0 }}
                              >
                                   {/* {animation(isRef_3_Visible, min_width_600px ? 0.14 : 0.36,
                                        <p>Developing with ReactJS single page JavaScript Applications.</p>
                                   )} */}

                                   {animation(isRef_3_Visible, min_width_600px ? 0.18 : 0.4,
                                        <p>Good understanding working with APIs (RESTful services).</p>
                                   )}

                                   {animation(isRef_3_Visible, min_width_600px ? 0.22 : 0.44,
                                        <p>
                                             Developing with ReactJS single page JavaScript Applications.
                                        </p>
                                   )}

                                   {animation(isRef_3_Visible, min_width_600px ? 0.26 : 0.48,
                                        <p>
                                             Web developer able to build an application from the ground up, from concept, navigation, working with data and programming to UX.
                                        </p>
                                   )}

                                   {animation(isRef_3_Visible, min_width_600px ? 0.3 : 0.52,
                                        <p>
                                             Skilled at writing well-designed, efficient code using current best practices in Web development.
                                        </p>
                                   )}
                                   {animation(isRef_3_Visible, min_width_600px ? 0.34 : 0.56,
                                        <div
                                             style={{
                                                  marginTop: min_width_600px ? -7 : 10,
                                                  marginBottom: min_width_600px ? 0 : 0
                                             }}
                                        >
                                             <Image_aboutMe
                                                  min_width_600px={min_width_600px}
                                                  color={thirdLogoColor}
                                             />
                                        </div>
                                   )}
                              </div>
                         </div>
                    </div>
               )}
          </div>
     )
}

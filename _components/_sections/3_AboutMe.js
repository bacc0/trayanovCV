
// import { useEffect,  useState } from 'react'
import { makeStyles } from '@mui/styles'


import Image_aboutMe from '../_illustratins/Image_aboutMe'
import { motion, AnimatePresence } from 'framer-motion'
import Img_handler from '../_illustratins/Img_handler'
import Img_handle_inview from '../_illustratins/Img_handle_inview'

export default function AboutMe({
     state, min_width_600px, animationTransition }) {

     const { backgroundColor, hrColorMain, thirdLettersColor, hrColor, thirdLogoColor, secLettersColor } = state


     // const [paddingTop, setPaddingTop] = useState(60)
     // const [paddingBottom, setPaddingBottom] = useState(9)

     // useEffect(() => {
     //      setPaddingTop(min_width_600px ? 62 : 60)
     //      setPaddingBottom(min_width_600px ? 58 : 9)
     // }, [min_width_600px]);


     const paddingTop = min_width_600px ? 62 : 60
     const paddingBottom = min_width_600px ? 58 : 9

     const props = {
          hrColor,
          hrColorMain,
          secLettersColor,
          min_width_600px,
          backgroundColor,
          thirdLettersColor,
          animationTransition,
     }

     const classes = useStyles(props)


     // const styleContainer = {
     //      paddingTop: paddingTop,
     //      paddingBottom: paddingBottom,
     //      minHeight: 0,
     //      borderBottom: `0.3px solid ${secLettersColor}55`,

     // }
     // const style_h2_ = {

     //      color: backgroundColor,
     //      transition: `color ${animationTransition} ease`
     // }
     // const style_h3_ = {
     //      color: thirdLettersColor,
     //      fontSize: 19.5,
     //      transition: `color ${animationTransition} ease`,
     //      marginTop: min_width_600px ? 26 : 1,
     //      marginBottom: min_width_600px ? -7 : 26
     // }
     // const style_hr_I = {
     //      'background-color': hrColorMain,
     //      transition: `background-color ${animationTransition} ease`
     // }
     // const style_hr_II = {
     //      'background-color': hrColor,
     //      transition: `background-color ${animationTransition} ease`,
     //      // marginBottom: 29
     // }

     return (
          <div
               // className='page-body'
               //  style={styleContainer}
               style={{
                    paddingTop: props.min_width_600px ? 62 : 60,
                    paddingBottom: props.min_width_600px ? 58 : 9,
               }}
               className={`${classes.styleContainer} page-body`}
          >
               <div className='page-body-left' >
                    <div className='container-content-left' >
                         <div className='content-left'>
                              <h2 className={classes.style_h2_}
                              // style={style_h2_}
                              >
                                   About me
                              </h2>
                              <hr className={classes.style_hr_I}
                              // style={style_hr_I} 
                              />

                         </div>
                    </div>

                    <div className='container-content-left'>

                         <div className='content-left'>

                              <h3 className={classes.style_h3_}
                              // style={style_h3_}
                              >
                                   Skills
                              </h3>
                              <hr
                                   className={classes.style_hr_II}
                              // style={style_hr_II} 
                              />
                              <p>I’m very focusin my work.</p>
                              <p>
                                   I’m very good on planning and organising my work, so my tasks will always be done on time in
                                   necessary standard.
                              </p>
                              <p>
                                   I’m happy working on my own, but I have also like to work as part of the team.
                              </p>
                              <p>
                                   I'm very positive creative, flexible and responsible.
                              </p>
                              <p>Experience working with dynamic content.</p>
                              <p
                                   style={{
                                        marginBottom: min_width_600px ? '0em' : '1em',
                                   }}
                              >Problem Solving Skills. Attention to Detail.</p>
                         </div>

                    </div>
               </div>


               <div
                    className='page-body-right'
                    style={{ marginTop: min_width_600px ? -1 : -50 }}
               >
                    <div className='container-content-right'>
                         <div
                              className='content-right'
                              style={{ marginTop: min_width_600px ? -8 : 0 }}
                         >

                              <p>Good understanding working with APIs (RESTful services).</p>

                              <p>
                                   Developing with ReactJS single page JavaScript Applications.
                              </p>

                              <p>
                                   Web developer able to build an application from the ground up, from concept, navigation, working with data and programming to UX.
                              </p>

                              <p>
                                   Skilled at writing well-designed, efficient code using current best practices in Web development.
                              </p>
                              <div
                                   style={{
                                        marginTop: min_width_600px ? -7 : 10,
                                        marginBottom: min_width_600px ? 0 : 0
                                   }}
                              >
                                   <Img_handle_inview
                                        src={'./me.svg'}
                                        min_width_600px={min_width_600px}
                                   />
                                   {/* <Img_handler
                                        src={'./me.svg'}
                                        min_width_600px={min_width_600px}
                                   /> */}
                                   {/* <Image_aboutMe
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


// -----------------------  dynamic Styles  ---------------------


const useStyles = makeStyles({

     styleContainer: (props) => ({
          // backgroundColor: props.secLettersColor,
          borderBottom: `0.3px solid ${props.secLettersColor}55`,
     }),

     style_h2_: (props) => ({
          color: ' props.backgroundColor',
          transition: `color ${props.animationTransition} ease`
     }),

     style_h3_: (props) => ({
          color: props.thirdLettersColor,
          fontSize: 19.5,
          transition: `color ${props.animationTransition} ease`,
          marginTop: props.min_width_600px ? 26 : 1,
          marginBottom: props.min_width_600px ? -7 : 26
     }),

     style_hr_I: (props) => ({
          backgroundColor: props.hrColorMain,
          transition: `background-color ${props.animationTransition} ease`
     }),

     style_hr_II: (props) => ({
          backgroundColor: props.hrColor,
          transition: `background-color ${props.animationTransition} ease`,
     }),

     // bar: {
     //      color: (props) => props.thirdLettersColor,
     // },
})


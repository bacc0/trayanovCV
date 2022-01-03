import Img_handle_inview from '../_illustratins/Img_handle_inview'

export default function Kkk({ state, min_width_600px }) {


     const {
          strongText, animationTransition, hrColorMain, secLettersColor,
          thirdLettersColor, hrColor, backgroundColor } = state

     const paddingTop = min_width_600px ? 65 : 63
     const paddingBottom = min_width_600px ? 60 : 18

     const styleContainer = {

          paddingTop: paddingTop,
          paddingBottom: paddingBottom,
          minHeight: min_width_600px ? 300 : 300,
          borderTop: `0.3px solid ${secLettersColor}55`,
     }
     const style_h2_ = {
          color: backgroundColor,
          transition: `color ${animationTransition} ease`,
     }


     const style_hr_I = {
          'background-color': hrColorMain,
          transition: `background-color ${animationTransition} ease`
     }
     const style_hr_II = {
          'background-color': hrColor,
          transition: `background-color ${animationTransition} ease`,
          marginBottom: min_width_600px ? 6 : 7
     }

     const styleContact = {
          color: strongText,
          marginTop: min_width_600px ? 28 : 29
     }







     const sectionsContainer = {
          width: '100%',
          display: 'flex',
          justifyContent: 'center',

     }

     const sectionsBody = {
          // height: '50px',
          // backgroundColor: '#44444422',
          width: min_width_600px ? 484 : '80%',
          maxWidth: min_width_600px ? 484 : 340,

          display: min_width_600px ? 'flex' : 'block',

          justifyContent: min_width_600px ? 'space-between' : 'center',
          padding: `59px 0`,
          height: 'auto'
     }
     const sections = {
          paddingTop: 2,
          // backgroundColor: 'lime',
          width: min_width_600px ? 210 : '100%',

     }

     const h2container = {
          paddingTop: 0,
          // backgroundColor: 'red',
          height: 39,
          width: 210,
          borderBottom: `1.5px solid ${backgroundColor}`,
     }
     const h3container = {
          paddingTop: 2,
          width: '100%',
          marginTop: 15,
          marginBottom: -22
     }

     const style_h3_ = {
          fontSize: 19.5,
          color: thirdLettersColor,
          transition: `color ${animationTransition} ease`,
     }

     const textStrongContainer = {
          paddingTop: 25,
          // backgroundColor: 'coral',
          width: '100%',
          marginTop: 15,
          marginBottom: -6,
     }

     const textStrong = {
          color: strongText,

     }
     const pContainer = {
          paddingTop: 0,
          marginTop: 0,
          // backgroundColor: 'lightblue',
          width: '100%',
          paddingBottom: 0,
          marginBottom: -21,
     }

     const imgContainer = {
          paddingTop: 17,
          // backgroundColor: 'yellow',
          width: '100%',
          paddingBottom: 0,
          marginBottom: -18,
     }




     return (
          <>
               <div style={sectionsContainer }>
                    <div style={{ ...sectionsBody, ...{ marginBottom: 20 } }}>

                         <div style={sections}>


                              <div style={h2container}>
                                   <h2>About me</h2>
                              </div>
                              <div style={{ ...imgContainer,
                                            ...{ marginTop: min_width_600px ? -23 : -4 }
                                   }}
                              >
                                   <Img_handle_inview
                                        src={'./me.svg'}
                                        min_width_600px={min_width_600px}
                                   />
                              </div>
                              <div
                                   style={{ ...h3container, ...{
                                            ...{ marginTop: min_width_600px ? 31 : 62 }}}}
                                   >
                                   <h3 style={style_h3_}>
                                        Skills
                                   </h3>

                              </div>

                              <div
                                   style={{ ...pContainer,
                                             ...{ marginTop: min_width_600px ? 36 : 62 }}}
                                   >
                                   <p>I’m very focusin my work</p>
                                   <p>I’m very good on planning and organising my work, so my tasks will always be done on time in necessary standard.</p>
                                   <p>I’m happy working on my own, but I have also like to work as part of the team.</p>
                              </div>
                         </div>

                         <div style={sections}>
                              <div style={{...pContainer,
                                             ...{ marginTop: min_width_600px ? 57 : 39}}}
                              >
                                   <p>I'm very positive creative, flexible and responsible.</p>
                                   <p>Experience working with dynamic content.</p>
                                   <p>Problem Solving Skills. Attention to Detail.</p>
                                   <p>Good understanding working with APIs (RESTful services).</p>
                                   <p>Developing with ReactJS single page JavaScript Applications.</p>
                                   <p>Web developer able to build an application from the ground up, from concept, navigation, working with data and programming to UX.</p>
                                   <p>Skilled at writing well designed, efficient code using current best practices in Web development.</p>
                              </div>
                         </div>
                    </div>

               </div>
          </>
     )
}





// import { makeStyles } from '@mui/styles'
// import Img_handle_inview from '../_illustratins/Img_handle_inview'

// export default function AboutMe({
//      state, min_width_600px, animationTransition }) {

//      const { backgroundColor, hrColorMain, thirdLettersColor, hrColor, secLettersColor } = state

//      const props = {
//           hrColor,
//           hrColorMain,
//           secLettersColor,
//           min_width_600px,
//           backgroundColor,
//           thirdLettersColor,
//           animationTransition,
//      }

//      const classes = useStyles(props)


//      return (
//           <div
//                style={{
//                     paddingTop: props.min_width_600px ? 65 : 64,
//                     paddingBottom: props.min_width_600px ? 47 : 12,
//                }}
//                className={`${classes.styleContainer} page-body`}
//           >
//                <div className='page-body-left' >
//                     <div className='container-content-left' >
//                          <div className='content-left'>
//                               <h2 className={classes.style_h2_}>
//                                    About me
//                               </h2>
//                               <hr className={classes.style_hr_I}/>

//                          </div>
//                     </div>

//                     <div className='container-content-left'>

//                          <div className='content-left'>

//                               <h3 className={classes.style_h3_}>
//                                    Skills
//                               </h3>
//                               <hr
//                                    className={classes.style_hr_II}/>
//                               <p>I’m very focusin my work.</p>
//                               <p>
//                                    I’m very good on planning and organising my work, so my tasks will always be done on time in
//                                    necessary standard.
//                               </p>
//                               <p>
//                                    I’m happy working on my own, but I have also like to work as part of the team.
//                               </p>
//                               <p>
//                                    I'm very positive creative, flexible and responsible.
//                               </p>
//                               <p>Experience working with dynamic content.</p>
//                               <p style={{marginBottom: min_width_600px ? '0em' : '1em'}}>
//                                    Problem Solving Skills. Attention to Detail.</p>
//                          </div>
//                     </div>
//                </div>


//                <div
//                     className='page-body-right'
//                     style={{ marginTop: min_width_600px ? -1 : -50 }}
//                >
//                     <div className='container-content-right'>
//                          <div
//                               className='content-right'
//                               style={{ marginTop: min_width_600px ? -8 : 0 }}
//                          >
//                               <p>Good understanding working with APIs (RESTful services).</p>
//                               <p>
//                                    Developing with ReactJS single page JavaScript Applications.
//                               </p>
//                               <p>
//                                    Web developer able to build an application from the ground up, from concept, navigation, working with data and programming to UX.
//                               </p>
//                               <p>
//                                    Skilled at writing well designed, efficient code using current best practices in Web development.
//                               </p>
//                               <div
//                                    style={{
//                                         marginTop: min_width_600px ? -7 : 10,
//                                         marginBottom: min_width_600px ? 0 : 0
//                                    }}
//                               >
//                                    <Img_handle_inview
//                                         src={'./me.svg'}
//                                         min_width_600px={min_width_600px}
//                                    />
//                               </div>

//                          </div>
//                     </div>
//                </div>

//           </div>
//      )
// }


// // -----------------------  dynamic Styles  ---------------------


// const useStyles = makeStyles({

//      styleContainer: (props) => ({
//           borderBottom: `0.3px solid ${props.secLettersColor}55`,
//      }),

//      style_h2_: (props) => ({
//           color: ' props.backgroundColor',
//           transition: `color ${props.animationTransition} ease`
//      }),

//      style_h3_: (props) => ({
//           color: props.thirdLettersColor,
//           fontSize: 19.5,
//           transition: `color ${props.animationTransition} ease`,
//           marginTop: props.min_width_600px ? 26 : 1,
//           marginBottom: props.min_width_600px ? -7 : 26
//      }),

//      style_hr_I: (props) => ({
//           backgroundColor: props.hrColorMain,
//           transition: `background-color ${props.animationTransition} ease`
//      }),

//      style_hr_II: (props) => ({
//           backgroundColor: props.hrColor,
//           transition: `background-color ${props.animationTransition} ease`,
//      }),

//      // bar: {
//      //      color: (props) => props.thirdLettersColor,
//      // },
// })


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
          // backgroundColor: 'beige',
     }

     const sectionsBody = {
          // height: '50px',
          // backgroundColor: '#44444422',
          width: min_width_600px ? 484 : '80%',
          maxWidth: min_width_600px ? 484 : 300,

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
               <div style={{
                    ...sectionsContainer,
                    ...{ backgroundColor: state.backgroundColor_2 }
               }}
               >
                    <div style={{ ...sectionsBody, ...{ marginBottom: 20 } }}>

                         <div style={sections}>


                              <div style={h2container}>
                                   <h2 >Tech stack</h2>
                              </div>
                              <div style={{
                                   ...imgContainer,
                                   ...{ marginTop: min_width_600px ? -4 : 20 }
                                   }}
                              >
                                   <Img_handle_inview
                                        src={'./tech.svg'}
                                        min_width_600px={min_width_600px}
                                   />
                              </div>

                              <div style={{ ...pContainer,
                                            ...{ marginTop: min_width_600px ? 26 : 62}}}
                              >
                                   <p>ReactJS</p>
                                   <p>Hook</p>
                                   <p>NextJS</p>
                                   <p>Javascript</p>
                                   <p>Material UI (MUI)</p>
                                   <p>CSS</p>
                                   <p>SASS</p>
                                   <p>HTML</p>
                                   
                              </div>
                         </div>

                         <div style={sections}>
                              <div style={{...pContainer,
                                   ...{marginTop:min_width_600px ? 64 : 38}}}
                              >
                                   <p>Framer Motion</p>
                                   <p>SVG's Animations</p>
                                   <p>Shapeshifter</p>
                                   <p>Adobe Illustrator</p>
                                   <p>Autodesk Graphic</p>
                                   <p>GIMP</p>
                                   <p>Adobe Photoshop</p>
                                   <p>Typescript</p>
                                   <p>NodeJS</p>
                                   <p>Express</p>
                                   <p>Git Github Bitbucket</p>
                                   <p>Sourcetree</p>
                                   <p>Jira</p>
                              </div>
                         </div>
                    </div>

               </div>
          </>
     )
}










// import { Hidden } from '@mui/material'
// import Img_handle_inview from '../_illustratins/Img_handle_inview'


// export default function Technologies({
//      state, min_width_600px,
//      theme, animationTransition }) {

//      const { backgroundColor, hrColorMain } = state

//      const paddingTop = min_width_600px ? 64 : 39
//      const paddingBottom = min_width_600px ? 60 : 19

//      const styleContainer = {

//           backgroundColor: state.backgroundColor_2,
//           paddingTop: paddingTop,
//           paddingBottom: paddingBottom,
//           minHeight: 0,

//           borderTop: `${theme === 'light' ? 0 : 1}px solid ${state.hrColorMain + 11}`,
//           borderBottom: `${theme === 'light' ? 0 : 1}px solid ${state.hrColorMain + 11}`,
//           transition: `background-color ${animationTransition} ease, 
//                                                   color ${animationTransition} ease`,
//           // background: `radial-gradient(at 50% top, #4A0A6A, #4A0A6A, #040F1B, #040F1B, #040F1B)`,
//           // backgroundColor: 'red'
//      }

//      const style_h2_ = {
//           color: backgroundColor,
//           transition: `color ${animationTransition} ease`
//      }

//      const style_hr_ = {
//           'background-color': hrColorMain,
//           transition: `background-color ${animationTransition} ease`
//      }

//      return (
//           <div className='page-body' style={styleContainer}>
//                <div className='page-body-left '>
//                     <div className='container-content-left'>
//                          <div className='content-left' >
//                               <Hidden smUp >
//                                    <div style={{ margin: `24px 0 52px` }}>
//                                         <h2 style={style_h2_}>
//                                              Tech stack
//                                         </h2>
//                                         <hr style={style_hr_} />
//                                    </div>
//                               </Hidden>

//                               <div style={{ marginTop: min_width_600px ? -9 : 0 }}>
//                                    <p>ReactJS</p>
//                               </div>
//                               <p>Hook</p>
//                               <p>NextJS</p>
//                               <p>Javascript</p>
//                               <p>Material UI (MUI)</p>
//                               <p>CSS</p>
//                               <p>SASS</p>
//                               <p>HTML</p>
//                               <p>Framer Motion</p>
//                               <p>SVG's Animations</p>
//                               <p>Shapeshifter</p>
//                               <p>Adobe Illustrator</p>
//                               <p>Autodesk Graphic</p>
//                               <p>GIMP</p>
//                               <p
//                                    style={{
//                                         marginBottom: min_width_600px ? '0em' : '1em',
//                                    }}
//                               >
//                                    Adobe Photoshop
//                               </p>
//                          </div>
//                     </div>
//                </div>

//                <div className='page-body-right' >
//                     <div className='container-content-right'>
//                          <div
//                               className='content-right'
//                               style={{
//                                    marginTop: min_width_600px ? 0 : -53,
//                                    marginBottom: min_width_600px ? 0 : -8
//                               }}
//                          >
//                               <Hidden smDown >
//                                    <>
//                                         <h2 style={style_h2_} >
//                                              Tech stack
//                                         </h2>
//                                         <hr style={{ ...style_hr_, ...{ marginBottom: 31 } }} />
//                                    </>
//                               </Hidden>

//                               <p>Typescript</p>
//                               <p>NodeJS</p>
//                               <p>Express</p>
//                               <p>Git Github Bitbucket</p>
//                               <p>Sourcetree</p>
//                               <p>Jira</p>
//                               <p>Storybook</p>

//                               <div
//                                    style={{
//                                         marginTop: min_width_600px ? 10 : 34,
//                                         marginBottom: min_width_600px ? 0 : 0
//                                    }}
//                               >
//                                    <Img_handle_inview
//                                         src={'./tech.svg'}
//                                         min_width_600px={min_width_600px}
//                                    />
//                               </div>
//                          </div>
//                     </div>
//                </div>
//           </div>
//      )
// }



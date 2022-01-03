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
          borderTop: `0.3px solid ${secLettersColor}55`,
     }

     const sectionsBody = {
          // height: '50px',
          // backgroundColor: '#44444422',
          width: min_width_600px ? 484 : '80%',
          maxWidth: min_width_600px ?  484 :300,

          display: min_width_600px ? 'flex' : 'block',

          justifyContent: min_width_600px ?'space-between' : 'center',
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
               <div style={sectionsContainer}>
                    <div style={{...sectionsBody, ...{ marginBottom: 20}}}>

                         <div style={sections}>


                              <div style={h2container}>
                                   <h2 >Experience</h2>
                              </div>
                              <div style={{ ...imgContainer, 
                                            ...{ marginTop: min_width_600px ? -4 : 20 }}}>
                                   <Img_handle_inview
                                        src={'./exp.svg'}
                                        min_width_600px={min_width_600px}
                                   />
                              </div>
                              <div
                                   style={{...h3container, ...{ 
                                           ...{ marginTop: min_width_600px ? 31 : 62}}}}>
                                   <h3 style={style_h3_}>
                                        React Developer
                                        <div style={{ fontSize: min_width_600px ? 14 : 16, marginTop: -3 }}>
                                             Groundbits Ltd
                                        </div>
                                   </h3>
                              </div>

                              <div
                                   style={textStrongContainer}>

                                   <div style={{ ...textStrong,
                                                 ...{marginTop: min_width_600px ? -8 : 33}}}
                                   >
                                        <strong>Dec 2021 – Present</strong>
                                   </div>
                              </div>

                              <div
                                   style={pContainer}>
                                   <p>Developing a Website Builder.</p>
                                   <p>Using REACT with NEXTJS, for styling MATERIAL UI (MUI), STRAPI for contains management system (CMS), for animation FRAMER MOTION and directly SVG’s manipulation.
                                   </p>
                              </div>
                              <div style={textStrongContainer}>
                                   <div style={textStrong}>
                                        <strong>Ricard Rosson</strong>
                                   </div>
                              </div>

                              <div
                                   style={pContainer}>
                                   <p>ricard@iacos.net</p>
                              </div>
                              
                         </div>




                         <div style={sections}>

                             
                              <div
                                   style={h3container}>
                                   <h3 style={{...style_h3_, ...{marginTop: 53}}}>
                                        React Developer
                                        <div style={{ fontSize: min_width_600px ? 14 : 16, marginTop: -3 }}>
                                             Amdocs via Appgr8
                                        </div>
                                   </h3>
                              </div>

                              <div
                                   style={textStrongContainer}>

                                   <div style={{ ...textStrong,
                                                 ...{marginTop: min_width_600px ? -8 : 33}}}
                                   >
                                        <strong>July 2021 - Nov 2021</strong>
                                   </div>
                              </div>

                              <div
                                   style={pContainer}>
                                   <p>Building a new application for the mobile network operator.</p>
                                   <p>Using REACT, MATERIAL UI, TYPESCRIPT, SOURCETREE, BITBUCKET ect.</p>
                                   <p>For the software development the company used AGILE with the SCRUM framework and JIRA.</p>
                              </div>
                             


                            
                              <div
                                   style={h3container}>
                                   <h3  style={{ ...style_h3_, 
                                                 ...{marginTop:  min_width_600px ? 32 : 55}}}
                                   >
                                        React Developer
                                        <div style={{ fontSize: min_width_600px ? 14 : 16, marginTop: -3 }}>
                                             Groundbits Ltd
                                        </div>
                                   </h3>
                              </div>

                              <div style={textStrongContainer}>
                                   <div style={{ ...textStrong,
                                                 ...{marginTop: min_width_600px ? -8 : 33}}}
                                   >
                                        <strong>Jan 2020 – Jan 2021</strong>
                                   </div>
                              </div>

                              <div style={pContainer}>
                                   <p>Creating a web builder application.</p>
                                   <p>Using REACT with NEXTJS, for styling MATERIAL UI (MUI), STRAPI for contains management system (CMS), for animation FRAMER MOTION and directly SVG’s manipulation.</p>
                              </div>

                             
                              


                         </div>
                    </div>

               </div>
          </>
     )
}


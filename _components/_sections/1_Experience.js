import Img_handle_inview from '../_illustratins/Img_handle_inview'

export default function Experience({ state, min_width_600px }) {


     const {
          strongText, animationTransition, hrColorMain, secLettersColor,
          thirdLettersColor, hrColor, backgroundColor } = state

     const paddingTop = min_width_600px ? 63 : 60
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
     const style_h3_ = {
          minHeight: min_width_600px ? 40 : 56,
          fontSize: 19.5,
          color: thirdLettersColor,
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
          marginTop: min_width_600px ? 28 : 39
     }


     return (
          <div className='page-body' style={styleContainer}>
               <div className='page-body-left'>
                    <div className='container-content-left' >
                         <div className='content-left'>
                              <h2 style={style_h2_}>
                                   Experience
                              </h2>
                              <hr style={style_hr_I} />
                         </div>
                    </div>

                    <div className='container-content-left'  >
                         <div
                              className='content-left'
                              style={{ marginTop: min_width_600px ? 20 : -2 }}
                         >
                              <h3 style={style_h3_}>
                                   React Developer
                                   <div style={{ fontSize: min_width_600px ? 14 : 16 }}>
                                        Groundbits Ltd
                                   </div>
                              </h3>

                              <hr style={style_hr_II} />
                              <strong style={{ color: strongText }}>Dec 2021 – Present </strong>

                              <p>Developing a Website Builder.</p>

                              <p>
                                   Using REACT with NEXTJS, for styling MATERIAL UI (MUI),
                                   STRAPI for contains management system (CMS), 
                                   for animation FRAMER MOTION and directly SVG’s manipulation.
                              </p>

                              <p style={styleContact}>
                                   <strong>Ricard Rosson </strong>
                                   <div>ricard@iacos.net</div>
                              </p>

                              <div
                                   style={{
                                        marginTop: min_width_600px ? 10 : 34,
                                        marginBottom: min_width_600px ? 0 : 2
                                   }}
                              >
                                   <Img_handle_inview
                                        src={'./exp.svg'}
                                        min_width_600px={min_width_600px}
                                   />
                              </div>
                         </div>
                    </div>
               </div>
               <div className='page-body-right'>
                    <div className='container-content-right'>
                         <div className='content-right' >
                              <h3
                                   style={{ ...style_h3_, ...{ marginTop: min_width_600px ? 0 : 0 } }}
                              >
                                   React Developer
                                   <div style={{ fontSize: min_width_600px ? 14 : 16 }}>
                                        Amdocs via Appgr8
                                   </div>
                              </h3>
                              <hr style={style_hr_II} />

                              <strong style={{ color: strongText }}>
                                   July 2021 - Nov 2021
                              </strong>

                              <p>Building a new application for the mobile network operator.</p>
                              <p>
                                   Using REACT, MATERIAL UI, TYPESCRIPT, SOURCETREE, BITBUCKET ect.
                              </p>
                              <p>
                                   For the software development the company used AGILE 
                                   with the SCRUM framework and JIRA.
                              </p>
                         </div>
                    </div>

                    <div className='container-content-right'>
                         <div className='content-right'>
                              <h3 style={{ ...style_h3_, ...{ marginTop: min_width_600px ? 26 : 0 } }}>
                                   React Developer
                                   <div style={{ fontSize: min_width_600px ? 14 : 16 }}>
                                        Groundbits Ltd
                                   </div>
                              </h3>

                              <hr style={style_hr_II} />

                              <strong style={{ color: strongText, marginTop: 0 }}>
                                   Jan 2020 – Jan 2021
                              </strong>

                              <p>Creating a web builder application.</p>
                              <p
                                   style={{
                                        marginBottom: min_width_600px ? '0em' : '0em',
                                   }}
                              >
                                   Using REACT with NEXTJS, for styling MATERIAL UI (MUI),
                                   STRAPI for contains management system (CMS), 
                                   for animation FRAMER MOTION and directly SVG’s manipulation.
                              </p>
                         </div>
                    </div>
               </div>
          </div >
     )
}


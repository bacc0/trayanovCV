
export default function AboutMe({
     min_width_600px, backgroundColor, hrColorMain, thirdLettersColor, hrColor, animationTransition,
     Ref_3,
     isRef_3_Visible, animation
}) {

     const styleContainer = {
          paddingTop:  min_width_600px ? 96 : 130,
          paddingBottom: min_width_600px ? 70: 57, 
          minHeight :min_width_600px ? 300 : 300
     }

     return (
          <div>
               <div className='page-body'  
               style={styleContainer}
               >
                    <div className='page-body-left'>

                         <div className='container-content-left' >
                              <div
                                   className='content-left'
                                   style={{ margin: `${min_width_600px ? 0 : -20}px 0 ${min_width_600px ? 36 : -7}px` }}
                              >

                                   <div ref={Ref_3} >

                                        { animation(isRef_3_Visible, 0.02,
                                             <div style={{ marginTop: 6 }}>
                                                  <h2 style={{
                                                       color: backgroundColor, fontSize: 35, letterSpacing: 2.5,
                                                       transition: `color ${animationTransition} ease`
                                                  }}
                                                  >
                                                       About me
                                                  </h2>
                                                  <hr style={{
                                                       'background-color': hrColorMain,
                                                       transition: `background-color ${animationTransition} ease`
                                                  }}
                                                  />
                                             </div>
                                        )}
                                   </div>

                              </div>
                         </div>


                         <div className='container-content-left'>



                              {isRef_3_Visible && (
                                   <div
                                        className='content-left'
                                        style={{ marginTop: min_width_600px ? 0 : 16 }}
                                   >

                                        {animation(isRef_3_Visible, 0.1,
                                             <>
                                                  <h3
                                                       style={{
                                                            color: thirdLettersColor,
                                                            transition: `color ${animationTransition} ease`,
                                                       }}
                                                  >
                                                       Skills
                                                  </h3>
                                                  <hr
                                                       style={{
                                                            'background-color': hrColor,
                                                            transition: `background-color ${animationTransition} ease`
                                                       }}
                                                  />
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
                                   <div className='content-right'>

                                        {animation(isRef_3_Visible, min_width_600px ? 0.14 : 0.36,
                                             <p>Experience working with dynamic content.</p>
                                        )}

                                        {animation(isRef_3_Visible, min_width_600px ? 0.18 : 0.4,
                                             <p>Developing with ReactJS single page JavaScript Applications.</p>
                                        )}

                                        {animation(isRef_3_Visible, min_width_600px ? 0.22 : 0.44,
                                             <p>Attention to Detail.</p>
                                        )}

                                        {animation(isRef_3_Visible, min_width_600px ? 0.26 : 0.48,
                                             <p>Problem Solving Skills.</p>
                                        )}

                                        {animation(isRef_3_Visible, min_width_600px ? 0.3 : 0.52,
                                             <p>Good understanding working with APIs (RESTful services).

                                             </p>)}

                                        {animation(isRef_3_Visible, min_width_600px ? 0.34 : 0.56,
                                             <p>
                                                  Web developer able to build a Web presence from the ground up, from concept, navigation, working with data and programming to UX.
                                             </p>
                                        )}

                                        {animation(isRef_3_Visible, min_width_600px ? 0.38 : 0.6,
                                             <p>
                                                  Skilled at writing well-designed, efficient code using current best practices in Web development.
                                             </p>
                                        )}

                                   </div>
                              </div>
                         </div>
                    )}
               </div>
          </div>
     )
}

export default function HomePage() {


     return (
          <div className='page' style={{ height: '100vh', minHeight: 660 }}>

               <div className='page-nav'>
                    <div className='title-container vertical-center-container'>
                         <div className='vertical-center' >
                              <div className='title'>
                                   <h1 >
                                        <div className='second' style={{ fontFamily: "'Audiowide', sans-serif" }}>
                                             HELLO I'M
                                        </div>
                                        VESELIN
                                   </h1>
                              </div>
                         </div>
                    </div>
               </div>
               <div
               // style={{ display: 'flex', 'align-items': 'center', height: '75vh'}}
               >
                    <div className='home-page-body'>
                         <div className='home-page-body-left'>
                              <div className='content-container-left-accent'>
                                   <div className='vertical-center-container content-left-accent'>
                                        <div className='vertical-center accent-title' >
                                             <div className='first'>EXPERIENCE</div>
                                             <div className='second' style={{ fontFamily: "'Audiowide', sans-serif" }}>
                                                  WORK
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className='content-container-left'>
                                   <div className='content-left'>
                                        <h3>React Developer - Groundbits Ltd</h3>
                                        <hr />
                                        <strong>Dec 2021 – Present </strong>
                                        <p>
                                             Developing a Website Builder.
                                        </p>
                                        <p>
                                        Using REACT with NEXTJS, for styling MATERIAL UI (MUI), STRAPI for contains management system (CMS), for animation FRAMER MOTION and directly SVG’s manipulation.
                                        </p>
                                        {/* <br/> */}
                                        <p><strong>Ricard Rosson </strong> ricard@iacos.net</p>

                                        



                                   </div>
                              </div>
                         </div>



                         <div className='home-page-body-right'>

                              <div className='content-container-right'>
                                   <div className='content-right'>
                                        <h3>React Developer - Amdocs via Appgr8 </h3>
                                        <hr />
                                        <strong>July 2021 - Nov 2021 </strong>
                                             <p>Within this role I was responsible of crating a new components.</p>
                                             <p>We used MATERIAL UI, TYPESCRIPT, SOURCETREE, BITBUKET ect.</p>

                                             <p>
                                                  For the software development the company used AGILE with the SCRUM framework
                                                  and JIRA.
                                             </p>

                                   </div>
                              </div>
                              <div className='content-container-right'>
                                   <div className='content-right'>
                                        <h3>React Developer - Groundbits Ltd</h3>
                                        <hr />
                                        <strong>Jan 2020 – Jan 2021 </strong>
                                        <p>
                                             <p>
                                                  Within this role I was responsible for creating a
                                                  web builder application.
                                             </p>
                                             

                                        </p>
                                   </div>
                              </div>

                         </div>
                    </div>
               </div>

          </div>
     )
}


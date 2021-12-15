export default function HomePage() {

     return (
          <div
               className='page'
               style={{
                    height: '100vh',
                    minHeight: 660,
                    backgroundColor: '#E9E8E9',
               }}
          > 
               <div className='page-nav'>
                    <div className='title-container vertical-center-container' style={{ backgroundColor: '#FFFFFF' }}>
                         <div className='vertical-center' >
                              <div className='title'>
                                   <h1>
                                        <div className='second'>
                                             HELLO I'M
                                        </div>
                                        VESELIN
                                   </h1>
                              </div>
                         </div>
                    </div>
               </div>

               <div className='home-page-body'>
                    <div className='home-page-body-left'>
                         <div className='content-container-left'>
                              <div className='content-left'>
                                   <h3 style={{ color: '#1D3668' }}>
                                        Technologies
                                   </h3>
                                   <hr style={{ backgroundColor: '#1D3668' }} />
                                   <p>ReactJS,</p>
                                   <p>Hooks,</p>
                                   <p>NextJS,</p>
                                   <p>Javascript,</p>
                                   <p>Material UI,</p>
                                   <p>CSS,</p>
                                   <p>SASS,</p>
                                   <p>HTML</p>
                                   <p>Framer Motion, </p>
                                   <p>SVG Animations,</p>
                                   <p>Adobe Illustrator, </p>
                                   <p>Autodesk Graphic (iDraw), </p>
                                   <p>GIMP,</p>
                                   <p>Adobe Photoshop,</p>
                              </div>
                         </div>
                    </div>
                    <div className='home-page-body-right' >

                         <div
                              className='content-container-right-accent vertical-center-container-right'
                              style={{ backgroundColor: '#0FA1C4' }}
                         >
                              <div className='vertical-center-right accent-title'>

                                   <div className='first' style={{ color: '#FFFFFF' }}>
                                        TECHNOLOGIES
                                   </div>
                                   <div className='second' style={{ color: '#D2D844' , fontFamily: "'Audiowide', sans-serif"}}>
                                        STACK
                                   </div>
                              </div>
                         </div>

                         <div className='content-container-right'>
                              <div className='content-right'>
                                   <hr style={{ backgroundColor: '#1D3668' }} />
                                   <p>Typescript,</p>
                                   <p>NodeJS,</p>
                                   <p>Express,</p>
                                   <p>Git, Github, Bitbucket,</p>
                                   <p>Sourcetree,</p>
                                   <p>Jira,</p>
                                   <p>Jenkins,</p>
                                   <p>Storybook</p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}
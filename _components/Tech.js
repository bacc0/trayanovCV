
export default function HomePage() {


     return (
          <div className='home-page' style={{ backgroundColor: '#D7DCDB' }}>

               <div className='home-page-nav'>
                    <div className='title-container vertical-center-container'style={{ backgroundColor: '#FFFFFF'}}>
                         <div className='vertical-center' >
                              <div className='title'>
                                   <h1>HELLO I'M VESELIN</h1>
                              </div>
                         </div>
                    </div>
               </div>

               <div className='home-page-body'>
                    <div className='home-page-body-left'>



                         <div className='content-container-left'>
                              <div className='content-left'>
                                   <h3 style={{ color: '#1D3668' }}>Hello</h3>
                                   <hr style={{ backgroundColor: '#1D3668' }} />
                                   <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                   </p>

                              </div>
                         </div>

                         <div className='content-container-left'>
                              <div className='content-left'>
                                   <h3 style={{ color: '#1D3668' }}>Hello</h3>
                                   <hr style={{ backgroundColor: '#1D3668' }} />
                                   <p>What is Lorem Ipsum?
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                   <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>

                              </div>
                         </div>

                    </div>



                    <div className='home-page-body-right' >

                         <div 
                              className='content-container-right-accent vertical-center-container-right' 
                              style={{ backgroundColor: '#0FA1C4' }}
                         >
                              <div className='vertical-center-right accent-title'>
                                   TECHNOLOGIES
                              </div>
                         </div>

                         <div className='content-container-right'>
                              <div className='content-right'>
                                   <h3 style={{ color: '#1D3668' }}>Hello</h3>
                                   <hr style={{ backgroundColor: '#1D3668' }} />
                                   <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                   <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
                              </div>
                         </div>

                    </div>
               </div>

          </div>
     )
}


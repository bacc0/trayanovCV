
export default function HomePage() {


     return (
          <div className='page' style={{ height: '100vh' , minHeight: 660}}>

               <div className='page-nav'>
                    <div className='title-container vertical-center-container'>
                         <div className='vertical-center' >
                              <div className='title'>
                                   <h1 >
                                        <div className='second'style={{ fontFamily:  "'Audiowide', sans-serif"}}>
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
                                             <div className='first'>FRONT END </div>
                                             <div className='second' style={{ fontFamily: "'Audiowide', sans-serif"}}>DEVELOPER</div>
                                        </div>
                                   </div>
                              </div>
                              <div className='content-container-left'>
                                   <div className='content-left'>
                                        <h3>Hello</h3>
                                        <hr />
                                        <p>What is Lorem Ipsum?
                                             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                        <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>

                                   </div>
                              </div>
                         </div>



                         <div className='home-page-body-right'>
                              <div className='content-container-right'>
                                   <div className='content-right'>
                                        <h3>Hello</h3>
                                        <hr />
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
                                   </div>
                              </div>
                              <div className='content-container-right'>
                                   <div className='content-right'>
                                        <h3>Hello</h3>
                                        <hr />
                                        <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

          </div>
     )
}


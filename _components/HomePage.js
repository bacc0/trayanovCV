import { Hidden, useMediaQuery, Stack, IconButton } from '@mui/material'

import Script from 'next/script'



import { motion } from 'framer-motion'
import MenuAppBar from './MenuAppBar'
import TitleSVG from './_illustratins/TitleSVG'

import Experience from './_sections/Experience'
import Technologies from './_sections/Technologies'
import AboutMe from './_sections/AboutMe'



import { Typewriter } from 'react-simple-typewriter'
import { useState, useEffect, Fragment } from 'react'

export default function HomePage({ currentBrowser, theme, setTheme, scrollDirection, Y_position }) {

     const [onAnimationEnd, setOnAnimationEnd] = useState(false)
     const [primeLettersColor, setPrimeLettersColor] = useState('#FFFFFF')
     const [secLettersColor, setSecLettersColor] = useState('#BBC5CD')
     const [thirdLettersColor, setThirdLettersColor] = useState('#3770FE')
     const [thirdLogoColor, setThirdLogoColor] = useState('#3770FE')
     const [hrColor, setHrColor] = useState('#EDF0F2')
     const [hrColorMain, setHrColorMain] = useState('#13478B')
     const [backgroundColor, setBackgroundColor] = useState('#13478B')
     const [AppBackgroundColor, setAppBackgroundColor] = useState('#FFFFFF')
     const [bodyColor, setBodyColor] = useState('#717d97')

     const min_width_600px = useMediaQuery('(min-width:600px)')
     const logo_W_H = 230
     const strokeWidth = min_width_600px ? 1.6 : 2.2

     const animationTransition = '350ms'

     useEffect(() => {
          setPrimeLettersColor(theme === 'light' ? '#FFFFFF' : '#1A1F2C')
          setSecLettersColor(theme === 'light' ? '#BBC5CD' : '#BBC5CD')
          setThirdLettersColor(theme === 'light' ? '#3770FE' : '#B9E981')
          setThirdLogoColor(theme === 'light' ? '#3770FE' : '#FF00D6')
          setHrColor(theme === 'light' ? '#EDF0F2' : '#95217D')
          setHrColorMain(theme === 'light' ? '#13478B' : '#FFFFFF')
          setBackgroundColor(theme === 'light' ? '#13478B' : '#FFFFFF')
          setAppBackgroundColor(theme === 'light' ? '#FFFFFF' : '#1A1F2C')
          setBodyColor(theme === 'light' ? '#717d97' : '#C4C8FF')
     }, [theme]);





     const typeWriter = (sentence) => {
          return (

               onAnimationEnd && (
                    <motion.div
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         transition={{ duration: 1.3 }}
                    >
                         <Typewriter
                              words={[sentence]}
                              loop={1}
                              cursor
                              cursorStyle=''
                              typeSpeed={75}
                              deleteSpeed={50}
                              delaySpeed={2000}
                         />
                    </motion.div>
               )
          )
     }

     const img2 = `/13.svg`
     const img3 = `/colibri.png`

     return (
          <Fragment>
               <MenuAppBar
                    currentBrowser={currentBrowser}
                    setTheme={setTheme}
                    hrColorMain={hrColorMain}
                    hrColor={hrColor}
                    secLettersColor={secLettersColor}
                    theme={theme}
                    AppBackgroundColor={AppBackgroundColor}
                    scrollDirection={scrollDirection}
                    Y_position={Y_position}
                    thirdLettersColor={thirdLettersColor}
                    min_width_600px={min_width_600px}

               />
               <div
                    className='page'
                    style={{
                         backgroundColor: AppBackgroundColor,
                         color: bodyColor,
                         transition: `background-color ${animationTransition} ease, 
                                                 color ${animationTransition} ease`
                    }}
               >
                    <div className='page-nav' style={{ borderBottom: `1px solid ${hrColor}` }}>
                         <div className='title-container vertical-center-container'>
                              <div className='vertical-center' >
                                   <motion.div
                                        initial={{ scale: 1, y: -200, opacity: 0 }}
                                        animate={{ scale: 1, y: 0, opacity: 1 }}
                                        transition={{ type: 'spring', duration: 0.9, delay: 0 }}
                                        className='title'
                                   >

                                        <TitleSVG
                                             logo_W_H={logo_W_H}
                                             primeLettersColor={primeLettersColor}
                                             secLettersColor={secLettersColor}
                                             thirdLogoColor={thirdLogoColor}
                                             backgroundColor={backgroundColor}
                                             strokeWidth={strokeWidth}
                                             setOnAnimationEnd={setOnAnimationEnd}
                                             animationTransition={animationTransition}
                                        />
                                   </motion.div>
                              </div>
                              {/* <div>
                                   <div style={{
                                        height: '29vh',
                                        width: '29vw',
                                        'min- height': '320px',
                                        'background-size': 'center',

                                        position: 'fixed',
                                        top: '10px',
                                        'background-repeat': 'no-repeat',
                                        backgroundImage:`url('/11.svg')`
                                   }}
                                   >

                                   </div>

                                   <div
                                     
                                   >
                                   <img  style={{ 
                                        position: 'absolute',
                                        top: '-40px',
                                        left: 511, 
                                        transform: 'skewX(-60deg)',
                                        opacity: 0.9, 
                                        animation: 'transform 1s infinite'
                                   }}


                                        src={img2}
                                        alt="Logo"
                                        width={170}
                                        height={250}
                                   />
                                   <img  style={{ 
                                        position: 'absolute',
                                        top: '-50px',
                                        left: 431, 
                                        opacity: 1
                                   }}
                                        src={img3}
                                        alt="Logo"
                                        width={370}
                                        height={220}
                                   />
                                   </div>
                              </div> */}

                              {/* <div id="colibri_hype_container"
                                   class="HYPE_document"
                                   style={{
                                        // backgroundColor:'red',
                                        position: "absolute",
                                        margin: 'auto',
                                        position: 'relative',
                                        width: '600px',
                                        height: '400px',
                                        overflow: 'hidden'
                                   }}>

                                   </div> */}
                              {/* <div id="colibri_hype_container"
                                   class="HYPE_document"
                                   style={{
                                        // backgroundColor:'red',
                                        position: "absolute",
                                        top: 0,
                                        margin: 'auto',
                                        position: 'relative',
                                        width: '600px',
                                        height: '400px',
                                        overflow: 'hidden'
                                   }} />
                              <Script
                                   // type="text/javascript"
                                   // charset="utf-8"
                                   src="colibri.hyperesources/colibri_hype_generated_script.js?23464"
                                   strategy="afterInteractive"
                              >
                              </Script> */}

                         </div>
                    </div>


                    <Experience
                         min_width_600px={min_width_600px}
                         backgroundColor={backgroundColor}
                         hrColorMain={hrColorMain}
                         thirdLettersColor={thirdLettersColor}
                         typeWriter={typeWriter}
                         hrColor={hrColor}
                         animationTransition={animationTransition}
                    />
                    {/* AboutMe */}
                    <Technologies
                         min_width_600px={min_width_600px}
                         backgroundColor={backgroundColor}
                         hrColorMain={hrColorMain}
                         thirdLettersColor={thirdLettersColor}
                         typeWriter={typeWriter}
                         hrColor={hrColor}
                         animationTransition={animationTransition}
                    />

                    <div style={{ height: 46 }} />

                    {/* AboutMe */}

                    <AboutMe
                         min_width_600px={min_width_600px}
                         backgroundColor={backgroundColor}
                         hrColorMain={hrColorMain}
                         thirdLettersColor={thirdLettersColor}
                         typeWriter={typeWriter}
                         hrColor={hrColor}
                         animationTransition={animationTransition}
                    />

                    <div style={{ height: min_width_600px ? 62 : 34 }} />
               </div>
          </Fragment >
     )
}


import { useMediaQuery } from '@mui/material'
import { motion } from 'framer-motion'
import CombineSections from './_sections/_CombineSections'

import MenuAppBar from './MenuAppBar'
import PageNav from './PageNav'


import { Typewriter } from 'react-simple-typewriter'
import { useState, useEffect, Fragment } from 'react'

export default function HomePage({ currentBrowser, theme, setTheme, scrollDirection, Y_position }) {

     const color_1 = '#FFFFFF'
     const color_2 = '#FAFAFA' // F2F2F2
     const color_3 = '#757575'
     const color_4 = '#383838' //#040F1B
     const color_5 = '#1d1d1f'
     const color_6 = '#8D30FE'
     const color_7 = '#8D30FE'


     const [onAnimationEnd, setOnAnimationEnd] = useState(false)
     const [primeLettersColor, setPrimeLettersColor] = useState(color_1)
     const [secLettersColor, setSecLettersColor] = useState('#9BACB5')
     const [thirdLettersColor, setThirdLettersColor] = useState('#3770FE')
     const [thirdLogoColor, setThirdLogoColor] = useState('#3770FE')
     const [hrColor, setHrColor] = useState('#EDF0F2')
     const [hrColorMain, setHrColorMain] = useState('#13478B')
     const [backgroundColor, setBackgroundColor] = useState('#13478B')
     const [backgroundColor_2, setBackgroundColor_2] = useState('#13478B')
     const [AppBackgroundColor, setAppBackgroundColor] = useState(color_1)
     const [bodyColor, setBodyColor] = useState('#717d97')
     const [footerColor, setFooterColor] = useState('#717d97')
     const [footerTextColor, setFooterTextColor] = useState(color_1)
     const [backgroundNav, setBackgroundNav] = useState(`url('FRONT_END_2.svg')`) //FRONT_END

     const min_width_600px = useMediaQuery('(min-width:600px)')
     const logo_W_H = 230
     const strokeWidth = min_width_600px ? 1.2 : 1.5

     const animationTransition = '0ms'

     useEffect(() => {
          setPrimeLettersColor(theme === 'light' ? color_1 : color_5)
          setSecLettersColor(theme === 'light' ? color_3 : color_2)
          setThirdLettersColor(theme === 'light' ? color_6 : color_6)
          setThirdLogoColor(theme === 'light' ? color_6 : color_7)
          setHrColor(theme === 'light' ? color_2 : color_3)
          setHrColorMain(theme === 'light' ? color_5 : color_1)
          setBackgroundColor(theme === 'light' ? color_5 : color_1)
          setBackgroundColor_2(theme === 'light' ? color_2 : color_4)
          setAppBackgroundColor(theme === 'light' ? color_1 : color_4)
          setBodyColor(theme === 'light' ? color_5 : color_1)
          setFooterColor(theme === 'light' ? color_4 : color_4)
          setFooterTextColor(theme === 'light' ? color_1 : color_1)
          setBackgroundNav(theme === 'light'
               ? `url('FRONT_END_2.svg'), url( 'backFrontEnd.svg' ), url( 'FRONT_END_2_COLOR.svg' )`
               : `url('FRONT_END_2_DARK.svg'), url( 'backFrontEnd.svg' ), url( 'FRONT_END_2_COLOR.svg'`)
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

     const styleBackgroundTitle = {
          backgroundColor: AppBackgroundColor,
          width: '100%',
          'background-image': min_width_600px ? backgroundNav : null,
          backgroundPosition: `center -8px, center ${Number(20 + (Y_position * -1800)).toFixed(1)}px`,
          backgroundSize: 536,
          backgroundRepeat: 'no-repeat',
          borderBottom: `1px solid ${hrColor}`
     }

     
     return (
          <Fragment>
               <MenuAppBar
                    backgroundNav={backgroundNav}
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
                         // background: `radial-gradient(circle closest-side, #7026A5, #040F1B)`,
                         color: bodyColor,
                         transition: `background-color ${animationTransition} ease, 
                                                 color ${animationTransition} ease`,
                    }}
               >

                    <div className='page-nav'
                         style={{ borderBottom: `1px solid ${hrColor}` }}>
                         <div 
                              className='title-container vertical-center-container'
                              style={styleBackgroundTitle}
                         >
                              <PageNav
                                   logo_W_H={logo_W_H}
                                   primeLettersColor={primeLettersColor}
                                   thirdLogoColor={thirdLogoColor}
                                   backgroundColor={backgroundColor}
                                   strokeWidth={strokeWidth}
                                   setOnAnimationEnd={setOnAnimationEnd}
                                   backgroundNav={backgroundNav}
                                   animationTransition={animationTransition}
                                   secLettersColor={secLettersColor}
                              />
                         </div>
                    </div>

                    <CombineSections
                         theme={theme}
                         min_width_600px={min_width_600px}
                         backgroundColor={backgroundColor}
                         backgroundColor_2={backgroundColor_2}
                         hrColorMain={hrColorMain}
                         thirdLettersColor={thirdLettersColor}
                         typeWriter={typeWriter}
                         hrColor={hrColor}
                         animationTransition={animationTransition}
                         footerColor={footerColor}
                         footerTextColor={footerTextColor}
                    />
               </div>
          </Fragment >
     )
}


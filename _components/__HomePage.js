import { useMediaQuery } from '@mui/material'
import { motion } from 'framer-motion'
import CombineSections from './_sections/_CombineSections'
import TitleSVG from './_illustratins/TitleSVG'
import MenuAppBar from './MenuAppBar'



import { Typewriter } from 'react-simple-typewriter'
import { useState, useEffect, Fragment } from 'react'

export default function HomePage({ currentBrowser, theme, setTheme, scrollDirection, Y_position }) {

     const color_1 = '#FFFFFF'
     const color_2 = '#F2F2F2'
     const color_3 = '#757575'
     const color_4 = '#383838'
     const color_5 = '#000000'
     const color_6 = '#8E75FF'
     const color_7 = '#AC99FF'

     // const color_1 = '#AC99FF'
     // const color_5 = '#1E2738'
     // const color_3 = '#5C79AE'
     // const color_4 = '#3E5276'
     // const color_6 = '#8E75FF'
     // const color_2 = '#799FE4'


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

     const min_width_600px = useMediaQuery('(min-width:600px)')
     const logo_W_H = 230
     const strokeWidth = min_width_600px ? 1.2 : 1.5

     const animationTransition = '350ms'

     useEffect(() => {
          setPrimeLettersColor(theme === 'light' ? color_1 : color_5)
          setSecLettersColor(theme === 'light' ? color_3 : color_2)
          setThirdLettersColor(theme === 'light' ? color_4 : color_6)
          setThirdLogoColor(theme === 'light' ? color_6 : color_7)
          setHrColor(theme === 'light' ? color_2 : color_3)
          setHrColorMain(theme === 'light' ? color_5 : color_1)
          setBackgroundColor(theme === 'light' ? color_5 : color_1)
          setBackgroundColor_2(theme === 'light' ? color_2 : color_4)
          setAppBackgroundColor(theme === 'light' ? color_1 : color_4)
          setBodyColor(theme === 'light' ? color_5 : color_1)
          setFooterColor(theme === 'light' ? color_4 : color_3)
          setFooterTextColor(theme === 'light' ? color_1 : color_1)
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
                    <div className='page-nav'
                         style={{
                              borderBottom: `1px solid ${hrColor}`,
                              // background: `linear-gradient(0deg, #00000001 0%, transparent`
                         }}>
                         <div className='title-container vertical-center-container'>
                              <div className='vertical-center' >
                                   <motion.div
                                        initial={{ scale: 1, y: -200,x: 10, opacity: 0 }}
                                        animate={{ scale: 1, y: 0,x: 10, opacity: 1 }}
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


import { useMediaQuery } from '@mui/material'
import CombineSections from './_sections/_CombineSections'
import MenuAppBar from './MenuAppBar'
import PageNav from './PageNav'
import { useState, useEffect, Fragment } from 'react'
import Image from 'next/image'


export default function HomePage({
     currentBrowser, theme, setTheme, Y_position, scrollDirection }) {

     const color_1 = '#FFFFFF'
     const color_2 = '#FAFAFA' // F2F2F2
     const color_3 = '#636189'  // #3F3D56
     const color_4 = '#3F3D56' //#040F1B
     const color_5 = '#2F2E41'
     const color_6 = '#8D30FE'
     const color_7 = '#CF68FE'

     const INITIAL_STATE = {
          primeLettersColor: color_1,
          secLettersColor: color_3,
          thirdLettersColor: color_6,
          separationsColor: color_1,
          thirdLogoColor: color_6,
          strongText: color_3,
          hrColor: color_2,
          hrColorMain: color_5,
          backgroundColor: color_5,
          backgroundColor_2: color_2,
          AppBackgroundColor: color_1,
          bodyColor: color_5,
          footerColor: color_4,
          footerTextColor: color_1,
          backgroundNav_container: ``,
          backgroundNav: ``,
          backgroundNav_mobile: ``
     }
     const [state, setState] = useState(INITIAL_STATE)

     const [onAnimationEnd, setOnAnimationEnd] = useState(false)

     const min_width_600px = useMediaQuery('(min-width:600px)')
     const logo_W_H = 230
     const strokeWidth = min_width_600px ? 1.2 : 1.5

     const backgroundNav_1_light = `url('backgroundNav_1_light.svg') `
     const backgroundNav_1_dark = `url('backgroundNav_1_dark.svg')`

     const backgroundNav_1_light_mobile = `url('backgroundNav_1_light_mobile.svg')`
     const backgroundNav_1_dark_mobile = `url('backgroundNav_1_dark_mobile.svg')`

     const [backgroundNav_2, setBackgroundNav_2] = useState(`url('backgroundClear.svg')`)
     const [backgroundNav_3, setBackgroundNav_3] = useState(`url('backgroundClear.svg')`)

     setTimeout(() => {
          setBackgroundNav_2(`url('backgroundNav_2.svg')`)
          setBackgroundNav_3(`url('backgroundNav_3.svg')`)

     }, 100);

     useEffect(() => {
          setState({
               ...state,
               backgroundNav_container: theme === 'light'
                    ? `${backgroundNav_2}, ${backgroundNav_3}`
                    : `${backgroundNav_2}, ${backgroundNav_3}`,
          })
     }, [backgroundNav_2, backgroundNav_3]);

     const animationTransition = '0ms'

     useEffect(() => {

          setState({
               ...state,
               primeLettersColor: theme === 'light' ? color_1 : color_5,
               secLettersColor: theme === 'light' ? color_3 : color_2,
               thirdLettersColor: theme === 'light' ? color_6 : color_7,
               separationsColor: theme === 'light' ? color_1 : color_3,
               thirdLogoColor: theme === 'light' ? color_6 : color_6,
               strongText: theme === 'light' ? color_3 : color_2,
               hrColor: theme === 'light' ? 'transparent' : 'transparent',
               hrColorMain: theme === 'light' ? color_5 : color_1,
               backgroundColor: theme === 'light' ? color_5 : color_1,
               backgroundColor_2: theme === 'light' ? color_2 : color_4,
               AppBackgroundColor: theme === 'light' ? color_1 : color_4,
               bodyColor: theme === 'light' ? color_5 : color_1,
               footerColor: theme === 'light' ? color_4 : color_4,
               footerTextColor: theme === 'light' ? color_1 : color_1,
               backgroundNav_container: theme === 'light'
                    ? `${backgroundNav_2}, ${backgroundNav_3}`
                    : `${backgroundNav_2}, ${backgroundNav_3}`,
               backgroundNav: theme === 'light'
                    ? `${backgroundNav_1_light}, ${backgroundNav_1_dark}`
                    : `${backgroundNav_1_dark} , ${backgroundNav_1_light}`,
               backgroundNav_mobile: theme === 'light'
                    ? `${backgroundNav_1_light_mobile}, ${backgroundNav_1_dark_mobile}`
                    : `${backgroundNav_1_dark_mobile} , ${backgroundNav_1_light_mobile}`
          })

     }, [theme]);

     const { AppBackgroundColor, bodyColor, thirdLettersColor } = state

     const bodyPage = {
          backgroundColor: AppBackgroundColor,
          // background: `radial-gradient(circle closest-side, #7026A5, #040F1B)`,
          color: bodyColor,
          transition: `background-color ${animationTransition} ease, 
                                  color ${animationTransition} ease`,
     }

     const [opacityBG, setOpacityBG] = useState(0);
     const [backgroundOpacity, setBackgroundOpacity] = useState(0);

     useEffect(() => {
          setInterval(() => {
               setOpacityBG(1)
               setBackgroundOpacity(1)
          }, 2500);
     }, []);

     const gradient = `linear-gradient( transparent ,transparent ,transparent, transparent ,transparent, transparent, transparent, transparent, #11111105, #11111107)`

     
     const styleBackAnimationContainer = {
          display: 'flex',
          justifyContent: 'flex-end',
          overflow: 'hidden',
          // height: 272,
          height: 294,
          top: 0,
          position: `absolute`,
          width: '100%',
          backgroundColor: AppBackgroundColor,
          background: gradient,
          opacity: backgroundOpacity,
          transition: `opacity 4s linear`,
          // backgroundColor:'tan'
     }

     const styleBackAnimation = {
          top: min_width_600px ? 25 : 75,
          position: `absolute`,
          animation: `rotate 40s linear infinite`,
          opacity: opacityBG,
          transition: `opacity 4s linear`,
         
     }

     const backAnimation = (
          <div style={styleBackAnimationContainer}>
               <div style={styleBackAnimation}>
                    <Image
                         src={'/react_logo.svg'}
                         // alt={'background image'}
                         width={min_width_600px ? 600 : 500}
                         height={min_width_600px ? 600 : 500}
                    />

               </div>
          </div>
     )



     const styleProgressBar = {
          position: 'sticky',
          top: 0,
          zIndex: 2000,
          width: `${Number((Y_position * 100)).toFixed(0)}%`,
          maxWidth: '100%',
          // borderBottom: `1px solid ${state.secLettersColor}`,
     }

 

     return (
          <div >
               <div style={styleProgressBar} />
               <MenuAppBar
                    state={state}
                    theme={theme}
                    setTheme={setTheme}
                    Y_position={Y_position}
                    currentBrowser={currentBrowser}
                    scrollDirection={scrollDirection}
                    min_width_600px={min_width_600px}
               />
               {backAnimation}
               <div className='page' style={bodyPage} >
                    <div className='page-nav'>
                         <div className='title-container vertical-center-container'>
                              <PageNav
                                   state={state}
                                   logo_W_H={logo_W_H}
                                   strokeWidth={strokeWidth}
                                   setOnAnimationEnd={setOnAnimationEnd}
                                   animationTransition={animationTransition}
                                   min_width_600px={min_width_600px}
                              />
                         </div>
                    </div>

                    <CombineSections
                         state={state}
                         theme={theme}
                         Y_position={Y_position}
                         scrollDirection={scrollDirection}
                         min_width_600px={min_width_600px}
                         onAnimationEnd={onAnimationEnd}
                         animationTransition={animationTransition}
                    />
               </div>
          </div >
     )
}


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

     const min_width_600px = useMediaQuery('(min-width:600px)')

     const backgroundNav_1_light = `url('backgroundNav_1_light.svg') `
     const backgroundNav_1_dark = `url('backgroundNav_1_dark.svg')`

     const backgroundNav_1_light_mobile = `url('backgroundNav_1_light_mobile.svg')`
     const backgroundNav_1_dark_mobile = `url('backgroundNav_1_dark_mobile.svg')`

     const [backgroundNav_2, setBackgroundNav_2] = useState(`url('backgroundClear.svg')`)
     const [backgroundNav_3, setBackgroundNav_3] = useState(`url('backgroundClear.svg')`)

     const [opacityBG, setOpacityBG] = useState(0)
     const [backgroundOpacity, setBackgroundOpacity] = useState(0)

     const { AppBackgroundColor, bodyColor } = state

     const animationTransition = '0ms'

     const gradient = `linear-gradient( transparent ,transparent ,transparent, transparent ,transparent, transparent, transparent, transparent, #11111105, #11111107)`


     useEffect(() => {
          setInterval(() => {
               setOpacityBG(1)
               setBackgroundOpacity(1)
          }, 2500);
     }, [])

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


     const style = {

          pageRoot: {
               backgroundColor: AppBackgroundColor,
               // background: `radial-gradient(circle closest-side, #7026A5, #040F1B)`,
               color: bodyColor,
               transition: `background-color ${animationTransition} ease, 
                                  color ${animationTransition} ease`,
          },
          navRoot: {
               width: '100%',
               height: min_width_600px ? 216 : '100vw',
          },
          nav: {
               height: '100%',
               margin: '0 auto',
               display: 'flex',
               alignItems: 'flex-end',
               justifyContent: 'center',
          },
          backAnimationContainer: {
               display: 'flex',
               justifyContent: 'flex-end',
               overflow: 'hidden',
               height: min_width_600px ? 294 : `calc(100vw + 55px)`,
               top: 0,
               position: `absolute`,
               width: '100%',
               backgroundColor: AppBackgroundColor,
               background: gradient,
               opacity: backgroundOpacity,
               transition: `opacity 4s linear`,
               backgroundColor: min_width_600px ? 'transparent' : '#9f9f9f0f'
          },
          backAnimation: {
               top: min_width_600px ? 25 : '60vw',
               position: `absolute`,
               animation: `rotate 40s linear infinite`,
               opacity: opacityBG,
               transition: `opacity 4s linear`,
          }
     }


     const backAnimation = (
          <div style={style.backAnimationContainer}>
               <div style={style.backAnimation}>
                    <Image
                         src={'/react_logo.svg'}
                         // alt={'background image'}
                         width={min_width_600px ? 600 : 500}
                         height={min_width_600px ? 600 : 500}
                    />

               </div>
          </div>
     )


     return (
          <div >
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
               <div style={style.pageRoot} >
                    <div style={style.navRoot}>
                         <div style={style.nav}>
                              <PageNav
                                   state={state}
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
                         animationTransition={animationTransition}
                    />
               </div>
          </div >
     )
}


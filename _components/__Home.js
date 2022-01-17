import { Paper, useMediaQuery } from '@mui/material'
import CombineSections from './_sections/_CombineSections'
import MenuAppBar from './MenuAppBar'
import PageNav from './PageNav'
import { useState, useEffect } from 'react'
import Image from 'next/image'

import { useViewportScroll } from 'framer-motion'
import { detect } from 'detect-browser'
import { useWindowSize } from 'react-window-size-hooks'

import { useDispatch, useSelector } from 'react-redux'
import { scrollDirectionActions } from '../store/scrollDirection'
import { Y_PositionActions } from '../store/PositionY'
import { min_width_600px_Actions } from '../store/minWidth'
import { windowSizeActions } from '../store/windowSize'

import { motion, AnimatePresence } from "framer-motion"
import { useScrollDirection } from 'react-use-scroll-direction'



export default function Home() {



     const dispatch = useDispatch();

     const theme = useSelector(state => state.themeReducer.color)

     const positionY = useSelector(state => state.Y_PositionSliceReducer.value)

     const min_width_600px = useSelector(state => state.min_width_600px_Reducer.value)

     const tempMediaQuery = useMediaQuery('(min-width:600px)')
     useEffect(() => {
          console.log(min_width_600px)
          dispatch(min_width_600px_Actions.MIN_WIDTH(tempMediaQuery))
     }, [tempMediaQuery]);

     const scrollDirection = useSelector(state => state.scrollDirectionReducer.value)
     // ---------------------------------    scroll to the top on reload

     useEffect(() => {
          window.scrollTo(0, 0)
     }, [])

     // ---------------------------------    Detect window Size

     var tempWindowWidth = 0
     var tempWindowHeight = 0

     if (typeof window !== 'undefined') {
          var win = window,
               doc = document,
               docElem = doc.documentElement,
               body = doc.getElementsByTagName('body')[0],
               tempWindowWidth = win.innerWidth || docElem.clientWidth || body.clientWidth,
               tempWindowHeight = win.innerHeight || docElem.clientHeight || body.clientHeight;
     }

     // ---------------------------------    Detect Browser Size ++


     const { width, height } = useWindowSize()

     useEffect(() => {
          dispatch(windowSizeActions.GET_WINDOW_WIDTH(window.innerWidth))
          dispatch(windowSizeActions.GET_WINDOW_HEIGHT(window.innerHeight))
     }, [width, height]);

     // ---------------------------------    Detect window scrolling Directions (UP DOWN)


     // useEffect(() => {
     //      var scrollableElement = document.body
     //      scrollableElement.addEventListener('wheel', checkScrollDirection)
     //      function checkScrollDirection(event) {

     //           if (checkScrollDirectionIsUp(event)) {
     //                dispatch(scrollDirectionActions.DOWN())
     //           }
     //           else {
     //                dispatch(scrollDirectionActions.UP())
     //           }
     //      }
     //      function checkScrollDirectionIsUp(event) {

     //           if (event.wheelDelta) return event.wheelDelta > 0
     //           return event.deltaY < 0
     //      }
     // }, [])

     // ---------------------------------    Mobile Detect window scrolling Directions (UP DOWN)

     // let oldValue = 0
     // let newValue = 0

     // useEffect(() => {
     //      window.addEventListener('scroll', (e) => {
     //           newValue = window.pageYOffset;
     //           if (oldValue < newValue) {
     //                dispatch(scrollDirectionActions.DOWN())

     //           } else if (oldValue > newValue) {
     //                dispatch(scrollDirectionActions.UP())
     //           }
     //           oldValue = newValue;
     //      })
     // }, [])

     // ---------------------------------    NEW! Detect window scrolling Directions (UP DOWN)
     const { isScrollingUp, isScrollingDown } = useScrollDirection()
     // const [isUp, setIsUp] = useState('up');

     useEffect(() => {
          if (isScrollingUp) {
               // setIsUp('up')
               dispatch(scrollDirectionActions.DOWN())
          }
          if (isScrollingDown) {
               // setIsUp('down')
               dispatch(scrollDirectionActions.UP())
          }
     }, [isScrollingUp, isScrollingDown]);

     useEffect(() => {
          if (positionY === 0) {
               dispatch(scrollDirectionActions.DOWN())
          }
     }, [positionY])

     //-------------------   Detect window scrolling position (0-100)


     const { scrollYProgress } = useViewportScroll(0)

     useEffect(() => {
          scrollYProgress.onChange((v) => (dispatch(Y_PositionActions.UPDATE_Y_POSITION(v))))
     }, [scrollYProgress])

     // ---------------------------------    Detect Browser Name


     const browser = detect()

     let currentBrowser;
     if (browser.name === 'firefox') {
          currentBrowser = 'firefox'
     }

     // ------------------------------------------------------------------ 


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

               background: gradient,
               opacity: backgroundOpacity,
               transition: `opacity 4s linear`,


               ['@media screen and (min-width:800px)']: {
                    backgroundColor: 'blue',
               },
               ['@media screen and (min-width: 700px) and (max-width: 800px)']: {
                    backgroundColor: 'red',
               },
               ['@media screen and (min-width: 500px) and (max-width: 700px)']: {
                    backgroundColor: 'tan',
               },

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
                         width={min_width_600px ? 600 : 500}
                         height={min_width_600px ? 600 : 500}
                    />
               </div>
          </div>
     )






     return (

          <Paper style={{ background: AppBackgroundColor }}>
               <MenuAppBar
                    state={state}
                    currentBrowser={currentBrowser}
               />

               { backAnimation }
               <div style={style.pageRoot} >

                    <div style={style.navRoot}>
                         <div style={style.nav}>
                              <PageNav state={state} />
                         </div>
                    </div>

                    <CombineSections
                         state={state}
                         animationTransition={animationTransition}
                    />
               </div>
          </Paper >
     )
}


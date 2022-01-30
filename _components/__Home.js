import { Paper, useMediaQuery } from '@mui/material'
import CombineSections from './_sections/_CombineSections'
import MenuAppBar from './MenuAppBar'
import PageNav from './PageNav'
import { useState, useEffect } from 'react'
import Image from 'next/image'


import { useViewportScroll } from 'framer-motion'
import { detect } from 'detect-browser'
import { useWindowSize } from 'react-window-size-hooks'
import { useScrollDirection } from 'react-use-scroll-direction'

import { useDispatch, useSelector } from 'react-redux'
import { scrollDirectionActions } from '../store/scrollDirection'
import { Y_PositionActions } from '../store/PositionY'
import { min_width_600px_Actions } from '../store/minWidth'
import { windowSizeActions } from '../store/windowSize'
import { appColorsActions } from '../store/appColors'

import styles from './__Home.module.scss';


export default function Home() {


     const dispatch = useDispatch();

     const theme = useSelector(state => state.themeReducer.color)

     const positionY = useSelector(state => state.Y_PositionSliceReducer.value)

     const min_width_600px = useSelector(state => state.min_width_600px_Reducer.value)

     const colors = useSelector(state => state.appColorsReducer.value)
     const { AppBackgroundColor, bodyColor } = colors

     console.log('🦊 Background', colors.AppBackgroundColor)

     const tempMediaQuery = useMediaQuery('(min-width:600px)')

     useEffect(() => {

          dispatch(min_width_600px_Actions.MIN_WIDTH(tempMediaQuery))
     }, [tempMediaQuery]);

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

     useEffect(() => {
          if (isScrollingUp) {
               dispatch(scrollDirectionActions.DOWN())
          }
          if (isScrollingDown) {
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

     const [opacityBG, setOpacityBG] = useState(0)

     const gradient = `linear-gradient( transparent ,transparent ,transparent, transparent ,transparent, transparent, transparent, transparent, #11111105, #11111107)`

     useEffect(() => {
          setInterval(() => {
               setOpacityBG(1)
          }, 2500);
     }, [])

     useEffect(() => {
          dispatch(appColorsActions.UPDATE_APP_COLORS(theme))
     }, [theme]);

     const styleLocal = {

          pageRoot: {
               backgroundColor: AppBackgroundColor,
               // background: `radial-gradient(circle closest-side, #7026A5, #040F1B)`,
               color: bodyColor,
               // transition: `background-color 0ms ease, 
               //              color 0ms ease`,
          },
          navRoot: {
               // width: '100%',
               // height: min_width_600px ? 216 : '100vw',
          },
          nav: {
               // height: '100%',
               // margin: '0 auto',
               // display: 'flex',
               // alignItems: 'flex-end',
               // justifyContent: 'center',
          },
          backAnimationContainer: {
               // display: 'flex',
               // justifyContent: 'flex-end',
               // overflow: 'hidden',
               // top: 0,
               // position: `absolute`,
               // width: '100%',
               // transition: `opacity 4s linear`,
               background: gradient,
               opacity: opacityBG,
               height: min_width_600px ? 294 : `calc(100vw + 55px)`,
          },

          backAnimation: {
               // position: `absolute`,
               animation: `rotate 40s linear infinite`,
               // transition: `opacity 4s linear`,
               // top: min_width_600px ? 25 : '60vw',
               opacity: opacityBG,
          }
     }

     const backAnimation = (
          <div
               style={styleLocal.backAnimationContainer}
               className={styles.back_Animation_Container}
          >
               <div
                    style={styleLocal.backAnimation}
                    className={styles.back_Animation}
               >
                    <Image
                         src={'/react_logo.svg'}
                         width={min_width_600px ? 600 : 500}
                         height={min_width_600px ? 600 : 500}
                    />
               </div>
          </div>
     )


     return (
          <Paper style={{ background: AppBackgroundColor }} className={styles.home_root}>
               <MenuAppBar currentBrowser={currentBrowser} />
               {backAnimation}



               <div
                    style={styleLocal.pageRoot}
                    className={styles.page_Root}
               >
                    <div
                         style={styleLocal.navRoot}
                         className={styles.nav_Root}
                    >
                         <div
                              style={styleLocal.nav}
                              className={styles.nav}
                         >
                              <PageNav />
                         </div>
                    </div>
                    <CombineSections />
               </div>
          </Paper>
     )
}


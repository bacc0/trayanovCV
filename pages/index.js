import { useEffect, useState, Fragment } from 'react'
import { useMediaQuery } from '@mui/material'
import HomePage from '../_components/__HomePage'

import { useViewportScroll } from 'framer-motion'
import { detect } from 'detect-browser'


var temp = 0
export default function Home() {

     var tempWindowWidth = 0
     var tempWindowHeight = 0

     const [scrollDirection, setScrollDirection] = useState('down')

     const [W_screenSize, set_W_screenSize] = useState(tempWindowWidth)
     const [H_screenSize, set_H_screenSize] = useState(tempWindowHeight)
     const [theme, setTheme] = useState('light')
     const { scrollYProgress } = useViewportScroll(0)
     const [Y_position, set_Y_position] = useState(0)
     // const [currentBrowser, setCurrentBrowser] = useState(0)
     let currentBrowser = ''

     // ---------------------------------    Detect window Size

     if (typeof window !== 'undefined') {
          var win = window,
               doc = document,
               docElem = doc.documentElement,
               body = doc.getElementsByTagName('body')[0],
               tempWindowWidth = win.innerWidth || docElem.clientWidth || body.clientWidth,
               tempWindowHeight = win.innerHeight || docElem.clientHeight || body.clientHeight;
     }

     // ---------------------------------    Detect window scrolling Directions (UP DOWN)

     useEffect(() => {
          var scrollableElement = document.body
          scrollableElement.addEventListener('wheel', checkScrollDirection)
          function checkScrollDirection(event) {

               if (checkScrollDirectionIsUp(event)) {
                    setScrollDirection('down')
               }
               else {
                    setScrollDirection('up')
               }
          }
          function checkScrollDirectionIsUp(event) {

               if (event.wheelDelta) return event.wheelDelta > 0
               return event.deltaY < 0
          }
     }, [])

     // ---------------------------------    Mobile Detect window scrolling Directions (UP DOWN)

     let oldValue = 0
     let newValue = 0
     useEffect(() => {
          window.addEventListener('scroll', (e) => {
               newValue = window.pageYOffset;
               if (oldValue < newValue) {

                    setScrollDirection('up')
               } else if (oldValue > newValue) {

                    setScrollDirection('down')
               }
               oldValue = newValue;
          });

     }, [])

     useEffect(() => {
          if (Y_position === 0) {
               console.log(0)
               setScrollDirection('down')
          }
     }, [Y_position])

     //-------------------

     useEffect(() => {

          scrollYProgress.onChange((v) => set_Y_position(v))
     }, [scrollYProgress])


     // ---------------------------------    Detect Browser Name
     const browser = detect()
     if (browser.name === 'firefox') {

          currentBrowser = 'firefox'
     }
     if (typeof window !== 'undefined') {
          window.addEventListener('resize', () => {

               set_W_screenSize(window.innerWidth)
               set_H_screenSize(window.innerHeight)
          })
     }
     // ---------------------------------    scroll to the top on reload

     useEffect(() => {
          window.scrollTo(0, 0)
     }, [])

     // ---------------------------------    create colors for the app theme 

     const color_1 = '#FFFFFF'
     const color_2 = '#FAFAFA' // F2F2F2
     const color_3 = '#757575'
     const color_4 = '#383838' //#040F1B
     const color_5 = '#1d1d1f'
     const color_6 = '#8D30FE'
     const color_7 = '#CF68FE'

     const [state, setState] = useState({
          hrColor: color_2,
          bodyColor: color_5,
          strongText: color_3,
          footerColor: color_4,
          hrColorMain: color_5,
          thirdLogoColor: color_6,
          backgroundColor: color_5,
          footerTextColor: color_1,
          secLettersColor: color_3,
          primeLettersColor: color_1,
          thirdLettersColor: color_6,
          backgroundColor_2: color_2,
          AppBackgroundColor: color_1,
          backgroundNav: `url('background_3_light.svg'), url( 'background_2.svg' ), url( 'background_1.svg' )`,
     })

     useEffect(() => {

          setState({
               ...state,
               hrColor: theme === 'light' ? color_2 : color_3,
               bodyColor: theme === 'light' ? color_5 : color_1,
               strongText: theme === 'light' ? color_3 : color_2,
               hrColorMain: theme === 'light' ? color_5 : color_1,
               footerColor: theme === 'light' ? color_4 : color_4,
               thirdLogoColor: theme === 'light' ? color_6 : color_7,
               secLettersColor: theme === 'light' ? color_3 : color_2,
               backgroundColor: theme === 'light' ? color_5 : color_1,
               footerTextColor: theme === 'light' ? color_1 : color_1,
               thirdLettersColor: theme === 'light' ? color_6 : color_7,
               primeLettersColor: theme === 'light' ? color_1 : color_5,
               backgroundColor_2: theme === 'light' ? color_2 : color_4,
               AppBackgroundColor: theme === 'light' ? color_1 : color_4,
               backgroundNav: theme === 'light'
                    ? `url('background_3_light.svg'), url( 'background_2.svg' ), url( 'background_1.svg' )`
                    : `url('background_3_dark.svg'), url( 'background_2.svg' ), url( 'background_1.svg'`,
          }
          )
     }, [theme]);


     return (
          <section className='pages-wrapper'>
               < HomePage
                    theme={theme}
                    state={state}
                    setTheme={setTheme}
                    Y_position={Y_position}
                    W_screenSize={W_screenSize}
                    scrollDirection={scrollDirection}
                    currentBrowser={currentBrowser}
               />
          </section>
     )
}

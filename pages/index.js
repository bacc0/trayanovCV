import { useEffect, useState, Fragment } from 'react'
import { useViewportScroll } from 'framer-motion'
import HomePage from '../_components/HomePage'
import Tech from '../_components/Tech'
import About from '../_components/About'


export default function Home() {

     var tempWindowWidth = 0
     var tempWindowHeight = 0

     const [scrollDirection, setScrollDirection] = useState('down')

     const [W_screenSize, set_W_screenSize] = useState(tempWindowWidth)
     const [H_screenSize, set_H_screenSize] = useState(tempWindowHeight)
     const [theme, setTheme] = useState('light')
     const { scrollYProgress } = useViewportScroll(0)

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

               if (checkScrollDirectionIsUp(event)) setScrollDirection('down')
               else setScrollDirection('up')
          }
          function checkScrollDirectionIsUp(event) {

               if (event.wheelDelta) return event.wheelDelta > 0
               return event.deltaY < 0
          }
     }, [])



     if (typeof window !== 'undefined') {
          window.addEventListener('resize', () => {

               set_W_screenSize(window.innerWidth)
               set_H_screenSize(window.innerHeight)
          })
     }

     return (
          <section className='pages-wrapper'>
               < HomePage
                    W_screenSize={W_screenSize} theme={theme}
                    setTheme={setTheme} scrollDirection={scrollDirection} />
               {/* {W_screenSize}--
             {H_screenSize} */}
               {/* < Tech/>
             < About/> */}


          </section>
     )
}

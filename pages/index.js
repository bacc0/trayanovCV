import { useEffect, useState, Fragment } from 'react'

import HomePage from '../_components/HomePage'
import Tech from '../_components/Tech'
import About from '../_components/About'


export default function Home() {

     var tempWindowWidth = 0
     var tempWindowHeight = 0

     // ---------------------------------    Detect window Size
     if (typeof window !== 'undefined') {
          var win = window,
          doc = document,
          docElem = doc.documentElement,
          body = doc.getElementsByTagName('body')[0],
          tempWindowWidth = win.innerWidth || docElem.clientWidth || body.clientWidth,
          tempWindowHeight = win.innerHeight || docElem.clientHeight || body.clientHeight;
     }

     const [W_screenSize, set_W_screenSize] = useState(tempWindowWidth)
     const [H_screenSize, set_H_screenSize] = useState(tempWindowHeight)

     if (typeof window !== 'undefined') {
          window.addEventListener('resize', () => {

               set_W_screenSize(window.innerWidth)
               set_H_screenSize(window.innerHeight)
          })
     }

     return (
          <section className='pages-wrapper'>
             < HomePage W_screenSize={W_screenSize}/>
             {W_screenSize}--
             {H_screenSize}
             {/* < Tech/>
             < About/> */}

           
          </section>
     )
}

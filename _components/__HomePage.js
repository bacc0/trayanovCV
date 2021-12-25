import { useMediaQuery } from '@mui/material'
import CombineSections from './_sections/_CombineSections'
import MenuAppBar from './MenuAppBar'
import PageNav from './PageNav'
import { useState } from 'react'


export default function HomePage({ 
     state, currentBrowser, theme, setTheme, Y_position,scrollDirection }) {
     
     const [onAnimationEnd, setOnAnimationEnd] = useState(false)

     const min_width_600px = useMediaQuery('(min-width:600px)')
     const logo_W_H = 230
     const strokeWidth = min_width_600px ? 1.2 : 1.5
     const animationTransition = '0ms'

     const { AppBackgroundColor, hrColor, bodyColor, backgroundNav } = state

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
          <>
               <MenuAppBar
                    state={state}
                    theme={theme}
                    setTheme={setTheme}
                    scrollDirection={scrollDirection}
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
                                   state={state}
                                   logo_W_H={logo_W_H}
                                   strokeWidth={strokeWidth}
                                   setOnAnimationEnd={setOnAnimationEnd}
                                   animationTransition={animationTransition}
                              />
                         </div>
                    </div>

                    <CombineSections
                         state={state}
                         theme={theme}
                         min_width_600px={min_width_600px}
                         onAnimationEnd={onAnimationEnd}
                         animationTransition={animationTransition}
                    />
               </div>
          </ >
     )
}


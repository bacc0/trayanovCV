import { useMediaQuery } from '@mui/material'
import CombineSections from './_sections/_CombineSections'
import MenuAppBar from './MenuAppBar'
import PageNav from './PageNav'
import { useState, useEffect, Fragment } from 'react'

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

     const { AppBackgroundColor, hrColor,secLettersColor,  bodyColor, backgroundNav_container, backgroundNav, backgroundNav_mobile, thirdLettersColor } = state

     const bodyPage = {
          backgroundColor: AppBackgroundColor,
          // background: `radial-gradient(circle closest-side, #7026A5, #040F1B)`,
          color: bodyColor,
          transition: `background-color ${animationTransition} ease, 
                                  color ${animationTransition} ease`,
     }

     const styleBackgroundTitle_container = {
          backgroundColor: AppBackgroundColor,
          width: '100%',
          'background-image': backgroundNav_container,
          backgroundPosition: `center ${Number(20 + (Y_position * -1800)).toFixed(1)}px,
                               center center`,
          backgroundSize: 536,
          backgroundRepeat: 'repeat-y, no-repeat',
          // opacity : opacityBackground,
          transition: `opacity 250ms ease`,

     }

     const styleBackgroundTitle_1 = {
          width: '100%',
          'background-image': min_width_600px ? backgroundNav : backgroundNav_mobile,
          backgroundPosition: `center -8px`,
          backgroundSize: 536,
          backgroundRepeat: 'no-repeat',
          // borderBottom: `1px solid ${hrColor}`,   
          borderBottom: `1px solid ${color_3}55`,
          borderTop: `1px solid ${color_3}55`,
     }

     const styleBackgroundTitle = {
          width: '100%',
          'background-image': `url('react_logo.svg')`,
          backgroundPosition: `30vw  -210px`,
          backgroundSize: 600,
          backgroundRepeat: 'no-repeat',
          // transform: 'rotate(30deg)',
          // borderTop: `0.3px solid ${color_3}55`,
           borderBottom: `0.3px solid ${secLettersColor}55`,
          overflow: 'hidden'
     }

     // const styleBackgroundTitle2 = {
     //      position: 'relative',
     //      top:93,
     //      left:79,
     //      width: 350,
     //      height: 350,
     //      'background-image': `url('react_logo.svg')`,
     //      backgroundPosition: `center center`,
     //      backgroundSize: 350,
     //      backgroundRepeat: 'no-repeat',
     //      transform: `rotate( ${Number( 35 + (Y_position * 100)).toFixed(0) * 6}deg)`,
     //      transition: `transform 10ms ease-in`
         
     // }

     return (
          <Fragment>
               <style jsx global>
                    {`
                         .progress {
                              width: 100%;
                              height: 0px;
                         }

                         .progress:before {
                              content: "";
                              position: absolute;
                              height: 1px;
                              width: ${Number((Y_position * 100)).toFixed(0)}%;
                              border-bottom: 1px solid ${thirdLettersColor};
                              transition: width 150ms ease-in;
                         }
                         
				`}
               </style>
               <div
                    className="progress"
                    style={{
                         position: 'sticky',
                         top: -1,
                         zIndex: 2000
                    }}
               />

               
               <MenuAppBar
                    state={state}
                    theme={theme}
                    setTheme={setTheme}
                    Y_position={Y_position}
                    currentBrowser={currentBrowser}
                    scrollDirection={scrollDirection}
                    min_width_600px={min_width_600px}
               />

               <div className='page' style={bodyPage} >

                    <div className='page-nav'
                    // style={styleBackgroundTitle_container}
                    >
                         <div
                              className='title-container vertical-center-container'
                              style={styleBackgroundTitle}
                         >
                              {/* <div style={styleBackgroundTitle2}>

               </div> */}
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
          </Fragment >
     )
}


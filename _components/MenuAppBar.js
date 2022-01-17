import { useState, useEffect, useRef } from 'react'
import { motion, Animate } from 'framer-motion'
import { Stack, IconButton, Typography, Toolbar, AppBar, Box, Hidden } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import LocalPostOfficeSharpIcon from '@mui/icons-material/LocalPostOfficeSharp'
import PhoneEnabledSharpIcon from '@mui/icons-material/PhoneEnabledSharp'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

import { useSelector, useDispatch } from 'react-redux'
import { themeActions } from '../store/themeState'
export default function MenuAppBar({
     state, currentBrowser }) {

     const dispatch = useDispatch();

     const scrollDirection = useSelector(state => state.scrollDirectionReducer.direction)
     const positionY = useSelector(state => state.Y_PositionSliceReducer.Y)
     const theme = useSelector(state => state.themeReducer.color)
     const min_width_600px = useSelector(state => state.min_width_600px_Reducer.value)




     const {
          strongText, thirdLettersColor, hrColorMain,
          AppBackgroundColor, animationTransition, secLettersColor } = state

     const renderCounter = useRef(0)
     renderCounter.current = renderCounter.current + 1

     const [appBarIsVisible, setAppBarIsVisible] = useState(false)
     const [marker, setMarker] = useState(false)

     useEffect(() => {
          if (positionY < 0.035) {

               if (marker) {
                    setAppBarIsVisible(true)
               } else {
                    setTimeout(() => { setAppBarIsVisible(true) }, 5400) //6200
                    setMarker(true)
               }
          } else {

               if (scrollDirection === 'up') {
                    appBarIsVisible !== false ? setAppBarIsVisible(false) : null
               }
               if (scrollDirection === 'down') {
                    appBarIsVisible !== true ? setAppBarIsVisible(true) : null
               }
          }
     }, [positionY]);

     const handleThemeChange = () => {
          dispatch(themeActions.TOGGLE_THEME())
     }
     const [transitionDirection, setTransitionDirection] = useState('down');

     useEffect(() => {

          setInterval(() => {
               if (transitionDirection !== scrollDirection) {

                    setTransitionDirection(scrollDirection)
               }
          }, 1400);

     }, [scrollDirection]);


     const AppBarStyle = {
          backgroundColor: currentBrowser !== 'firefox' ? `${AppBackgroundColor}cc` : `${AppBackgroundColor}fa`,

          '-webkit-backdrop-filter': `blur(10px)`,
          ' backdrop-filter': `blur(10px)`,
          color: hrColorMain,
          boxShadow: '0 0 0',
          borderBottom: `0.3px solid ${secLettersColor}55`,
          fontSize: 10,
          position: 'fixed',
          top: appBarIsVisible ? 0 : -150,
          transition: `top ${transitionDirection === 'up' ? '400ms' : '200ms'} linear`,
          'transition-delay': '1s',
          height: 65
     }

     const underAppBar = {
          height: 55,
          backgroundColor: state.primeLettersColor

     }
     const titleStyle = {
          fontSize: 12,
          letterSpacing: 1.2,
          fontWeight: '100',
          color: secLettersColor
     }
     const iconsStackStyle = {
          display: 'flex',
          justifyContent: min_width_600px ? 'space-between' : 'center',
          width: '100%',
     }

     const iconsStackStyle_Left = {
          display: 'flex',
          justifyContent: 'space-between',
          width: min_width_600px ? 249 : '83%',
          paddingRight: '2.6%',
          // backgroundColor: 'tan'
     }
     const iconsStackStyle_Right = {
          display: 'flex',
          justifyContent: min_width_600px ? 'flex-end' : 'center',
          // backgroundColor: 'tan',
          width: min_width_600px ? 200 : '16%',
     }
     const themeText = {
          marginTop: 8.5,
          fontSize: 9,
          color: thirdLettersColor,
          fontWeight: 300
     }

     const iconsStyle = {
          color: strongText,
          width: 40, height: 40,
          transition: `color ${animationTransition} ease`,
     }


     return (
          <Box>
               <AppBar style={AppBarStyle} position='fixed'>
                    <div>
                         <Toolbar
                              style={{
                                   maxWidth: min_width_600px ? 546 : 398,
                                   margin: '0 auto',
                                   height: 65,
                              }}
                         >
                              <Stack
                                   direction='row'
                                   spacing={1}
                                   style={iconsStackStyle}
                              >
                                   <span style={iconsStackStyle_Left} >
                                        <IconButton
                                             href={'https://www.linkedin.com/in/veselin-trayanov-219506171/'} aria-label='LinkedIn Icon' style={iconsStyle}
                                        >
                                             <LinkedInIcon />
                                        </IconButton>
{/* {positionY} */}
                                        <IconButton
                                             href={`tel: 00447590010066`}
                                             aria-label='Phone Icon' style={iconsStyle}
                                        >
                                             <PhoneEnabledSharpIcon />
                                        </IconButton>

                                        <IconButton
                                             href={`mailto: bacco23@gmail.com`}
                                             aria-label='Local Icon' style={iconsStyle}
                                        >
                                             <LocalPostOfficeSharpIcon />
                                        </IconButton>

                                        <IconButton
                                             href={'https://www.google.com/maps/@51.4764334,-0.1572618,16.21z'}
                                             aria-label='Location Icon' style={iconsStyle}
                                        >
                                             <LocationOnSharpIcon />
                                        </IconButton>

                                        <IconButton
                                             href={'https://github.com/bacc0'}
                                             aria-label='GitHub Icon' style={iconsStyle}
                                        >
                                             <GitHubIcon />
                                        </IconButton>
                                   </span>
                                   {/*  { min ? 'yes': 'no' }   */}


                                   <span style={iconsStackStyle_Right}>
                                        <IconButton
                                             onClick={() => handleThemeChange()}
                                             aria-label='theme icon'
                                             style={{ ...iconsStyle, ...{ color: thirdLettersColor } }}
                                        >
                                             {theme === 'light'
                                                  ? <DarkModeIcon />
                                                  : <LightModeIcon />
                                             }
                                        </IconButton>
                                   </span>
                              </Stack>
                         </Toolbar>
                    </div>
               </AppBar>
               <div style={underAppBar} />
          </Box >
     )
}



import { useState, useEffect, useRef } from 'react'
import { Stack, IconButton, Typography, Toolbar, AppBar, Box } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import LocalPostOfficeSharpIcon from '@mui/icons-material/LocalPostOfficeSharp'
import PhoneEnabledSharpIcon from '@mui/icons-material/PhoneEnabledSharp'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

import { useSelector, useDispatch } from 'react-redux'
import { themeActions } from '../store/themeState'

export default function MenuAppBar({ currentBrowser }) {

     const dispatch = useDispatch();

     const scrollDirection = useSelector(state => state.scrollDirectionReducer.value)
     const positionY = useSelector(state => state.Y_PositionSliceReducer.value)
     const theme = useSelector(state => state.themeReducer.color)
     const min_width_600px = useSelector(state => state.min_width_600px_Reducer.value)
     const colors = useSelector(state => state.appColorsReducer.value)

     const {
          strongText, thirdLettersColor, hrColorMain, primeLettersColor,
          AppBackgroundColor, secLettersColor } = colors

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
          // backgroundColor: `#FFFFFF`,

          '-webkit-backdrop-filter': `blur(10px)`,
          ' backdrop-filter': `blur(10px)`,
          color: hrColorMain,
          boxShadow: '0 0 0',
          borderBottom: `0.3px solid ${secLettersColor}55`,
          fontSize: 10,
          position: 'fixed',
          height: 75,
          paddingTop: 5,

          top: appBarIsVisible ? -1 : -80,
          transform: `scaleY(${appBarIsVisible ? 1 : 0.8})`,

          transition: `top 400ms linear,
                 transform ${scrollDirection === 'up' ? 400 : 0}ms linear`,
          'transition-delay': `1.2s `
     }

     const ToolbarStyle = {
          maxWidth: min_width_600px ? 546 : 398,
          margin: '0 auto',
          height: 65,

          transform:
               `scaleY(${appBarIsVisible
                    ? 1
                    : min_width_600px ? 0.62 : 0.38}) 
                scaleX(${appBarIsVisible
                    ? 1
                    : min_width_600px ? 0.62 : 0.38})`,
          transition: `transform 300ms ease-in`,
     }

     const underAppBar = {
          height: min_width_600px ? 70 : 60,
          backgroundColor: primeLettersColor,
          backgroundColor: 'transparent',
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
     }
     const iconsStackStyle_Right = {
          display: 'flex',
          justifyContent: min_width_600px ? 'flex-end' : 'center',
          width: min_width_600px ? 200 : '16%',
     }
     const iconsStyle = {
          color: strongText,
          width: 40, height: 40,
          transition: `color 500ms ease`,
     }


     return (
          <Box>
               <AppBar style={AppBarStyle} position='fixed'>
                    <div>
                         <Toolbar style={ToolbarStyle}>
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



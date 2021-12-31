import { useState, useEffect } from 'react'

import { motion, AnimatePresence } from 'framer-motion'

import { Stack, IconButton, Typography, Toolbar, AppBar, Box, Hidden } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import NightlightRoundIcon from '@mui/icons-material/NightlightRound'
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import LocalPostOfficeSharpIcon from '@mui/icons-material/LocalPostOfficeSharp'
import PhoneEnabledSharpIcon from '@mui/icons-material/PhoneEnabledSharp'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

export default function MenuAppBar({ 
     state, theme, setTheme, Y_position, scrollDirection, min_width_600px, currentBrowser }) {

     const { hrColor, hrColorMain, AppBackgroundColor, animationTransition, secLettersColor } = state

     const [heightAppBar, setHeightAppBar] = useState(0)
     const [appBarIsVisible, setAppBarIsVisible] = useState(true)

     useEffect(() => {
          setTimeout(() => {
               setHeightAppBar(65)
          }, 2000);
     }, []);

     useEffect(() => {
          if (Y_position < 0.02) {
               setAppBarIsVisible(true)
          } else {
               scrollDirection === 'up' ? setAppBarIsVisible(false) : setAppBarIsVisible(true)
          }
     }, [Y_position]);

     const handleThemeChange = () => {
          setTheme(theme === 'light' ? 'dark' : 'light')
     }
     const AppBarStyle = {
          backgroundColor: currentBrowser === 'firefox' ? `${AppBackgroundColor}fa` : `${AppBackgroundColor}77`,
          '-webkit-backdrop-filter': `blur(10px)`,
          ' backdrop-filter': `blur(10px)`,
          color: hrColorMain,
          boxShadow: '0 0 0',
          borderBottom: `0.3px solid ${secLettersColor}55`,
          fontSize: 10,
          height: appBarIsVisible ? 65 : 0,
          transition: `height 800ms ease`,
     }
     const ToolbarContainer = {
          // borderBottom: `1px solid blck`,
          position: 'relative',
          top: appBarIsVisible ? 0 : -65,
          transition: `top 600ms ease`
     }
     const underAppBar = {
          height: heightAppBar,
          'background-color': AppBackgroundColor,


          

          width: '100%',
          'background-image': `url('react_logo.svg')`,
          backgroundPosition: `30vw  -144px`,
          backgroundSize: 600,
          backgroundRepeat: 'no-repeat',

          transition: `background-image 0ms ease,
          background-color 350ms ease, 
          height 800ms ease`,
     }
     const titleStyle = {
          fontSize: 12,
          letterSpacing: 1.2,
          fontWeight: '100',
          color: secLettersColor
     }
     const iconsStackStyle = {
          display: min_width_600px ? 'block' : 'flex',
          justifyContent: 'space-between',
          width: min_width_600px ? 'auto' : '100%'
     }
     const iconsStyle = {
          color: hrColorMain,
          transition: `color ${animationTransition} ease`,
     }


     return (
          <Box>
           
                    <motion.div
                         initial={{ opacity: 0, pathLength: 0, y: -65 }}
                         animate={{ opacity: 1, pathLength: 1, y: 0 }}
                         transition={{ delay: 1.8, duration: 1, ease: 'easeInOut' }}
                    >
                         <AppBar style={AppBarStyle} position='fixed'>
                              <motion.div
                                   initial={{ opacity: 0, y: -65 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ delay: 2, duration: 1, ease: 'easeInOut' }}
                                   style={ToolbarContainer}
                              >
                                   <Toolbar
                                        style={{
                                             maxWidth: min_width_600px ? 730 : 360,
                                             margin: '0 auto'
                                        }}
                                   >
                                        <Hidden smDown>
                                             <Typography style={titleStyle} sx={{ flexGrow: 1 }}>
                                                  Veselin Trayanov 
                                             </Typography>
                                        </Hidden>
                                        <Stack
                                             direction='row'
                                             spacing={1}
                                             style={iconsStackStyle}
                                        >
                                             <IconButton
                                                  href={'https://www.linkedin.com/in/veselin-trayanov-219506171/'} aria-label='LinkedIn Icon' style={iconsStyle}
                                             >
                                                  <LinkedInIcon />
                                             </IconButton>

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

                                             <IconButton
                                                  onClick={() => handleThemeChange()}
                                                  aria-label='theme icon' style={iconsStyle}
                                             >
                                                  {theme === 'light'
                                                       ? <NightlightRoundIcon />
                                                       : <LightModeIcon />
                                                  }
                                             </IconButton>
                                        </Stack>
                                   </Toolbar>
                              </motion.div>
                         </AppBar>
                         <div style={underAppBar} />
                    </motion.div>
          </Box >
     )
}

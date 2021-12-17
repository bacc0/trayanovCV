import { useState, useEffect } from 'react'

import { motion, AnimatePresence } from 'framer-motion'

import { Stack, IconButton, Typography, Toolbar, AppBar, Box } from '@mui/material'

import LightModeIcon from '@mui/icons-material/LightMode'
import NightlightRoundIcon from '@mui/icons-material/NightlightRound'

export default function MenuAppBar({
     theme, setTheme, hrColor, hrColorMain,
     AppBackgroundColor, scrollDirection, Y_position,
     thirdLettersColor, currentBrowser,  animationTransition
}) {
     
     const [heightAppBar, setHeightAppBarl] = useState(0)

     useEffect(() => {
          setTimeout(() => {
               setHeightAppBarl(65)
          }, 2000);
     }, []);


     const handleThemeChange = () => {
          setTheme(theme === 'light' ? 'dark' : 'light')
     }

     const AppBarStyle = {
          // backgroundColor: currentBrowser === 'firefox' ? 'red' : 'transparent',
          backgroundColor: 'transparent',
          '-webkit-backdrop-filter': `blur(10px)`,
          ' backdrop-filter': `blur(10px)`,
          color: hrColorMain,
          boxShadow: '0 0 0',
          borderBottom: `1px solid ${hrColor}99`,
          fontSize: 10,
          height: scrollDirection === 'up' ? 0 : 65,
          transition: `height 800ms ease`
     }
     const ToolbarContainer = {
          borderBottom: `1px solid blck`,
          position: 'relative',
          top: scrollDirection === 'up' ? -65 : 0,
          transition: `top 600ms ease`
     }
     const underAppBAr = {
          height: heightAppBar,
          'background-color': AppBackgroundColor,
          transition: `background-color 350ms ease, 
          height 800ms ease`,
     }
     const progressLineStyle = {
          position: 'fixed',
          top: 0,
          zIndex: 1100,
          width: `${(Y_position * 100).toFixed(0)}%`,
          height: 0.75,
          marginTop: 0,
          backgroundColor: thirdLettersColor,
          transition: `width 150ms ease`
     }


     return (
          <Box  >
               <div>
                    <motion.div
                         initial={{ opacity: 0, pathLength: 0, y: -65 }}
                         animate={{ opacity: 1, pathLength: 1, y: 0 }}
                         transition={{ delay: 1.8, duration: 1, ease: 'easeInOut' }}
                    // exit={{ opacity: 0, y: -6 }}
                    >
                         <AppBar style={AppBarStyle} position='fixed'>
                              <motion.div
                                   initial={{ opacity: 0, y: -65 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ delay: 2, duration: 1, ease: 'easeInOut' }}
                                   style={ToolbarContainer}>
                                   <Toolbar >
                                        <Typography style={{ fontSize: 12 }} sx={{ flexGrow: 1 }}>
                                             Veselin Trayanov
                                        </Typography>
                                        <Stack
                                             direction='row'
                                             spacing={1}
                                             onClick={() => handleThemeChange()}
                                        >
                                             <IconButton aria-label='fingerprint' 
                                             style={{ 
                                                  color: hrColorMain, 
                                                  transition: `color ${animationTransition} ease`
                                              }}
                                             >
                                                  {
                                                       theme === 'light'
                                                            ? <NightlightRoundIcon />
                                                            : <LightModeIcon />
                                                  }
                                             </IconButton>
                                        </Stack>
                                   </Toolbar>
                              </motion.div>
                         </AppBar>
                         <div style={underAppBAr} />
                         <hr style={progressLineStyle} />
                    </motion.div>
               </div>

          </Box >
     )
}

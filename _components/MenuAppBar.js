import { useState, useEffect } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { motion, AnimatePresence } from 'framer-motion'
import MenuItem from '@mui/material/MenuItem'

import { Stack, IconButton } from '@mui/material'


import LightModeIcon from '@mui/icons-material/LightMode'
import NightlightRoundIcon from '@mui/icons-material/NightlightRound'
import ProgressLineSVG from './ProgressLineSVG'
export default function MenuAppBar({ theme, setTheme, hrColor, hrColorMain, AppBackgroundColor, scrollDirection }) {
     const [anchorEl, setAnchorEl] = useState(null)

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
          backgroundColor: 'transparent',
          '-webkit-backdrop-filter': `blur(10px)`,
          ' backdrop-filter': `blur(10px)`,
          color: hrColorMain,
          boxShadow: '0 0 0',
          borderBottom: `1px solid ${hrColor}99`,
          fontSize: 10,
          // display: scrollDirection === 'up' ? 'none' : 'block',
          height: scrollDirection === 'up' ? 0 : 65,

          transition: `height 800ms ease`

     }

     return (
          <Box  >
               <div style={{}}>
                    <motion.div
                         initial={{ opacity: 0, pathLength: 0, y: -65 }}
                         animate={{ opacity: 1, pathLength: 1, y: 0 }}
                         transition={{ delay: 1.8, duration: 1, ease: 'easeInOut' }}

                         exit={{ opacity: 0, y: -6 }}
                    >
                         <AppBar position='fixed' color='transparent'
                              style={AppBarStyle}
                         >

                              <AnimatePresence >
                              {
                              scrollDirection === 'down'  &&( 
                                   <motion.div
                                   transition={{ delay: 0, duration: 0.5, ease: 'easeInOut' }}
                                   exit={{ y: -65 }}>
                              <motion.div
                                   initial={{ opacity: 0, pathLength: 0, y: -65 }}
                                   animate={{ opacity: 1, pathLength: 1, y: 0 }}
                                   transition={{ delay: 1.9, duration: 1, ease: 'easeInOut' }}
                                   exit={{ y: -65 }}
                                   style={{
                                        borderBottom: `1px solid blck`,

                                        // position: 'relative',
                                        // top: scrollDirection === 'up' ? -65 : 0,

                                        // transition: `height 800ms ease`

                                   }}>
                                   <Toolbar >
                                        <Typography style={{ fontSize: 12 }} sx={{ flexGrow: 1 }}>
                                             Veselin Trayanov
                                        </Typography>

                                        <Stack direction='row' spacing={1}

                                             onClick={() => handleThemeChange()}
                                        >
                                             <IconButton aria-label='fingerprint' style={{ color: hrColorMain }}>
                                                  {
                                                       theme === 'light'
                                                            ? <LightModeIcon />
                                                            : <NightlightRoundIcon />
                                                  }
                                             </IconButton>

                                        </Stack>




                                   </Toolbar>
                              </motion.div>
                              </motion.div>
                              )}
                              </AnimatePresence>
                         


                    </AppBar>
                    <div style={{
                         height: heightAppBar,
                         backgroundColor: AppBackgroundColor,
                         transition: `background-color 350ms ease`,
                         transition: `height 800ms ease`
                    }} />
               </motion.div>
          </div>
          </Box >
     )
}

import DarkModeIcon from '@mui/icons-material/DarkMode';
import GitHubIcon from '@mui/icons-material/GitHub';
import LightModeIcon from '@mui/icons-material/LightMode';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPostOfficeSharpIcon from '@mui/icons-material/LocalPostOfficeSharp';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import styles from './MenuAppBar.module.scss';
import PhoneEnabledSharpIcon from '@mui/icons-material/PhoneEnabledSharp';
import { AppBar, Box, IconButton, Stack, Toolbar } from '@mui/material';
import { themeActions } from '../../store/themeState';
import { TState } from '../../store/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { useEffect, useRef, useState } from 'react';


const MenuAppBar: React.FC<{}> = () => {


     const dispatch: Dispatch<any> = useDispatch();

     const scrollDirection: string = useSelector((state: TState) => state.scrollDirectionReducer.value);
     const positionY = useSelector((state: TState) => state.Y_PositionReducer.value);
     const theme = useSelector((state: TState) => state.themeReducer.color);
     const min_width_600px  = useSelector((state: TState) => state.min_width_600px_Reducer.value);
     const colors = useSelector((state: TState) => state.appColorsReducer.value);
     const currentBrowser = useSelector((state: TState) => state.currentBrowserReducer.value);

     const { strongText, thirdLettersColor, hrColorMain, AppBackgroundColor, secLettersColor } = colors;

     const renderCounter = useRef(0);
     renderCounter.current = renderCounter.current + 1;

     const [appBarIsVisible, setAppBarIsVisible] = useState(false);
     const [marker, setMarker] = useState(false);

     useEffect(() => {
          if (positionY < 0.035) {
               if (marker) {
                    setAppBarIsVisible(true)
               } else {
                    setTimeout(() => { setAppBarIsVisible(true) }, 4700);
                    setMarker(true);
               }
          } else {

               if (scrollDirection === 'up') {
                    appBarIsVisible !== false ? setAppBarIsVisible(false) : null;
               }
               if (scrollDirection === 'down') {
                    appBarIsVisible !== true ? setAppBarIsVisible(true) : null;
               }
          }
     }, [positionY]);

     const handleThemeChange = () => {
          dispatch(themeActions.TOGGLE_THEME());
     };
     const [transitionDirection, setTransitionDirection] = useState('down');

     useEffect(() => {
          setInterval(() => {
               if (transitionDirection !== scrollDirection) {
                    setTransitionDirection(scrollDirection);
               };
          }, 1400);

     }, [scrollDirection]);

     const [navBackgroundColor, setNavBackgroundColor] = useState(`${AppBackgroundColor}fd`);

     useEffect(() => {
          setNavBackgroundColor(
               currentBrowser === 'firefox'
                    ? `${AppBackgroundColor}fe`
                    : `${AppBackgroundColor}cc`
          )
     }, [currentBrowser, AppBackgroundColor]);

     const AppBarStyle = {
          top: appBarIsVisible ? -1 : -82,
          color: hrColorMain,
          boxShadow: '0 0 0',
          transform: `scaleY(${appBarIsVisible ? 1 : 0.8})`,
          transition: `top 330ms linear, transform ${scrollDirection === 'up' ? 330 : 0}ms linear`,
          borderBottom: `0.3px solid ${secLettersColor}55`,
          // transitionDelay: `1.2s`,
          backgroundColor: navBackgroundColor,

     } as React.CSSProperties;

     const ToolbarStyle = {
          margin: '0 auto',
          maxWidth: min_width_600px ? 546 : 398,
          transform:
               `scaleY(${appBarIsVisible ? 1 : 0.62}) 
                scaleX(${appBarIsVisible ? 1 : 0.62})`,
          transition: `transform 230ms ease-in`,
          // transitionDelay: appBarIsVisible ? `0.09s` : `0s`
     };
     const underAppBar = {
          height: min_width_600px ? 70 : 60,
          backgroundColor: 'transparent',
     };
     const iconsStackStyle = {
          justifyContent: min_width_600px ? 'space-between' : 'center',
     };
     const iconsStackStyle_Left = {
          width: min_width_600px ? 249 : '83%',
          paddingRight: '2.6%',
     };
     const iconsStackStyle_Right = {
          justifyContent: min_width_600px ? 'flex-end' : 'center',
          width: min_width_600px ? 200 : '16%',
     };
     const iconsStyle = {
          color: strongText,
          transition: `color 500ms ease`,
     };


     return (
          <Box>
               <style jsx global>
                    {`
                         .App_Bar_Style {
                              background-color: ${AppBackgroundColor}cc; 
                              -webkit-backdrop-filter: blur(10px);
                              backdrop-filter: blur(10px);
                         }
                       
                         @supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
                              .App_Bar_Style {
                                  background-color: ${AppBackgroundColor}
                              }
                         }
				`}
               </style>

               <AppBar style={AppBarStyle} position='fixed'
                    className={`App_Bar_Style ${styles.App_Bar_Style_external}`}
               >
                    <div >
                         <Toolbar style={ToolbarStyle} className={styles.Toolbar_Style} >
                              <Stack
                                   direction='row'
                                   spacing={1}
                                   style={iconsStackStyle}
                                   className={styles.icons_StackStyle}
                              >
                                   <span style={iconsStackStyle_Left}
                                        className={styles.icons_StackStyle_Left}
                                   >
                                        <IconButton
                                             href={'https://www.linkedin.com/in/veselin-trayanov-219506171/'} aria-label='LinkedIn Icon'
                                             style={iconsStyle}
                                             className={styles.icons_Style}
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
                                   </span>
                                   <span style={iconsStackStyle_Right}
                                        className={styles.icons_StackStyle_Right}
                                   >
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
          </Box>
     )
};

export default MenuAppBar;

import DarkModeIcon from '@mui/icons-material/DarkMode';
import GitHubIcon from '@mui/icons-material/GitHub';
import LightModeIcon from '@mui/icons-material/LightMode';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPostOfficeSharpIcon from '@mui/icons-material/LocalPostOfficeSharp';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import PhoneEnabledSharpIcon from '@mui/icons-material/PhoneEnabledSharp';
import { AppBar, Box, IconButton, Stack, Toolbar } from '@mui/material';
import { IColors } from '../store/appColors';
import { themeActions } from '../store/themeState';
import { TState } from '../store/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { useEffect, useRef, useState } from 'react';


interface IHandleThemeChange {
     (): void;
};
interface IToolbarStyle {
     margin: string;
     height: number;
     maxWidth: number;
     transform: string;
     transition: string;
     transitionDelay: string;
};
interface IUnderAppBar {
     height: number;
     backgroundColor: string;
};
interface IIconsStackStyle {
     display: string;
     justifyContent: string;
     width: string;
};
interface IIconsStackStyle_Left {
     display: string;
     justifyContent: string;
     width: string | number;
     paddingRight: string;
};
interface IIconsStackStyle_Right {
     display: string;
     justifyContent: string;
     width: string | number;
};
interface IIconsStyle {
     color: string;
     width: number;
     height: number;
     transition: string;
};


const MenuAppBar: React.FC<{}> = () => {


     const dispatch: Dispatch<any> = useDispatch();

     const scrollDirection: string = useSelector((state: TState) => state.scrollDirectionReducer.value);
     const positionY: number = useSelector((state: TState) => state.Y_PositionReducer.value);
     const theme: string = useSelector((state: TState) => state.themeReducer.color);
     const min_width_600px: boolean = useSelector((state: TState) => state.min_width_600px_Reducer.value);
     const colors: IColors = useSelector((state: TState) => state.appColorsReducer.value);
     const currentBrowser: string = useSelector((state: TState) => state.currentBrowserReducer.value);

     const { strongText, thirdLettersColor, hrColorMain, AppBackgroundColor, secLettersColor }:
     { strongText: string, thirdLettersColor: string,
          hrColorMain: string, AppBackgroundColor: string, secLettersColor: string } = colors;

     const renderCounter = useRef<number>(0);
     renderCounter.current = renderCounter.current + 1;

     const [appBarIsVisible, setAppBarIsVisible] = useState<boolean>(false);
     const [marker, setMarker] = useState<boolean>(false);

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

     const handleThemeChange: IHandleThemeChange = () => {
          dispatch(themeActions.TOGGLE_THEME());
     };
     const [transitionDirection, setTransitionDirection] = useState<string>('down');

     useEffect(() => {
          setInterval(() => {
               if (transitionDirection !== scrollDirection) {
                    setTransitionDirection(scrollDirection);
               };
          }, 1400);

     }, [scrollDirection]);

     const [navBackgroundColor, setNavBackgroundColor] = useState<string>(`${AppBackgroundColor}fd`);

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
          height: 75,
          fontSize: 10,
          position: 'fixed',
          boxShadow: '0 0 0',
          transform: `scaleY(${appBarIsVisible ? 1 : 0.8})`,
          transition: `top 330ms linear, transform ${scrollDirection === 'up' ? 330 : 0}ms linear`,
          paddingTop: 5,
          borderBottom: `0.3px solid ${secLettersColor}55`,
          transitionDelay: `1.2s`,
          backgroundColor: navBackgroundColor,

     } as React.CSSProperties;

     const ToolbarStyle: IToolbarStyle = {
          margin: '0 auto',
          height: 65,
          maxWidth: min_width_600px ? 546 : 398,
          transform:
               `scaleY(${appBarIsVisible ? 1 : 0.62}) 
                scaleX(${appBarIsVisible ? 1 : 0.62})`,
          transition: `transform 230ms ease-in`,
          transitionDelay: appBarIsVisible ? `0.09s` : `0s`
     };
     const underAppBar: IUnderAppBar = {
          height: min_width_600px ? 70 : 60,
          backgroundColor: 'transparent',
     };
     const iconsStackStyle: IIconsStackStyle = {
          display: 'flex',
          justifyContent: min_width_600px ? 'space-between' : 'center',
          width: '100%',
     };
     const iconsStackStyle_Left: IIconsStackStyle_Left = {
          display: 'flex',
          justifyContent: 'space-between',
          width: min_width_600px ? 249 : '83%',
          paddingRight: '2.6%',
     };
     const iconsStackStyle_Right: IIconsStackStyle_Right = {
          display: 'flex',
          justifyContent: min_width_600px ? 'flex-end' : 'center',
          width: min_width_600px ? 200 : '16%',
     };
     const iconsStyle: IIconsStyle = {
          color: strongText,
          width: 40, height: 40,
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

               <AppBar style={AppBarStyle} className='App_Bar_Style' position='fixed'>
                    <div >
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
          </Box>
     )
};

export default MenuAppBar

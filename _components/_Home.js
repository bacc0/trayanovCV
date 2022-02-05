import * as React from 'react'
import { Paper, useMediaQuery } from '@mui/material'
import CombineSections from './_sections/_CombineSections'
import MenuAppBar from './MenuAppBar'
import PageNav from './PageNav'
import { useState, useEffect } from 'react'
import Image from 'next/image'



import { useDispatch, useSelector } from 'react-redux'

import { appColorsActions } from '../store/appColors'

import styles from './_Home.module.scss';

const Home = () => {


     const dispatch = useDispatch()

     const theme = useSelector(state => state.themeReducer.color)


     const min_width_600px = useSelector(state => state.min_width_600px_Reducer.value)
     const positionY = useSelector(state => state.Y_PositionReducer.value)
     const scrollDirection = useSelector(state => state.scrollDirectionReducer.value)

     const colors = useSelector(state => state.appColorsReducer.value)
     const { AppBackgroundColor, bodyColor } = colors

     // console.log('!!!!!!!!!!!!!!!!🦊 Background', colors.AppBackgroundColor)

     const [opacityBG, setOpacityBG] = useState(0)

     const gradient = `linear-gradient( transparent ,transparent ,transparent, transparent ,transparent, transparent, transparent, transparent, #11111105, #11111107)`

     useEffect(() => {
          setInterval(() => {
               setOpacityBG(1)
          }, 2500);
     }, [])

     useEffect(() => {
          dispatch(appColorsActions.UPDATE_APP_COLORS(theme))
     }, [theme]);

     const styleLocal = {

          pageRoot: {
               backgroundColor: AppBackgroundColor,
               // background: `radial-gradient(circle closest-side, #7026A5, #040F1B)`,
               color: bodyColor,
               // transition: `background-color 0ms ease, 
               //              color 0ms ease`,
          },
          navRoot: {
               // width: '100%',
               // height: min_width_600px ? 216 : '100vw',
               position: 'relative',
               top: -4
               // top: +(positionY * (min_width_600px ? 500 : 800)).toFixed(0),

               // transform:
                   

               //       `scaleY(${scrollDirection === 'down' 
               //       ? 1
               //       : 0.62}) 
               //       scaleX(${scrollDirection === 'down' 
               //       ? 1 
               //       : 0.62})`,

               //      transition: `transform 300ms linear`,
                    // transitionDelay: `1.2s`

          },
          nav: {
               // height: '100%',
               // margin: '0 auto',
               // display: 'flex',
               // alignItems: 'flex-end',
               // justifyContent: 'center',

          },
          backAnimationContainer: {
               // display: 'flex',
               // justifyContent: 'flex-end',
               // overflow: 'hidden',
               // top: 0,
               // position: `absolute`,
               // width: '100%',
               // transition: `opacity 4s linear`,
               background: gradient,
               opacity: opacityBG,
               height: min_width_600px ? 294 : `calc(100vw + 55px)`,

          },

          backAnimation: {
               // position: `absolute`,
               animation: `rotate 40s linear infinite`,
               // transition: `opacity 4s linear`,
               // top: min_width_600px ? 25 : '60vw',
               opacity: opacityBG,
               // position: 'relative',
               // top: -100

          },
          CombineSectionsUpper: {
               background: AppBackgroundColor,
               // background: 'red',
               top: 8 + -(positionY * (min_width_600px ? 200 : 800)).toFixed(0),
               position: 'relative',
               clear: 'both',
               height: min_width_600px ? 65 : 200
          },
          CombineSectionsContainer: {
               // marginTop: min_width_600px ? -65 : -200 ,
               position: 'relative',
               top: min_width_600px ? -14 : -8,
               zIndex: 200,
               backgroundColor: AppBackgroundColor,

               // backgroundColor:'tan'
          }
     }

     const backAnimation = (
          <div
               style={styleLocal.backAnimationContainer}
               className={styles.back_Animation_Container}
          >
               <div
                    style={styleLocal.backAnimation}
                    className={styles.back_Animation}
               >
                    <Image
                         src={'/react_logo.svg'}
                         width={min_width_600px ? 600 : 500}
                         height={min_width_600px ? 600 : 500}
                    />
               </div>
          </div>
     )

     useEffect(() => {

          console.log(positionY)
     }, [positionY]);


     return (
          <Paper style={{ background: AppBackgroundColor }} className={styles.home_root}>
               <MenuAppBar />
               {backAnimation}



               <div
                    style={styleLocal.pageRoot}
                    className={styles.page_Root}
               >
                    <div
                         style={styleLocal.navRoot}
                         className={styles.nav_Root}
                    >
                         <div
                              style={styleLocal.nav}
                              className={styles.nav}
                         >
                              <PageNav />
                         </div>
                    </div>
                    {/* <div style={styleLocal.CombineSectionsUpper}>
                    </div> */}
                    <div style={styleLocal.CombineSectionsContainer}>
                         <CombineSections />
                    </div>
               </div>
          </Paper>
     )
}

export default React.memo(Home);

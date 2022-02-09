import * as React from 'react';
import CombineSections from '../sections/_CombineSections';
import Image from 'next/image';
import MenuAppBar from './MenuAppBar';
import PageNav from './PageNav';
import styles from './Home.module.scss';
import { appColorsActions } from '../../store/appColors';
import { Paper } from '@mui/material';
import { TState } from '../../store/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { useEffect, useState } from 'react';


const Home: React.FC = () => {


     const dispatch: Dispatch<any> = useDispatch();

     const theme = useSelector((state: TState) => state.themeReducer.color);
     const min_width_600px = useSelector((state: TState) => state.min_width_600px_Reducer.value);
     const positionY = useSelector((state: TState) => state.Y_PositionReducer.value);
     const colors = useSelector((state: TState) => state.appColorsReducer.value);

     const { AppBackgroundColor, bodyColor } = colors;

     const [opacityBG, setOpacityBG] = useState(0);

     const gradient = `linear-gradient( transparent ,transparent ,transparent, transparent ,transparent, transparent, transparent, transparent, #11111105, #11111107)`;

     useEffect(() => {
          setInterval(() => {
               setOpacityBG(1)
          }, 2500);
     }, []);

     useEffect(() => {
          dispatch(appColorsActions.UPDATE_APP_COLORS(theme))
     }, [theme]);

     const styleLocal = {
          pageRoot: {
               backgroundColor: AppBackgroundColor,
               // background: `radial-gradient(circle closest-side, #7026A5, #040F1B)`,
               color: bodyColor,
          },
          backAnimationContainer: {
               background: gradient,
               opacity: opacityBG,
               height: min_width_600px ? 294 : `calc(100vw + 55px)`,
          },
          backAnimation: {
               animation: `rotate 40s linear infinite`,
               opacity: opacityBG,
          },
          CombineSectionsUpper: {
               background: AppBackgroundColor,
               top: 8 + -(positionY * (min_width_600px ? 200 : 800)).toFixed(0),
               position: 'relative',
               clear: 'both',
               height: min_width_600px ? 65 : 200
          },
          CombineSectionsContainer: {
               backgroundColor: AppBackgroundColor,
          }
     };

     const backAnimation = (
          <div style={styleLocal.backAnimationContainer}
               className={styles.back_Animation_Container}
          >
               <div style={styleLocal.backAnimation} className={styles.back_Animation}>
                    <Image
                         src={'/react_logo.svg'}
                         width={min_width_600px ? 600 : 500}
                         height={min_width_600px ? 600 : 500}
                    />
               </div>
          </div>
     );


     return (
          <Paper style={{ background: AppBackgroundColor }} className={styles.home_root}>
               <MenuAppBar />
               {backAnimation}
               <div style={styleLocal.pageRoot} className={styles.page_Root}>
                    <div className={styles.nav_Root}>
                         <div className={styles.nav}>
                              <PageNav />
                         </div>
                    </div>
                    <div style={styleLocal.CombineSectionsContainer} className={styles.Combine_Sections_Container}>
                         <CombineSections />
                    </div>
               </div>
          </Paper>
     )
};

export default React.memo(Home);

import _Home from './_Home';
import { appColorsActions } from '../store/appColors';
import { CurrentBrowserActions } from '../store/CurrentBrowser';
import { detect } from 'detect-browser';
import { min_width_600px_Actions } from '../store/minWidth';
import { scrollDirectionActions } from '../store/scrollDirection';
import { TState } from '../store/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { useEffect } from 'react';
import { useMediaQuery } from '@mui/material';
import { useScrollDirection } from 'react-use-scroll-direction';
import { useViewportScroll } from 'framer-motion';
import { useWindowSize } from 'react-window-size-hooks';
import { windowSizeActions } from '../store/windowSize';
import { Y_PositionActions } from '../store/PositionY';



const Home: React.FC<{}> = (): JSX.Element => {


     const dispatch: Dispatch<any> = useDispatch();
     const theme: string = useSelector((state: TState) => state.themeReducer.color);
     const positionY: number = useSelector((state: TState) => state.Y_PositionReducer.value);
     
     const tempMediaQuery: boolean = useMediaQuery('(min-width:600px)');

     useEffect(() => {
          dispatch(min_width_600px_Actions.MIN_WIDTH(tempMediaQuery));
     }, [tempMediaQuery]);

     // ---------------------------------    scroll to the top on reload

     useEffect(() => {
          window.scrollTo(0, 0)
     }, []);

     // ---------------------------------    Detect window Size

     var tempWindowWidth = 0
     var tempWindowHeight = 0

     if (typeof window !== 'undefined') {
          var win = window,
               doc = document,
               docElem = doc.documentElement,
               body = doc.getElementsByTagName('body')[0],
               tempWindowWidth = win.innerWidth || docElem.clientWidth || body.clientWidth,
               tempWindowHeight = win.innerHeight || docElem.clientHeight || body.clientHeight;
     }

     // ---------------------------------    Detect Browser Size ++

     const { width, height } = useWindowSize();

     useEffect(() => {
          dispatch(windowSizeActions.GET_WINDOW_WIDTH(window.innerWidth))
          dispatch(windowSizeActions.GET_WINDOW_HEIGHT(window.innerHeight))
     }, [width, height]);

     // ---------------------------------    Detect window scrolling Directions (UP DOWN)

     // useEffect(() => {
     //      var scrollableElement = document.body
     //      scrollableElement.addEventListener('wheel', checkScrollDirection)
     //      function checkScrollDirection(event) {

     //           if (checkScrollDirectionIsUp(event)) {
     //                dispatch(scrollDirectionActions.DOWN())
     //           }
     //           else {
     //                dispatch(scrollDirectionActions.UP())
     //           }
     //      }
     //      function checkScrollDirectionIsUp(event) {

     //           if (event.wheelDelta) return event.wheelDelta > 0
     //           return event.deltaY < 0
     //      }
     // }, [])

     // ---------------------------------    Mobile Detect window scrolling Directions (UP DOWN)

     // let oldValue = 0
     // let newValue = 0

     // useEffect(() => {
     //      window.addEventListener('scroll', (e) => {
     //           newValue = window.pageYOffset;
     //           if (oldValue < newValue) {
     //                dispatch(scrollDirectionActions.DOWN())

     //           } else if (oldValue > newValue) {
     //                dispatch(scrollDirectionActions.UP())
     //           }
     //           oldValue = newValue;
     //      })
     // }, [])

     // ---------------------------------    NEW! Detect window scrolling Directions (UP DOWN)

     const { isScrollingUp, isScrollingDown } = useScrollDirection();

     useEffect(() => {
          if (isScrollingUp) {
               dispatch(scrollDirectionActions.DOWN())
          }
          if (isScrollingDown) {
               dispatch(scrollDirectionActions.UP())
          }
     }, [isScrollingUp, isScrollingDown]);

     useEffect(() => {
          if (positionY === 0) {
               dispatch(scrollDirectionActions.DOWN())
          }
     }, [positionY]);

     //-------------------   Detect window scrolling position (0-100)

     const { scrollYProgress } = useViewportScroll();//0

     useEffect(() => {
          scrollYProgress.onChange((v) => (dispatch(Y_PositionActions.UPDATE_Y_POSITION(v))))
     }, [scrollYProgress]);

     // ---------------------------------    Detect Browser Name

     const browser = detect();
     
     if  (browser.name === 'firefox') {
          dispatch(CurrentBrowserActions.UPDATE_CURRENT_BROWSER('firefox'))
     } else {
          dispatch(CurrentBrowserActions.UPDATE_CURRENT_BROWSER(browser.name))
     }

     // ------------------------------------------------------------------ 

     useEffect(() => {
          dispatch(appColorsActions.UPDATE_APP_COLORS(theme))
     }, [theme]);

     return <_Home />
}


export default Home;



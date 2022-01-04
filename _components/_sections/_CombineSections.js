import Experience from './1_Experience'
import Technologies from './2_Technologies'
import AboutMe from './3_AboutMe'
import Footer from './4_Footer'
import Kkk from './Kkk'



export default function _CombineSections({
     state, theme, min_width_600px, animationTransition, Y_position }) {


     return (
          <>
                    {/* <div style={{ borderTop: `1px solid ${state.thirdLettersColor}`}}></div> */}

               {/* <Kkk
                    state={state}
                    min_width_600px={min_width_600px}
               /> */}
            <Experience
                    state={state}
                    min_width_600px={min_width_600px}
               />
                    <div style={{ borderTop: `0.3px solid ${state.separationsColor}`}}/>

                <Technologies
                    theme={theme}
                    min_width_600px={min_width_600px}
                    state={state}
                    animationTransition={animationTransition}
               />
                    <div style={{ borderTop: `0.3px solid ${state.separationsColor}`}}/>

               <AboutMe
                    state={state}
                    min_width_600px={min_width_600px}
                    animationTransition={animationTransition}
               />
                    <div style={{ borderTop: `0.3px solid ${state.separationsColor}`}}/>

               <Footer
                    state={state}
                    min_width_600px={min_width_600px}
               />
          </>
     )
}
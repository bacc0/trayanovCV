import Experience from './1_Experience'
import Technologies from './2_Technologies'
import AboutMe from './3_AboutMe'
import Footer from './4_Footer'


export default function _CombineSections({
     state, theme, min_width_600px, animationTransition, Y_position }) {


     return (
          <>
               <div>
                    <Experience
                         state={state}
                         min_width_600px={min_width_600px}
                    />
                    <Technologies
                         theme={theme}
                         min_width_600px={min_width_600px}
                         state={state}
                         animationTransition={animationTransition}
                    />
               </div>
               <AboutMe
                    state={state}
                    min_width_600px={min_width_600px}
                    animationTransition={animationTransition}
               />
               <Footer
                    state={state}
                    min_width_600px={min_width_600px}
               />
          </>
     )
}
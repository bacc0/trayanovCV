import useInView from 'react-cool-inview'
import { useEffect, useRef, useState } from 'react'


export default ({ src, min_width_600px, threshold = 0.35, color }) => {



     const Ref_0 = useRef()
     const mainColor = color

     const [isRef_0_Visible, setIsRef_0_Visible] = useState(true)
     const [opacity, setOpacity] = useState(0)
     const [logo_W, setLogo_W] = useState(243)
     const [logo_H, setLogo_H] = useState(143)


     const scrollHandler = () => {

          window.pageYOffset + window.innerHeight - 100 >= Ref_0.current.offsetTop
               ? setIsRef_0_Visible(true)
               : setIsRef_0_Visible(false)
     }

     useEffect(() => {
          window.addEventListener('scroll', scrollHandler);
          return () => window.removeEventListener('scroll', scrollHandler);
     }, [])


     useEffect(() => {
          setLogo_W(min_width_600px ? 243 : 310)
          setLogo_H(min_width_600px ? 209 : 247)
     }, [min_width_600px])

     useEffect(() => {
          isRef_0_Visible ? setOpacity(1) : setOpacity(0.05)
     }, [isRef_0_Visible])


     const stylePicture = {
          display: 'flex',
          justifyContent: min_width_600px ? 'flex-start' : 'center',
          opacity,
          transition: `opacity 777ms ease`,
          height: min_width_600px ? 180 : 240
     }

     return (
          <div
               ref={Ref_0}
               style={stylePicture}
          >
               <img 
               src={src} 
                alt={src} 
               width={logo_W} 
               height={ logo_H}
               >

               </img>
               {/* {experience_Image()} */}
               {/* {experience_Image} */}
          </div>
     )
}

import { useEffect, useRef, useState } from 'react'
// import useInView from 'react-cool-inview'
import { useInView } from 'react-intersection-observer'


export default ({ src, min_width_600px, threshold = 0.45 }) => {


     const [opacity, setOpacity] = useState(0)
     const [visible, setVisible] = useState(false)
     const [logo_W, setLogo_W] = useState(243)
     const [logo_H, setLogo_H] = useState(143)


     const {ref, inView, entry} = useInView({
          threshold: 0.5,
          triggerOnce: true,
     })


     useEffect(() => {
          if (inView) {
               setVisible(true),
               setInterval(() => { setOpacity(true) }, 100)
          }
          // console.log(inView)
     }, [inView])


     useEffect(() => {
          setLogo_W(min_width_600px ? 210 : 310)
          setLogo_H(min_width_600px ? 187 : 255)
     }, [min_width_600px])

     const stylePicture = {
          display: 'flex',
          justifyContent: min_width_600px ? 'flex-start' : 'center',
          opacity,
          transition: `opacity 777ms ease`,
          height: min_width_600px ? 180 : 240
     }

     return (
          <div ref={ref} style={stylePicture} >
               {visible && <img src={src} alt={src} width={logo_W} height={logo_H} />}
          </div>
     )
}

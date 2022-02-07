import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface IImgHandleInview {
     src: string;
     min_width_600px: boolean;
     threshold?: number;
     width: number;
};

interface IStylePicture {
     display: string;
     justifyContent: string;
     opacity: number;
     transition: string;
     height: number;
};


const ImgHandleInview: React.FC<IImgHandleInview> =
     ({ src, min_width_600px, threshold = 0.5, width }): JSX.Element => {


          const [opacity, setOpacity] = useState<number>(0);
          const [visible, setVisible] = useState<boolean>(false);
          const [logo_W, setLogo_W] = useState<number>(243);
          const [logo_H, setLogo_H] = useState<number>(143);

          const { ref, inView, entry } = useInView({
               threshold,
               triggerOnce: true,
          });

          useEffect(() => {
               if (inView) {
                    setVisible(true),
                         setInterval(() => { setOpacity(1) }, 100)
               }
          }, [inView]);

          useEffect(() => {
               setLogo_W(min_width_600px ? width : 310)
               setLogo_H(min_width_600px ? 203 : 255)
          }, [min_width_600px]);

          const stylePicture: IStylePicture = {
               display: 'flex',
               justifyContent: min_width_600px ? 'flex-start' : 'center',
               opacity,
               transition: `opacity 2000ms ease`,
               height: min_width_600px ? 180 : 240
          };

          return (
               <div ref={ref} style={stylePicture} >
                    {visible && <img src={src} alt={src} width={logo_W} height={logo_H} />}
               </div>
          );
     };


export default ImgHandleInview;

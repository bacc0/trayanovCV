import * as React from 'react';
import AboutMe from './3_AboutMe';
import Box from '@mui/material/Box';
import Experience from './1_Experience';
import Footer from './4_Footer';
import styles from './_CombineSections.module.scss';
import Technologies from './2_Technologies';
import { motion } from 'framer-motion';
import { TState } from '../../store/index';
import { useSelector } from 'react-redux';
import { IColors } from '../../store/appColors';

interface IL_R_cardsStyle {
     m: number;
     maxWidth: string;
     boxShadow: number;
     borderLeft: number;
     backgroundColor: string;
};
interface ICardStyle {
     m: number;
     pb: number;
     width: string;
     height: number;
     boxShadow: number;
     borderLeft: number;
     backgroundColor: string;
};

export interface IProps {
     p_spacing: JSX.Element;
     L_R_cardsStyle?: IL_R_cardsStyle;
     cardStyle: ICardStyle;
};


const _CombineSections: React.FC<{}> = (): JSX.Element => {


     const min_width_600px: boolean = useSelector((state: TState) => state.min_width_600px_Reducer.value);
     const colors: IColors = useSelector((state: TState) => state.appColorsReducer.value);
     const { strongText, separationsColor, footerColor }:
          { strongText: string, separationsColor: string, footerColor: string } = colors;

     const p_spacing: JSX.Element = (<Box sx={{ height: '11px' }} />)

     const L_R_cardsStyle: IL_R_cardsStyle = {
          m: 0,
          maxWidth: '100%',
          boxShadow: 0,
          borderLeft: 0,
          backgroundColor: "transparent"
     };
     const cardStyle: ICardStyle = {
          m: 0,
          pb: 3,
          width: 'auto',
          height: 1,
          boxShadow: 0,
          borderLeft: 0,
          backgroundColor: "transparent",
     };


     return (
          <motion.div
               initial={{ opacity: 0., y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2, duration: 0.25, ease: 'easeInOut' }}
               className={styles.root_combine_sections}
          >
               <Box
                    sx={{
                         fontSize: min_width_600px ? 12 : 17,
                         lineHeight: min_width_600px ? 1.7 : 1.9,
                         fontWeight: min_width_600px ? 300 : 300,
                         color: strongText
                    }}
               >

                    <Experience
                         L_R_cardsStyle={L_R_cardsStyle}
                         cardStyle={cardStyle}
                         p_spacing={p_spacing}
                    />

                    <div style={{ borderTop: `0.3px solid ${separationsColor}` }} />

                    <Technologies
                         L_R_cardsStyle={L_R_cardsStyle}
                         cardStyle={cardStyle}
                         p_spacing={p_spacing}
                    />
                    <div style={{ borderTop: `0.3px solid ${separationsColor}` }} />

                    <AboutMe
                         L_R_cardsStyle={L_R_cardsStyle}
                         cardStyle={cardStyle}
                         p_spacing={p_spacing}
                    />
                    <div style={{ borderTop: `0.3px solid ${separationsColor}` }} />

                    <Footer
                         cardStyle={cardStyle}
                         p_spacing={p_spacing}
                    />
               </Box>
               <div style={{ borderTop: `0.3px solid ${footerColor}` }} />

          </motion.div>
     )
};

export default React.memo(_CombineSections);
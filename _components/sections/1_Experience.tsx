import Img_handle_inview from '../illustration/Img_handle_inview';
import styles from './sectionsStyles.module.scss';
import { Box, Card, CardContent, Typography, useTheme, Theme } from '@mui/material';
import { IProps } from './_CombineSections';
import { motion } from 'framer-motion';
import { TState } from '../../store/hooks';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import json from './data.json';


const Experience: React.FC<IProps> = ({ L_R_cardsStyle, p_spacing, cardStyle }) => {


     const min_width_600px = useSelector((state: TState) => state.min_width_600px_Reducer.value);
     const colors = useSelector((state: TState) => state.appColorsReducer.value);

     const { strongText, thirdLettersColor } = colors;

     const theme: Theme = useTheme();

     const [h3_scale, set_h3_scale] = useState(`scale(0.95)`);

     if (h3_scale === `scale(0.95)`) {
          setInterval(() => {
               set_h3_scale(`scale(1)`)
          }, 6000)
     };

     const cardTitle = (
          <Card sx={cardStyle}>
               <Box className={styles.borderBottomStyle} style={{ color: strongText }}>
                    <div style={{
                         transform: h3_scale,
                         transition: `transform 200ms linear`,
                    }} >
                         <Typography className={styles.h3_Style} variant="h3" style={{ color: strongText }} gutterBottom={true}>
                              Experience
                         </Typography>
                    </div>
               </Box>
          </Card>
     );

     const image = (
          <>
               <Box sx={{ mt: '-4px', height: min_width_600px ? 19 : 0 }} />
               <Img_handle_inview
                    src={'./exp.svg'}
                    min_width_600px={min_width_600px}
                    width={230}
               />
               <Box sx={{ height: min_width_600px ? 0 : 3 }} />
          </>
     );

     const h4_Style = { mt: 1.7, color: thirdLettersColor };
     const h5_Style = { mt: 0.6, mb: 3.24, color: thirdLettersColor };

     const contactInfo_picture = (
          <Card sx={L_R_cardsStyle}>
               <CardContent sx={{ p: 0, mb: -3.3, color: strongText }}>
                    <Typography className={styles.period_style} variant="p"
                         style={{ color: strongText }}
                    >
                         {json.data.contactInfo.name}
                         <br />
                    </Typography>
                    <Box sx={{ height: theme.spacing(0.35) }} />
                    <Typography variant="p">
                         {json.data.contactInfo.mail}
                    </Typography>
                    <Box sx={{ height: theme.spacing(min_width_600px ? 2.3 : 4.1) }} />
                    {image}
               </CardContent>
          </Card >
     );

     const monthNames = [
          "Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
     ];
     const currentMonth = monthNames[new Date().getMonth()];
     const currentYear = new Date().getFullYear();

     const displayCard = (period: string) => {
          return (
               <Card sx={L_R_cardsStyle}>

                    <CardContent
                         sx={{
                              p: 0,
                              mt: min_width_600px ? '0px' : '30px',
                              mb: min_width_600px ? '-3px' : '-7px',
                              color: strongText
                         }}
                    >
                         <Typography className={styles.h4_Style} variant="h4" style={h4_Style}>
                              {json.data.experienceDescription[period].position}
                         </Typography>
                         <Typography className={styles.h5_Style} variant="h5" style={h5_Style}>
                              {json.data.experienceDescription[period].company}
                         </Typography>
                         <p style={{ fontWeight: 'bold', color: strongText }}>
                              {json.data.experienceDescription[period].period}
                              {period === '2' && currentMonth} {' '}
                              {period === '2' && currentYear}
                              <br />
                         </p>
                         {json.data.experienceDescription[period]
                              .description.map((paragraph: string, i: number) => (
                                   <div key={i}>
                                        <Typography variant="p">
                                             {paragraph}
                                             <br />
                                        </Typography>
                                        {p_spacing}
                                   </div>
                              ))}
                    </CardContent>
               </Card >
          )
     };


     return (
          <div className={styles.sectionsContainer}
               style={{ marginTop: min_width_600px ? 23 : 0 }}
          >
               <div className={styles.titleContainer}>
                    <div>{cardTitle}</div>
                    <motion.div
                         initial={{ opacity: 1, y: 5 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.25, duration: 0.25, ease: 'easeInOut' }}
                    >
                         <Box className={styles.sectionsBody}>
                              <Box className={styles.sections}>
                                   {displayCard('2')}
                                   {contactInfo_picture}
                              </Box>
                              <Box className={styles.sections}>
                                   <Box sx={{ height: theme.spacing(min_width_600px ? 0 : 2.4) }} />
                                   {displayCard('1')}
                                   <Box sx={{ height: theme.spacing(2.4) }} />
                                   {displayCard('0')}
                              </Box>
                         </Box>
                    </motion.div>
               </div>
          </div>
     )
};

export default Experience;

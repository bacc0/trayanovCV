import Img_handle_inview from '../illustration/Img_handle_inview';
import { Card, CardContent, Typography, Box, useTheme, Theme } from '@mui/material';
import styles from './sectionsStyles.module.scss';
import { useSelector } from 'react-redux';
import { IProps } from './_CombineSections';
import { TState } from '../../store/hooks';

const aboutMe = [
     `I’m very good on planning and organising my work, so my tasks will always be done on time in necessary standard.`,

     `I’m happy working on my own, but I have also like to work as part of the team.`,

     `I'm very positive, creative, flexible and responsible.`,

     `Experience working with dynamic content.`,

     `Problem Solving Skills. Attention to Detail.`,

     `Good understanding working with APIs (RESTful services).`,

     `I’m very focus in my work.`,

     ` Able to build an application from concept to the UX.`,

     `Skilled at writing well designed, efficient code using current best practices in Web development.`
];

const midOfArr = (aboutMe.length - 5) / 2;

console.log(midOfArr)
const AboutMe: React.FC<IProps> = ({ L_R_cardsStyle, p_spacing, cardStyle }) => {


     const min_width_600px = useSelector((state: TState) => state.min_width_600px_Reducer.value);
     const colors = useSelector((state: TState) => state.appColorsReducer.value);

     const { strongText, thirdLettersColor } = colors;

     const theme: Theme = useTheme();

     const cardTitle = (
          <Card sx={{ ...cardStyle, ...{ mb: min_width_600px ? -2 : -3.7 } }} >
               <Box className={styles.borderBottomStyle} style={{ color: strongText }}>
                    <Typography className={styles.h3_Style} variant="h3"
                         style={{ color: strongText }} gutterBottom={true}
                    >
                         About me
                    </Typography>
               </Box>
          </Card>
     );
     const img = (
          <Box sx={{ mt: theme.spacing(-1), mb: theme.spacing(min_width_600px ? 0.7 : 1.5) }}>
               <Img_handle_inview
                    src={'./me.svg'}
                    min_width_600px={min_width_600px}
                    width={230}
               />
          </Box>
     );

     const h4_Style = { mt: 1.7, color: thirdLettersColor };

     const leftSection = (
          <Card sx={L_R_cardsStyle}>
               <CardContent sx={{ p: 0, mb: -3.3, color: strongText }}>
                    <Typography className={styles.h4_Style} variant="h4" style={h4_Style}>
                         Skills
                    </Typography>
                    {p_spacing}

                    {aboutMe.map((tech, i) => (
                         midOfArr > i && (
                              <>
                                   <Typography variant="p" key={i}>{tech}<br /></Typography>
                                   {p_spacing}
                              </>
                         )
                    ))}
               </CardContent>
          </Card>
     );

     const rightSection = (
          <Card sx={{ ...L_R_cardsStyle, ...{ mt: min_width_600px ? 2.2 : -2 } }}>
               <CardContent sx={{ p: 0, mb: -3.3, color: strongText }}>
                    {aboutMe.map((tech, i) => (
                         midOfArr <= i && (
                              <>
                                   <Typography variant="p" key={i}>{tech}<br /></Typography>
                                   {p_spacing}
                              </>
                         )
                    ))}
               </CardContent>
          </Card>
     );


     return (
          <div className={styles.sectionsContainer}>
               <div className={styles.titleContainer}>
                    <div>{cardTitle}</div>
                    <div className={styles.sectionsBody}>
                         <div className={styles.sections}>
                              <Box sx={{ height: min_width_600px ? 23 : 31 }} />
                              {img}
                              <Box sx={{ height: min_width_600px ? 40 : 25 }} />
                              {leftSection}
                         </div>

                         <div className={styles.sections}>
                              <Box sx={{ height: theme.spacing(min_width_600px ? 0 : 2.4) }} />
                              {rightSection}
                              <Box sx={{ height: theme.spacing(2.4) }} />
                         </div>
                    </div>
               </div>
          </div>
     )
};

export default AboutMe;


import Img_handle_inview from '../illustration/Img_handle_inview';
import styles from './sectionsStyles.module.scss';
import { Card, CardContent, Typography, Box, useTheme, Theme } from '@mui/material'
import { IProps } from './_CombineSections';
import { TState } from '../../store/hooks';
import { useSelector } from 'react-redux';

const techs = ['ReactJS', 'Hook', 'NextJS', 'Redux', 'Javascript', 'MUI Material UI', 'HTML CSS SASS', 'Framer Motion', `SVG's animations`, 'Shapes shifter', 'GIMP', 'Photoshop Adobe', 'Illustrator Adobe', 'Graphic Autodesk', 'Typescript', 'NodeJS', 'Express', 'Agile Scrum', 'Jira', 'Git Github Bitbucket', 'Sourcetree'];
const midOfArr =  (techs.length - 7 ) / 2;


const Technologies: React.FC<IProps> = ({ L_R_cardsStyle, p_spacing, cardStyle }) => {


     const min_width_600px = useSelector((state: TState) => state.min_width_600px_Reducer.value);
     const colors = useSelector((state: TState) => state.appColorsReducer.value);

     const { backgroundColor_2, strongText } = colors;

     const theme: Theme = useTheme();

     const cardTitle = (
          <Card sx={cardStyle}>
               <Box className={styles.borderBottomStyle} style={{ color: strongText }}>
                    <Typography className={styles.h3_Style} variant="h3" style={{ color: strongText }} gutterBottom={true}>
                         Tech stack
                    </Typography>
               </Box>
          </Card>
     );
     const img = (
          <Box sx={{ mt: '-6px', mb: theme.spacing(min_width_600px ? 0.7 : 1.5) }}>
               <Img_handle_inview
                    src={'./tech.svg'}
                    min_width_600px={min_width_600px}
                    width={230}
               />
          </Box>
     );
     const leftSection = (
          <Card sx={L_R_cardsStyle}>
               <CardContent sx={{ p: 0, mt: 1.8, mb: -3.3, color: strongText }}>
                    {techs.map((tech, i) => (
                         midOfArr + 7 > i && (
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
          <Card sx={{ ...L_R_cardsStyle, ...{ mt: min_width_600px ? 1.9 : -0.3 } }}>
               <CardContent sx={{ p: 0, mb: -3.3, color: strongText }}>
               {techs.map((tech, i) => (
                         midOfArr + 7 <= i && (
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
          <div className={styles.sectionsContainer} style={{ backgroundColor: backgroundColor_2 }}>
               <div className={styles.titleContainer}>
                    <div>{cardTitle}</div>
                    <Box className={styles.sectionsBody}>
                         <div className={styles.sections}>
                              {leftSection}
                         </div>
                         <div className={styles.sections}>
                              <Box sx={{ height: min_width_600px ? 0 : 28 }} />
                              {img}
                              <Box sx={{ height: min_width_600px ? 36 : 35 }} />
                              {rightSection}
                         </div>
                    </Box>
                    {p_spacing}
               </div>
          </div>
     )
};

export default Technologies;


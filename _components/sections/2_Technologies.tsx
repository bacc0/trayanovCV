import Img_handle_inview from '../illustration/Img_handle_inview';
import styles from './sectionsStyles.module.scss';
import { Card, CardContent, Typography, Box, useTheme, Theme } from '@mui/material'
import { IProps } from './_CombineSections';
import { TState } from '../../store/hooks';
import { useSelector } from 'react-redux';


const Technologies: React.FC<IProps> = ({ L_R_cardsStyle, p_spacing, cardStyle }) => {


     const min_width_600px = useSelector((state: TState) => state.min_width_600px_Reducer.value);
     const colors = useSelector((state: TState) => state.appColorsReducer.value);

     const { backgroundColor_2, strongText }= colors;

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

                    <Typography variant="p">ReactJS<br /></Typography>
                    {p_spacing}
                    <Typography variant="p">Hook<br /></Typography>
                    {p_spacing}
                    <Typography variant="p">NextJS<br /></Typography>
                    {p_spacing}
                    <Typography variant="p">Redux<br /></Typography>
                    {p_spacing}
                    <Typography variant="p">Javascript<br /></Typography>
                    {p_spacing}
                    <Typography variant="p">MUI Material UI<br /></Typography>
                    {p_spacing}
                    <Typography variant="p">HTML CSS SASS<br /></Typography>
                    {p_spacing}
                   
                    <Typography variant="p">Framer Motion<br /></Typography>
                    {p_spacing}
                    <Typography variant="p">SVG's animations<br /></Typography>
                    {p_spacing}
                    <Typography variant="p">Shapes shifter<br /></Typography>
                    {p_spacing}
                    <Typography variant="p">GIMP<br /></Typography>
                    {p_spacing}
                    <Typography variant="p">Photoshop Adobe<br /></Typography>
                    {p_spacing}
                    <Typography variant="p">Illustrator Adobe <br /></Typography>
                    {p_spacing}
                    <Typography variant="p">Graphic Autodesk <br /></Typography>
                    {p_spacing}

               </CardContent>
          </Card>
     )
     const rightSection = (
          <Card sx={{ ...L_R_cardsStyle, ...{ mt: min_width_600px ? 1.9 : -0.3 } }}>
               <CardContent sx={{ p: 0, mb: -3.3, color: strongText }}>

                    <Typography variant="p">Typescript<br /></Typography>
                    {p_spacing}
                    <Typography variant="p">NodeJS<br /></Typography>
                    {p_spacing}
                    <Typography variant="p">Express<br /></Typography>
                    {p_spacing}
                    <Typography variant="p"> Agile Scrum <br /></Typography>
                    {p_spacing}
                    <Typography variant="p">Jira<br /></Typography>
                    {p_spacing}
                    <Typography variant="p">Git Github Bitbucket<br /></Typography>
                    {p_spacing}
                    <Typography variant="p"> Sourcetree<br /></Typography>

               </CardContent>
          </Card>
     )


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


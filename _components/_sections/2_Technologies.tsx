import Img_handle_inview from '../_illustration/Img_handle_inview';
import styles from './_CombineSections.module.scss';
import { Card, CardContent, Typography, Box, useTheme } from '@mui/material'
import { ICardStyle, IL_R_cardsStyle } from './_CombineSections';
import { IColors } from '../../store/appColors';
import { Theme } from '@mui/material/styles';
import { TState } from '../../store/index';
import { useSelector } from 'react-redux';


interface Props {
     L_R_cardsStyle: IL_R_cardsStyle;
     p_spacing: JSX.Element;
     cardStyle: ICardStyle;
};


const Technologies: React.FC<Props> = ({ L_R_cardsStyle, p_spacing, cardStyle }) => {


     const min_width_600px: boolean = useSelector((state: TState) => state.min_width_600px_Reducer.value);
     const colors: IColors = useSelector((state: TState) => state.appColorsReducer.value);

     const { backgroundColor_2, strongText }:
           { backgroundColor_2: string, strongText: string } = colors;

     const theme: Theme = useTheme();

     const cardTitle: JSX.Element = (
          <Card sx={cardStyle}>
               <Box className={styles.borderBottomStyle} style={{ color: strongText }}>
                    <Typography className={styles.h3_Style} variant="h3" style={{ color: strongText }} gutterBottom={true}>
                         Tech stack
                    </Typography>
               </Box>
          </Card>
     );
     const img: JSX.Element = (
          <Box sx={{ mt: '-6px', mb: theme.spacing(min_width_600px ? 0.7 : 1.5) }}>
               <Img_handle_inview
                    src={'./tech.svg'}
                    min_width_600px={min_width_600px}
                    width={230}
               />
          </Box>
     );
     const leftSection : JSX.Element= (
          <Card sx={L_R_cardsStyle}>
               <CardContent sx={{ p: 0, mt: 1.8, mb: -3.3, color: strongText }}>

                    <Typography // @ts-ignore 
                               variant="p">ReactJS<br /></Typography>
                    {p_spacing}
                    <Typography // @ts-ignore 
                               variant="p">Hook<br /></Typography>
                    {p_spacing}
                    <Typography // @ts-ignore 
                               variant="p">NextJS<br /></Typography>
                    {p_spacing}
                    <Typography // @ts-ignore 
                               variant="p">Javascript<br /></Typography>
                    {p_spacing}
                    <Typography // @ts-ignore 
                               variant="p">MUI Material UI<br /></Typography>
                    {p_spacing}
                    <Typography // @ts-ignore 
                               variant="p">CSS SASS<br /></Typography>
                    {p_spacing}
                    <Typography // @ts-ignore 
                               variant="p">HTML<br /></Typography>
                    {p_spacing}
                    <Typography // @ts-ignore 
                               variant="p">Framer Motion<br /></Typography>
                    {p_spacing}
                    <Typography // @ts-ignore 
                               variant="p">SVG's animations<br /></Typography>
                    {p_spacing}
                    <Typography // @ts-ignore 
                               variant="p">Shapes shifter<br /></Typography>
                    {p_spacing}
                    <Typography // @ts-ignore 
                               variant="p">GIMP<br /></Typography>
                    {p_spacing}
                    <Typography // @ts-ignore 
                               variant="p">Photoshop Adobe<br /></Typography>
                    {p_spacing}
                    <Typography // @ts-ignore 
                               variant="p">Illustrator Adobe <br /></Typography>
                    {p_spacing}
                    <Typography // @ts-ignore 
                               variant="p">Graphic Autodesk <br /></Typography>
                    {p_spacing}

               </CardContent>
          </Card>
     )
     const rightSection: JSX.Element = (
          <Card sx={{ ...L_R_cardsStyle, ...{ mt: min_width_600px ? 1.9 : -0.3 } }}>
               <CardContent sx={{ p: 0, mb: -3.3, color: strongText }}>

                    <Typography // @ts-ignore 
                               variant="p">Typescript<br /></Typography>
                    {p_spacing}
                    <Typography // @ts-ignore 
                               variant="p">NodeJS<br /></Typography>
                    {p_spacing}
                    <Typography // @ts-ignore 
                               variant="p">Express<br /></Typography>
                    {p_spacing}
                    <Typography // @ts-ignore 
                               variant="p"> Agile Scrum <br /></Typography>
                    {p_spacing}
                    <Typography // @ts-ignore 
                               variant="p">Jira<br /></Typography>
                    {p_spacing}
                    <Typography // @ts-ignore 
                               variant="p">Git Github Bitbucket<br /></Typography>
                    {p_spacing}
                    <Typography // @ts-ignore 
                               variant="p"> Sourcetree<br /></Typography>

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


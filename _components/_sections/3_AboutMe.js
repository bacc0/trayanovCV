import Img_handle_inview from '../_illustration/Img_handle_inview'
import { Card, CardContent, Typography, Box, useTheme } from '@mui/material'
import { useSelector } from 'react-redux'
import styles from './_CombineSections.module.scss';


export default function AboutMe({ L_R_cardsStyle, p_spacing, cardStyle }) {


     const min_width_600px = useSelector(state => state.min_width_600px_Reducer.value)
     const colors = useSelector(state => state.appColorsReducer.value)

     const { strongText, thirdLettersColor } = colors

     const theme = useTheme()

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
     )
     const img = (
          <Box sx={{ mt: theme.spacing(-1), mb: theme.spacing(min_width_600px ? 0.7 : 1.5) }}>
               <Img_handle_inview
                    src={'./me.svg'}
                    min_width_600px={min_width_600px}
                    width={230}
               />
          </Box>
     )

     const leftSection = (
          <Card sx={L_R_cardsStyle}>
               <CardContent sx={{ p: 0, mb: -3.3, color: strongText }}>

                    <Typography className={styles.h4_Style} variant="h4" style={{ mt: 1.7, color: thirdLettersColor }}>
                         Skills
                    </Typography>

                    {p_spacing}

                    <Typography variant="p">
                         I’m very good on planning and organising my work, so my tasks will always be done on time in necessary standard.
                         <br />
                    </Typography>

                    {p_spacing}

                    <Typography variant="p">
                         I’m happy working on my own, but I have also like to work as part of the team.
                         <br />
                    </Typography>

                    {p_spacing}

                    <Typography variant="p">
                         I'm very positive, creative, flexible and responsible.

                         <br />
                    </Typography>

                    {p_spacing}

               </CardContent>
          </Card>
     )

     const rightSection = (
          <Card sx={{ ...L_R_cardsStyle, ...{ mt: min_width_600px ? 2.2 : -2 } }}>
               <CardContent sx={{ p: 0, mb: -3.3, color: strongText }}>

                    {p_spacing}

                    <Typography variant="p">
                         Experience working with dynamic content.
                         <br />
                    </Typography>

                    {p_spacing}

                    <Typography variant="p">
                         Problem Solving Skills. Attention to Detail.
                         <br />
                    </Typography>

                    {p_spacing}

                    <Typography variant="p">
                         Good understanding working with APIs (RESTful services).
                         <br />
                    </Typography>

                    {p_spacing}

                    <Typography variant="p">
                         I’m very focusin my work
                         <br />
                    </Typography>

                    <Typography variant="p">
                         Developing with ReactJS single page JavaScript Applications.
                         <br />
                    </Typography>

                    {p_spacing}

                    <Typography variant="p">
                         Web developer able to build an application from the ground up, from concept, navigation, working with data and programming to UX.
                         <br />
                    </Typography>

                    {p_spacing}

                    <Typography variant="p">
                         Skilled at writing well designed, efficient code using current best practices in Web development.
                         <br />
                    </Typography>

                    {p_spacing}

               </CardContent>
          </Card>
     )


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
}


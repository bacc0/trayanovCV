import Img_handle_inview from '../_illustratins/Img_handle_inview'
import { Card, CardContent, Typography, Box, useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useSelector } from 'react-redux'
// import styles from './style/1_Experience.module.scss';
// import styles from './style/1_Experience.module.css';
import styles from './_CombineSections.module.scss';


export default function Experience({ L_R_cardsStyle, p_spacing, cardStyle }) {


     const min_width_600px = useSelector(state => state.min_width_600px_Reducer.value)
     const colors = useSelector(state => state.appColorsReducer.value)
     const { strongText, thirdLettersColor } = colors

     const theme = useTheme()

     const [h3_scale, set_h3_scale] = useState(`scale(0.95)`)

     if (h3_scale === `scale(0.95)`) {
          setInterval(() => {
               set_h3_scale(`scale(1)`)
          }, 6000)
     }

     const cardTitle = (
          <Card
               sx={ cardStyle }
          >
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
     )

     const img = (
          <>
               <Box sx={{ mt: '-4px', height: min_width_600px ? 19 : 0 }} />

               <Img_handle_inview
                    src={'./exp.svg'}
                    min_width_600px={min_width_600px}
                    width={230}

               />
               <Box sx={{ height: min_width_600px ? 0 : 3 }} />
          </>
     )

     const groundbits = (period, contact, mail) => {
          return (
               <Card sx={L_R_cardsStyle} 
               // className={styles.test_class}🐯
               >
                    <CardContent sx={{ p: 0, mb: -3.3, color: strongText }}>

                         <Typography
                              className={styles.h4_Style} variant="h4"
                              style={{ mt: 1.7, color: thirdLettersColor }}
                         >
                              React Developer
                         </Typography>
                         <Typography className={styles.h5_Style} variant="h5"
                              style={{
                                   mt: 0.6,
                                   mb: 3.24,
                                   color: thirdLettersColor,
                              }}
                         >
                              Groundbits Ltd
                         </Typography>
                         <Typography className={styles.period_style} variant="p" style={{ color: strongText }}>
                              {period}
                              <br />
                         </Typography>
                         {p_spacing}
                         <Typography variant="p">
                              Developing a Website Builder.
                              <br />
                         </Typography>
                         {p_spacing}
                         <Typography variant="p" >
                              Using REACT with NEXTJS, for styling MATERIAL UI (MUI), STRAPI for contains management system (CMS), for animation FRAMER MOTION and directly SVG’s manipulation.
                              <br />
                         </Typography>
                         {p_spacing}
                         {
                              contact && (
                                   <>
                                        {p_spacing}
                                        <Typography className={styles.period_style}
                                             variant="p"
                                             style={{ color: strongText }}
                                        >
                                             {contact}
                                             <br />
                                        </Typography>
                                        <Box sx={{ height: theme.spacing(0.35) }} />
                                        <Typography variant="p"  >
                                             {mail}
                                        </Typography>
                                        <Box sx={{ height: theme.spacing(min_width_600px ? 2.3 : 4.1) }} />
                                        {img}
                                   </>
                              )
                         }
                    </CardContent>
               </Card>
          )
     }

     const amdocs = (
          <Card sx={L_R_cardsStyle}>
               <CardContent
                    sx={{
                         p: 0,
                         mt: min_width_600px ? '0px' : '30px',
                         mb: min_width_600px ? '-3px' : '-7px',
                         color: strongText
                    }}
               >
                    <Typography className={styles.h4_Style} variant="h4" style={{ mt: 1.7, color: thirdLettersColor }}>
                         React Developer
                    </Typography>
                    <Typography className={styles.h5_Style} variant="h5"
                         style={{
                              mt: 0.6,
                              mb: 3.24,
                              color: thirdLettersColor,
                         }}
                    >
                         Amdocs via Appgr8
                    </Typography>
                    <Typography variant="p" sx={{ fontWeight: 'bold', color: strongText }}>
                         July 2021 - Nov 2021
                         <br />
                    </Typography>
                    {p_spacing}
                    <Typography variant="p">
                         Building a new application for the mobile network operator.
                         <br />
                    </Typography>
                    {p_spacing}
                    <Typography variant="p" >
                         Using REACT, MATERIAL UI, TYPESCRIPT, SOURCETREE, BITBUCKET ect.
                         <br />
                    </Typography>

                    {p_spacing}
                    <Typography variant="p" >
                         For the software development the company used AGILE with the SCRUM framework and JIRA.
                         <br />
                    </Typography>
               </CardContent>
          </Card>
     )


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

                                   {groundbits('Dec 2021 – Present', 'Ricard Rosson', 'ricard@iacos.net')}
                              </Box>

                              <Box className={styles.sections}>

                                   <Box sx={{ height: theme.spacing(min_width_600px ? 0 : 2.4) }} />
                                   {amdocs}
                                   <Box sx={{ height: theme.spacing(2.4) }} />
                                   {groundbits('Jan 2020 – Jan 2021')}
                              </Box>
                         </Box>
                    </motion.div>
               </div>
          </div>
     )
}


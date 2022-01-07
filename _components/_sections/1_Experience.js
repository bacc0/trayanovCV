import Img_handle_inview from '../_illustratins/Img_handle_inview'
import { Card, CardContent, Typography, Box, useTheme } from '@mui/material'
import { motion } from 'framer-motion'


export default function Experience({ state, min_width_600px, stylesPage, measurements, p_spacing }) {

     const { sectionsContainer, titleContainer, sectionsBody, sections,
          h3_Style, h4_Style, h5_Style, period_style } = stylesPage
     const { strongText, backgroundColor } = state

     const theme = useTheme()

     const cardTitle = (
          <Card
               sx={{
                    m: 0,
                    pb: 3,
                    width: 'auto',
                    height: 1,
                    boxShadow: 0,
                    borderLeft: 0,
                    backgroundColor: "transparent"
               }}
          >
               <Box sx={{
                    borderBottom: 1.5,
                    width: min_width_600px ? measurements.sectionWidth : '100%',
                    color: backgroundColor,
               }}
               >
                    <Typography variant="h3" sx={h3_Style}>
                         Experience
                    </Typography>
               </Box>
          </Card>
     )

     const img = (
          <Box sx={{ mt: theme.spacing(min_width_600px ? -0.8 : -2.4), mb: theme.spacing(0.3) }}>
               <Img_handle_inview
                    src={'./exp.svg'}
                    min_width_600px={min_width_600px}
                    width={measurements.sectionWidth}
               />
          </Box>
     )

     const L_R_cardsStyle = {
          m: 0,
          maxWidth: '100%',
          boxShadow: 0,
          borderLeft: 0,
          backgroundColor: "transparent"
     }

     // const p_spacing = ( <Box sx={{ height: theme.spacing(1.7) }} />)



     const groundbits = (period, contact, mail) => {
          return (
               <Card sx={L_R_cardsStyle}>
                    <CardContent sx={{ p: 0, mb: -3.3, color: strongText }}>

                         <Typography variant="h4" sx={h4_Style}>
                              React Developer
                         </Typography>
                         <Typography variant="h5" sx={h5_Style}>
                              Groundbits Ltd
                         </Typography>
                         <Typography variant="p" sx={period_style}>
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
                                        <Typography variant="p" sx={period_style}>
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
                         mt: min_width_600px ? '0px' : '29px',
                         mb: min_width_600px ? '-3px' : '-7px',
                         color: strongText
                    }}
               >
                    <Typography variant="h4" sx={h4_Style}>
                         React Developer
                    </Typography>
                    <Typography variant="h5" sx={h5_Style}>
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
          <div style={{ ...sectionsContainer, ...{ marginTop: 23 } }}>
               <div style={titleContainer}>
                    <div>{cardTitle}</div>
                    <motion.div
                         initial={{ opacity: 1, y: 5 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.25, duration: 0.25, ease: 'easeInOut' }}
                    >
                         
                         <Box style={sectionsBody}>
                              <Box style={sections}>
                              
                                   {groundbits('Dec 2021 – Present', 'Ricard Rosson', 'ricard@iacos.net')}
                              </Box>

                              <Box style={sections} >
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


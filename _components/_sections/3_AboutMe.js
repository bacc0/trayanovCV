import Img_handle_inview from '../_illustratins/Img_handle_inview'
import { Card, CardContent, Typography, Box, useTheme } from '@mui/material'


export default function AboutMe({ state, min_width_600px, stylesPage, measurements }) {

     const { sectionsContainer, titleContainer, sectionsBody, sections } = stylesPage
     const { thirdLettersColor, bodyColor, backgroundColor } = state


     const theme = useTheme()
     
     const cardTitle = (
          <Card
               sx={{
                    m: 0,
                    mb: min_width_600px ? -2 : -3.7,
                    pb: 3,
                    width: 'auto',
                    height: 1,
                    boxShadow: 0,
                    borderLeft: 0,
                    backgroundColor: "transparent"
               }}
          >
               <Box
                    sx={{
                         borderBottom: 1.3,
                         width: min_width_600px ? measurements.sectionWidth : '100%',
                         color: backgroundColor,

                    }}
               >
                    <Typography variant="h4" sx={{ letterSpacing: 2 }}>
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

     const leftSection = (
          <Card sx={L_R_cardsStyle}>
               <CardContent sx={{ p: 0, mb: -3.3, color: bodyColor }}>

                    <Typography variant="h5" sx={{ mt: 1.7, color: thirdLettersColor, letterSpacing: 1 }} >
                         Skills
                    </Typography>


                    <Box sx={{ height: theme.spacing(1.7) }} />

                    <Typography variant="p">
                         I’m very good on planning and organising my work, so my tasks will always be done on time in necessary standard.
                         <br />
                    </Typography>
                    <Box sx={{ height: theme.spacing(1.7) }} />

                    <Typography variant="p">
                         I’m happy working on my own, but I have also like to work as part of the team.
                         <br />
                    </Typography>
                    <Box sx={{ height: theme.spacing(1.7) }} />

                    <Typography variant="p">
                         I'm very positive, creative, flexible and responsible.

                         <br />
                    </Typography>
                    <Box sx={{ height: theme.spacing(1.7) }} />

               </CardContent>
          </Card>
     )

     const rightSection = (
          <Card sx={{ ...L_R_cardsStyle, ...{ mt: min_width_600px ? 2.2 : -2 } }}>
               <CardContent sx={{ p: 0, mb: -3.3, color: bodyColor }}>

                    <Box sx={{ height: theme.spacing(1.7) }} />


                    <Typography variant="p">
                         Experience working with dynamic content.
                         <br />
                    </Typography>

                    <Box sx={{ height: theme.spacing(1.7) }} />


                    <Typography variant="p">
                         Problem Solving Skills. Attention to Detail.
                         <br />
                    </Typography>

                    <Box sx={{ height: theme.spacing(1.7) }} />


                    <Typography variant="p">
                         Good understanding working with APIs (RESTful services).
                         <br />
                    </Typography>

                    <Box sx={{ height: theme.spacing(1.7) }} />

                    <Box sx={{ height: theme.spacing(1.7) }} />
                    <Typography variant="p">
                         I’m very focusin my work
                         <br />
                    </Typography>


                    <Typography variant="p">
                         Developing with ReactJS single page JavaScript Applications.
                         <br />
                    </Typography>

                    <Box sx={{ height: theme.spacing(1.7) }} />

                    <Typography variant="p">
                         Web developer able to build an application from the ground up, from concept, navigation, working with data and programming to UX.
                         <br />
                    </Typography>

                    <Box sx={{ height: theme.spacing(1.7) }} />

                    <Typography variant="p">
                         Skilled at writing well designed, efficient code using current best practices in Web development.
                         <br />
                    </Typography>

                    <Box sx={{ height: theme.spacing(1.7) }} />

               </CardContent>
          </Card>
     )


     return (
          <div style={sectionsContainer}>
               <div style={titleContainer}>
                    <div>{cardTitle}</div>
                    <div style={sectionsBody}>
                         <div style={sections}>
                              {img}
                              {leftSection}

                         </div>

                         <div style={sections}>
                              <Box sx={{ height: theme.spacing(min_width_600px ? 0 : 2.4) }} />
                              {rightSection}
                              <Box sx={{ height: theme.spacing(2.4) }} />


                         </div>
                    </div>
               </div>
          </div>
     )
}


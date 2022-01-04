import Img_handle_inview from '../_illustratins/Img_handle_inview'
import { Card, CardContent, Typography, Box, useTheme } from '@mui/material'


export default function Kkk({ state, min_width_600px }) {


     const { bodyColor, backgroundColor, backgroundColor_2 } = state

     const sectionsContainer = {
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: backgroundColor_2,
     }
     const titleContainer = {
          width: min_width_600px ? 484 : '80%',
          maxWidth: min_width_600px ? 484 : 300,
          padding: `60px 0 48px`,
          // borderTop: `1.3px solid ${secLettersColor}55`,
          // borderBottom: `1.3px solid ${secLettersColor}55`,
     }
     const sectionsBody = {
          // height: '50px',
          // backgroundColor: '#44444422',
          width: min_width_600px ? 484 : '100%',
          maxWidth: min_width_600px ? 484 : 300,

          display: min_width_600px ? 'flex' : 'block',

          justifyContent: min_width_600px ? 'space-between' : 'center',

          height: 'auto'
     }
     const sections = {
          width: min_width_600px ? 210 : '100%',
     }
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
                    borderBottom: 1.3,
                    width: min_width_600px ? 210 : '100%',
                    color: backgroundColor,

               }}
               >
                    <Typography variant="h4" sx={{ letterSpacing: 2 }} >
                         Tech stack
                    </Typography>
               </Box>
          </Card>
     )
     const img = (
          <Box sx={{ mt: theme.spacing(-1), mb: theme.spacing(min_width_600px ? 0.7 : 1.5) }}>
               <Img_handle_inview
                    src={'./tech.svg'}
                    min_width_600px={min_width_600px}
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
               <CardContent sx={{ p: 0, mt: 1.8, mb: -3.3, color: bodyColor }}>

                    {/* <Box sx={{ height: theme.spacing(1.7) }} /> */}
                    <Typography variant="p">ReactJS<br /></Typography>
                    <Box sx={{ height: theme.spacing(1.7) }} />
                    <Typography variant="p">Hook<br /></Typography>
                    <Box sx={{ height: theme.spacing(1.7) }} />
                    <Typography variant="p">NextJS<br /></Typography>
                    <Box sx={{ height: theme.spacing(1.7) }} />
                    <Typography variant="p">Javascript<br /></Typography>
                    <Box sx={{ height: theme.spacing(1.7) }} />
                    <Typography variant="p">MUI Material UI<br /></Typography>
                    <Box sx={{ height: theme.spacing(1.7) }} />
                    <Typography variant="p">CSS SASS HTML<br /></Typography>

               </CardContent>
          </Card>
     )
     const rightSection = (
          <Card sx={{ ...L_R_cardsStyle, ...{ mt: min_width_600px ? 1.7 : -0.3 } }}>
               <CardContent sx={{ p: 0, mb: -3.3, color: bodyColor }}>
               <Typography variant="p">Framer Motion<br /></Typography>
               <Box sx={{ height: theme.spacing(1.7) }} />

                    <Typography variant="p">SVG's animations<br /></Typography>
                    <Box sx={{ height: theme.spacing(1.7) }} />

                    <Typography variant="p">Shapes shifter<br /></Typography>
                    <Box sx={{ height: theme.spacing(1.7) }} />

                    <Typography variant="p">Illustrator Adobe <br /></Typography>
                    <Box sx={{ height: theme.spacing(1.7) }} />

                    <Typography variant="p">Graphic Autodesk <br /></Typography>
                    <Box sx={{ height: theme.spacing(1.7) }} />

                    <Typography variant="p">GIMP<br /></Typography>
                    <Box sx={{ height: theme.spacing(1.7) }} />

                    <Typography variant="p">Photoshop Adobe<br /></Typography>
                    <Box sx={{ height: theme.spacing(1.7) }} />

                    <Typography variant="p">Typescript<br /></Typography>
                    <Box sx={{ height: theme.spacing(1.7) }} />

                    <Typography variant="p">NodeJS<br /></Typography>
                    <Box sx={{ height: theme.spacing(1.7) }} />

                    <Typography variant="p">Express<br /></Typography>
                    <Box sx={{ height: theme.spacing(1.7) }} />

                    <Typography variant="p">Git Github Bitbucket<br /></Typography>
                    <Box sx={{ height: theme.spacing(1.7) }} />

                    <Typography variant="p">Sourcetree<br /></Typography>
                    <Box sx={{ height: theme.spacing(1.7) }} />

                    <Typography variant="p">Jira<br /></Typography>
                    <Box sx={{ height: theme.spacing(1.7) }} />





               </CardContent>
          </Card>
     )


     return (
          <div style={sectionsContainer}>
               <div style={titleContainer}>
                    <div>{cardTitle}</div>
                    <Box style={sectionsBody}>
                         <div style={sections}>
                              {img}
                              {leftSection}
                         </div>
                         <div style={sections}>
                              <Box sx={{ height: theme.spacing(min_width_600px ? 0 : 2.4) }} />
                              {rightSection}
                         </div>
                    </Box>
               </div>
          </div>
     )
}


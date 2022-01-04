import Img_handle_inview from '../_illustratins/Img_handle_inview'
import { useTheme } from '@mui/material/styles'
import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'


export default function Kkk({ state, min_width_600px }) {


     const {  bodyColor, backgroundColor, backgroundColor_2 } = state

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
               <CardContent sx={{ p: 0, mb: -3.3, color: bodyColor }}>

                    {/* <Box sx={{ height: theme.spacing(1.7) }} /> */}
                    <Typography variant="p">ReactJS<br /></Typography>
                    <Box sx={{ height: theme.spacing(1.7) }} />
                    <Typography variant="p">Hook<br /></Typography>
                    <Box sx={{ height: theme.spacing(1.7) }} />
                    <Typography variant="p">NextJS<br /></Typography>
                    <Box sx={{ height: theme.spacing(1.7) }} />
                    <Typography variant="p">Javascript<br /></Typography>
                    <Box sx={{ height: theme.spacing(1.7) }} />
                    <Typography variant="p">Material UI (MUI)<br /></Typography>
                    <Box sx={{ height: theme.spacing(1.7) }} />
                    <Typography variant="p">CSS<br /></Typography>
                    <Box sx={{ height: theme.spacing(1.7) }} />
                    <Typography variant="p">SASS<br /></Typography>
                    <Box sx={{ height: theme.spacing(1.7) }} />
                    <Typography variant="p">HTML<br /></Typography>

                   

               </CardContent>
          </Card>
     )
     const rightSection = (
          <Card sx={{ ...L_R_cardsStyle, ...{ mt: min_width_600px ? 1.7 : -0.3 }}}>
               <CardContent sx={{ p: 0, mb: -3.3, color: bodyColor }}>

                    <Typography variant="p">Framer Motion<br /></Typography>
                    <Box sx={{ height: theme.spacing(1.7) }} />

                    <Typography variant="p">SVG's Animations<br /></Typography>
                    <Box sx={{ height: theme.spacing(1.7) }} />
                    
                    <Typography variant="p">Shapes shifter<br /></Typography>
                    <Box sx={{ height: theme.spacing(1.7) }} />
                    
                    <Typography variant="p">Adobe Illustrator<br /></Typography>
                    <Box sx={{ height: theme.spacing(1.7) }} />
                    
                    <Typography variant="p">Autodesk Graphic<br /></Typography>
                    <Box sx={{ height: theme.spacing(1.7) }} />
                    
                    <Typography variant="p">GIMP<br /></Typography>
                    <Box sx={{ height: theme.spacing(1.7) }} />
                    
                    <Typography variant="p">Adobe Photoshop<br /></Typography>
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
                    <div style={sectionsBody}>
                         <div style={sections}>
                              {img}
                              {leftSection}
                         </div>
                         <div style={sections}>
                              <Box sx={{ height: theme.spacing(min_width_600px ? 0 : 2.4) }} />
                              {rightSection}
                         </div>
                    </div>
               </div>
          </div>
     )
}


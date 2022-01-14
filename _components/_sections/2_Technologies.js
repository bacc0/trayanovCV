import Img_handle_inview from '../_illustratins/Img_handle_inview'
import { Card, CardContent, Typography, Box, useTheme } from '@mui/material'


export default function Technologies({ state, min_width_600px, stylesPage, measurements, p_spacing }) {

     const { sectionsContainer, titleContainer, sectionsBody, sections, h3_Style, borderBottomStyle } = stylesPage
     const { bodyColor, backgroundColor, backgroundColor_2, strongText } = state

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
               <Box sx={borderBottomStyle}>
                    <Typography variant="h3" sx={h3_Style} gutterBottom={true}>
                         Tech stack
                    </Typography>
               </Box>
          </Card>
     )
     const img = (
          <Box sx={{ mt: '-6px', mb: theme.spacing(min_width_600px ? 0.7 : 1.5) }}>
               <Img_handle_inview
                    src={'./tech.svg'}
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
               <CardContent sx={{ p: 0, mt: 1.8, mb: -3.3, color: strongText }}>

                    {/*{p_spacing} */}
                    <Typography variant="p">ReactJS<br /></Typography>
                    {p_spacing}
                    <Typography variant="p">Hook<br /></Typography>
                    {p_spacing}
                    <Typography variant="p">NextJS<br /></Typography>
                    {p_spacing}
                    <Typography variant="p">Javascript<br /></Typography>
                    {p_spacing}
                    <Typography variant="p">MUI Material UI<br /></Typography>
                    {p_spacing}
                    <Typography variant="p">CSS SASS<br /></Typography>
                    {p_spacing}

                    <Typography variant="p">HTML<br /></Typography>
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
          <div style={{ ...sectionsContainer, ...{ backgroundColor: backgroundColor_2 } }}>
               <div style={titleContainer}>
                    <div>{cardTitle}</div>
                    <Box style={sectionsBody}>
                         <div style={sections}>
                              {/* {p_spacing}
                              {p_spacing}
                              {img}
                              {p_spacing}
                              {p_spacing} */}
                              {leftSection}
                         </div>
                         <div style={sections}>
                              {/* {p_spacing} */}
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
}


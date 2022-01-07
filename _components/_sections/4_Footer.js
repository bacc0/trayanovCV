import Img_handle_inview from '../_illustratins/Img_handle_inview'
import { Card, CardContent, Typography, Box, useTheme } from '@mui/material'


import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import LocalPostOfficeSharpIcon from '@mui/icons-material/LocalPostOfficeSharp'
import PhoneEnabledSharpIcon from '@mui/icons-material/PhoneEnabledSharp'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'



export default function Technologies({ state, min_width_600px, stylesPage, p_spacing }) {

     const { sectionsContainer, titleContainer, sectionsBody, sections, } = stylesPage
     const { footerColor,strongText } = state

     const theme = useTheme()



     const L_R_cardsStyle = {
          m: 0,
          maxWidth: '100%',
          boxShadow: 0,
          borderLeft: 0,
          backgroundColor: "transparent"
     }

     const hrefStyle = {
          color: state.footerTextColor,
          textDecoration: 'none',
          display: 'flex',
     }

     const iconContainerStyle = {
          // backgroundColor: 'tan',
          display: 'flex',
          justifyContent: 'flex-start'
     }

     const iconStyle = {
          // backgroundColor: '#55555555',
          marginLeft: 0,
          marginTop: min_width_600px ? 0 : 4,
          paddingRight:  min_width_600px ? 10 : 20,
     }


     const leftSection = (
          <Card sx={L_R_cardsStyle}>
               <CardContent sx={{ p: 0, mt: 1.8, mb: -3.3, color: strongText }}>

                    <a style={hrefStyle} href={'https://www.linkedin.com/in/veselin-trayanov-219506171/'}>
                         <div style={iconContainerStyle}>
                              <div style={iconStyle}>
                                   <LinkedInIcon fontSize='small' />
                              </div>
                         </div>
                         LinkedIn
                    </a>
                    {p_spacing}

                    <a style={hrefStyle} href={`mailto: bacco23@gmail.com`}>
                         <div style={iconContainerStyle}>
                              <div style={iconStyle}>
                                   <LocalPostOfficeSharpIcon fontSize='small' />
                              </div>
                         </div>
                         bacco23@gmail.com
                    </a>
                    {p_spacing}

                    <a style={hrefStyle} href={`tel: 00447590010066`}>
                         <div style={iconContainerStyle}>
                              <div style={iconStyle}>
                                   <PhoneEnabledSharpIcon fontSize='small' />
                              </div>
                         </div>
                         +44 (0) 7590 010066
                    </a>
                    {p_spacing}

               </CardContent>
          </Card>
     )


     const rightSection = (
          <Card sx={{ ...L_R_cardsStyle, ...{ mt: min_width_600px ? 1.8 : -2.5 } }}>
               <CardContent sx={{ p: 0, mb: -3.3, color: strongText }}>



                    <a style={hrefStyle} href={'https://github.com/bacc0'}>
                         <div style={iconContainerStyle}>
                              <div style={iconStyle}>
                                   <GitHubIcon fontSize='small' />
                              </div>
                         </div>
                         GitHub
                    </a>
                    {p_spacing}

                    <a style={hrefStyle} href={'https://www.google.com/maps/@51.4764334,-0.1572618,16.21z'}>
                         <div style={iconContainerStyle}>
                              <div style={iconStyle}>
                                   <LocationOnSharpIcon fontSize='small' />
                              </div>
                         </div>
                         Battersea, London, UK
                    </a>
                    {p_spacing}
               </CardContent>
          </Card>
     )


     return (
          <div
               style={{
                    ...sectionsContainer,
                    ...{
                         backgroundColor: footerColor,
                         paddingTop: 0,
                         paddingBottom:5
                    }
               }}
          >
               <div style={titleContainer}>

                    <Box style={sectionsBody}>
                         <div style={sections}>

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


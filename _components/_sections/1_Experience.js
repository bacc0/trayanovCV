import Img_handle_inview from '../_illustratins/Img_handle_inview'
// import { useTheme } from '@mui/material/styles'
import { Card, CardContent, Typography, Box, useTheme } from '@mui/material'


export default function Kkk({ state, min_width_600px }) {


     const {
          strongText, animationTransition, hrColorMain, secLettersColor,
          thirdLettersColor, bodyColor, backgroundColor } = state

     const sectionsContainer = {
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          // backgroundColor: 'beige',
          // borderTop: `11.3px solid ${secLettersColor}55`,
          // transition: `borderTop 22s ease`
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
                    <Typography variant="h4" sx={{ letterSpacing: 2 }}>
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
     const groundbits = (period, contact, mail) => {
          return (
               <Card sx={L_R_cardsStyle}>
                    <CardContent sx={{ p: 0, mb: -3.3, color: bodyColor }}>
                    
                         <Typography variant="h5" sx={{ mt: 1.7, color: thirdLettersColor, letterSpacing: 1 }} >
                              React Developer
                         </Typography>
                         <Typography sx={{ mt: 0.5, mb: 3.24, color: thirdLettersColor, letterSpacing: 0.62 }} >
                              Groundbits Ltd
                         </Typography>
                         <Typography variant="p" sx={{ fontWeight: 'bold', color: strongText}}>
                              {period}
                              <br />
                         </Typography>
                         <Box sx={{ height: theme.spacing(1.7) }} />
                         <Typography variant="p">
                              Developing a Website Builder.
                              <br />
                         </Typography>
                         <Box sx={{ height: theme.spacing(1.7) }} />
                         <Typography variant="p" >
                              Using REACT with NEXTJS, for styling MATERIAL UI (MUI), STRAPI for contains management system (CMS), for animation FRAMER MOTION and directly SVG’s manipulation.
                              <br />
                         </Typography>
                         <Box sx={{ height: theme.spacing(1.7) }} />
                         {
                              contact && (
                                   <>
                                        <Typography variant="p" sx={{ fontWeight: 'bold', color: strongText }}>
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
               <CardContent sx={{ p: 0, mb: -3.3, color: bodyColor }}>
                    <Typography variant="h5" sx={{ mt: 1.7, color: thirdLettersColor, letterSpacing: 1}} >
                         React Developer
                    </Typography>
                    <Typography sx={{ mt: 0.5, mb: 3.24, color: thirdLettersColor, letterSpacing: 0.62}} >
                         Amdocs via Appgr8
                    </Typography>
                    <Typography variant="p" sx={{ fontWeight: 'bold', color: strongText }}>
                         July 2021 - Nov 2021
                         <br />
                    </Typography>
                    <Box sx={{ height: theme.spacing(1.7) }} />
                    <Typography variant="p">
                         Building a new application for the mobile network operator.
                         <br />
                    </Typography>
                    <Box sx={{ height: theme.spacing(1.7) }} />
                    <Typography variant="p" >
                         Using REACT, MATERIAL UI, TYPESCRIPT, SOURCETREE, BITBUCKET ect.
                         <br />
                    </Typography>

                    <Box sx={{ height: theme.spacing(1.7) }} />
                    <Typography variant="p" >
                         For the software development the company used AGILE with the SCRUM framework and JIRA.
                         <br />
                    </Typography>
               </CardContent>
          </Card>
     )


     return (
          <div style={sectionsContainer}>
               <div style={titleContainer}>
                    <div>{cardTitle}</div>
                    <Box style={sectionsBody} 
                         
                    >
                         <Box style={sections}>
                              {/* {img} */}
                              {groundbits('Dec 2021 – Present', 'Ricard Rosson', 'ricard@iacos.net')}
                         </Box>

                         <Box style={sections} >
                              <Box sx={{ height: theme.spacing(min_width_600px ? 0 : 2.4) }} />
                              {amdocs}
                              <Box sx={{ height: theme.spacing(2.4) }} />
                              {groundbits('Jan 2020 – Jan 2021')}
                         </Box>
                    </Box>
               </div>
          </div>
     )
}


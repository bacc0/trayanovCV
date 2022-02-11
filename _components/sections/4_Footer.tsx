import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPostOfficeSharpIcon from '@mui/icons-material/LocalPostOfficeSharp';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import PhoneEnabledSharpIcon from '@mui/icons-material/PhoneEnabledSharp';
import styles from './sectionsStyles.module.scss';
import { Card, CardContent, Box, useTheme } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { IProps } from './_CombineSections';
import { TState } from '../../store/hooks';
import { useSelector } from 'react-redux';


const Footer: React.FC<IProps> = ({ cardStyle, p_spacing }) => {


     const min_width_600px = useSelector((state: TState) => state.min_width_600px_Reducer.value);
     const colors = useSelector((state: TState) => state.appColorsReducer.value);
     
     const { footerColor, strongText, footerTextColor } = colors;

     const theme: Theme = useTheme();

     const hrefStyle = { color: footerTextColor };

     const leftSection = (
          <Card sx={cardStyle}>
               <CardContent sx={{ p: 0, mt: 1.8, mb: -3.3, color: strongText }}>
                    <a className={styles.hrefStyle} style={hrefStyle}
                         href={'https://www.linkedin.com/in/veselin-trayanov-219506171/'}
                    >
                         <div className={styles.icons_container}>
                              <div className={styles.icons}>
                                   <LinkedInIcon fontSize='small' />
                              </div>
                         </div>
                         LinkedIn
                    </a>

                    {p_spacing}

                    <a className={styles.hrefStyle} style={hrefStyle} href={`mailto: bacco23@gmail.com`}>
                         <div className={styles.icons_container}>
                              <div className={styles.icons}>
                                   <LocalPostOfficeSharpIcon fontSize='small' />
                              </div>
                         </div>
                         bacco23@gmail.com
                    </a>

                    {p_spacing}

                    <a className={styles.hrefStyle} style={hrefStyle} href={`tel: 00447590010066`}>
                         <div className={styles.icons_container}>
                              <div className={styles.icons}>
                                   <PhoneEnabledSharpIcon fontSize='small' />
                              </div>
                         </div>
                         +44 (0) 7590 010066
                    </a>

                    {p_spacing}

               </CardContent>
          </Card>
     );

     const rightSection = (
          <Card sx={{ ...cardStyle, ...{ mt: min_width_600px ? 1.8 : -5.3 } }}>
               <CardContent sx={{ p: 0, mb: -3.3, color: strongText }}>
                    <a className={styles.hrefStyle} style={hrefStyle} href={'https://github.com/bacc0'}>
                         <div className={styles.icons_container}>
                              <div className={styles.icons}>
                                   <GitHubIcon fontSize='small' />
                              </div>
                         </div>
                         GitHub
                    </a>

                    {p_spacing}

                    <a className={styles.hrefStyle} style={hrefStyle}
                         href={'https://www.google.com/maps/@51.4764334,-0.1572618,16.21z'}
                    >
                         <div className={styles.icons_container}>
                              <div className={styles.icons}>
                                   <LocationOnSharpIcon fontSize='small' />
                              </div>
                         </div>
                         Battersea, London, UK
                    </a>

                    {p_spacing}

               </CardContent>
          </Card>
     );


     return (
          <div className={`${styles.sectionsContainer} ${styles.footer_Container}`}
               style={{ backgroundColor: footerColor }}
          >
               <div className={styles.titleContainer}>
                    <Box className={styles.sectionsBody}>
                         <div className={styles.sections}>
                              {leftSection}
                         </div>
                         <div className={styles.sections}>
                              <Box sx={{ height: theme.spacing(min_width_600px ? 0 : 2.4) }} />
                              {rightSection}
                         </div>
                    </Box>
               </div>
          </div>
     )
};


export default Footer;




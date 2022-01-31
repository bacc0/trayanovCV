import * as React from 'react'
import { Box, Card } from '@mui/material'
import Veselin from './_illustratins/Veselin'
import { useSelector } from 'react-redux'

import styles from './PageNav.module.scss';


const PageNav = () => {


     const colors = useSelector(state => state.appColorsReducer.value)

     const style = {
          typing_container: {
               // minHeight: '100px',
               // minHeight: '30px',
               // minWidth: '300px',
               // position: 'absolute',
               // top: '149px',
               // left: '40px'
          },
          card_container: {
               // position: 'relative',
               // top: '14px',
               // height: '100%',
               // display: 'flex',
               // alignItems: 'center',
               background: 'transparent',
               boxShadow: 0,
          }
     }


     const cardTitle = (
          <Card sx={style.card_container} className={styles.card_container}>
               <Box>
                    <Veselin color={colors.bodyColor} />
               </Box>
               <Box sx={style.typing_container} className={styles.typing_container}>
               </Box>
          </Card>
     )

     return cardTitle
}

export default React.memo(PageNav);


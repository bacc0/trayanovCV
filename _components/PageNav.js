import * as React from 'react'
import { Box, Card } from '@mui/material'
import Veselin from './_illustratins/Veselin'
import { useSelector } from 'react-redux'


export default function MenuAppBar() {


     const colors = useSelector(state => state.appColorsReducer.value)

     const style = {
          typing_container: {
               minHeight: 100,
               minHeight: '30px',
               minWidth: '300px',
               position: 'absolute',
               top: 149,
               left: 40
          },
          card_container: {
               position: 'relative',
               top: 14,
               height: '100%',
               display: 'flex',
               alignItems: 'center',
               background: 'transparent',
               boxShadow: 0,
          }
     }


     const cardTitle = (
          <Card sx={style.card_container}>
               <Box>
                    <Veselin color={colors.bodyColor} />
               </Box>
               <Box sx={style.typing_container}>
               </Box>
          </Card>
     )

     return cardTitle
}



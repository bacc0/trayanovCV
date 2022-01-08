import { typeWriter } from './_sections/helpers/TypeWriter'
import * as React from 'react'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Veselin from './_illustratins/Veselin'


export default function MenuAppBar({ state }) {
 

     const style_typing_container = {
          // backgroundColor: 'tan',
          minHeight: 100,
          minHeight: '30px', 
          minWidth: '300px',
          position: 'absolute',
          top: 149,
          left: 40
     }

     const style_typing = {
          color: state.bodyColor,
          fontSize: 19,
          fontWeight: 400,
          letterSpacing: 1.3,
     }

     const [vis, setVis] = React.useState(false)

     // setInterval(() => { setVis(true) }, 3200);
     setInterval(() => { setVis(true) }, 2350)


     const typing = (
          <Typography variant='h3' sx={style_typing}>
               {vis && (<div>
                    {typeWriter([ '... end ', 'front end developer' ])}
               </div>)}
          </Typography>
     )

     const card_style_container = {
          position: 'relative',
          top: 14,
          // backgroundColor: 'tan',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          background: 'transparent',
          boxShadow: 0
     }

     const cardTitle = (
          <Card sx={card_style_container}>
               <Box>
                    <Veselin color={state.bodyColor} /> // state.strongText
               </Box>
               <Box sx={style_typing_container}>
                    {typing}
               </Box> 
          </Card>
     )


     return cardTitle
}



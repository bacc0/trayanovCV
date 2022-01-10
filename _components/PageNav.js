import { typeWriter } from './_sections/helpers/TypeWriter'
import * as React from 'react'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Veselin from './_illustratins/Veselin'
import { motion, } from 'framer-motion'

export default function MenuAppBar({ state, min_width_600px }) {


     const style_typing_container = {
          // backgroundColor: 'tan',
          minHeight: 100,
          minHeight: '30px',
          minWidth: '300px',
          position: 'absolute',
          top: 149,
          left: 40
     }

     const card_style_container = {
          position: 'relative',
          top: 14,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          background: 'transparent',
          boxShadow: 0,
          
     }

     const cardTitle = (
          <Card sx={card_style_container}>
               <Box>
                    <Veselin color={state.bodyColor} min_width_600px={min_width_600px}/>
               </Box>
               <Box sx={style_typing_container}>
                    {/* <div style={{ transform: scale, transition: `transform 200ms linear` }} >
                         {typing}
                    </div> */}
               </Box>
          </Card>
     )


     return cardTitle
}



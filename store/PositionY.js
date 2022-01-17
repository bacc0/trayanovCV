import { createSlice } from '@reduxjs/toolkit';


const Y_PositionSlice = createSlice({
     name: 'Y-position',
     initialState: { Y: 0 },
     reducers: {
          UPDATE_Y_POSITION(state, action) {
               state.Y = action.payload
          }
     }
})

export const Y_PositionActions = Y_PositionSlice.actions;

export default Y_PositionSlice


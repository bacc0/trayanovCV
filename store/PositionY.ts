import { createSlice } from '@reduxjs/toolkit';

const Y_PositionSlice = createSlice({
     name: 'Y-position',
     initialState: { value: 0 },
     reducers: {
          UPDATE_Y_POSITION(state, action) {
               state.value = action.payload
          }
     }
});


export const Y_PositionActions = Y_PositionSlice.actions;

export default Y_PositionSlice;


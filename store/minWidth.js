import { createSlice } from '@reduxjs/toolkit';


const min_width_600px = createSlice({
     name: 'min-width-600-px',
     initialState: { value: true },
     reducers: {
          MIN_WIDTH(state, action) {
               state.value = action.payload
          }
     }
})

export const min_width_600px_Actions = min_width_600px.actions;

export default min_width_600px


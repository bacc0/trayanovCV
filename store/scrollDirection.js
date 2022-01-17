import { createSlice } from '@reduxjs/toolkit';


const scrollDirectionSlice = createSlice({
     name: 'scroll-direction',
     initialState: { direction: 'down' },
     reducers: {
          UP(state) {
               state.direction = 'up'
          },
          DOWN(state) {
               state.direction = 'down'
          },
     }
})

export const scrollDirectionActions = scrollDirectionSlice.actions;

export default scrollDirectionSlice


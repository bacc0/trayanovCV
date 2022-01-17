import { createSlice } from '@reduxjs/toolkit';


const scrollDirectionSlice = createSlice({
     name: 'scroll-direction',
     initialState: { value: 'down' },
     reducers: {
          UP(state) {
               state.value = 'up'
          },
          DOWN(state) {
               state.value = 'down'
          },
     }
})

export const scrollDirectionActions = scrollDirectionSlice.actions;

export default scrollDirectionSlice


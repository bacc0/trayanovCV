import { createSlice } from '@reduxjs/toolkit';


const CurrentBrowserSlice = createSlice({
     name: 'Y-position',
     initialState: { value: '' },
     reducers: {
          UPDATE_CURRENT_BROWSER(state, action) {
               state.value = action.payload
          }
     }
})


export const CurrentBrowserActions = CurrentBrowserSlice.actions;

export default CurrentBrowserSlice


import { createSlice } from '@reduxjs/toolkit';

const windowSlice = createSlice({
     name: 'window-size',
     initialState: { width: 0, height: 0 },
     reducers: {
          GET_WINDOW_WIDTH(state, action) {
               state.width = action.payload
          },
          GET_WINDOW_HEIGHT(state, action) {
               state.height = action.payload
          }
     }
});

export const windowSizeActions = windowSlice.actions;

export default windowSlice;


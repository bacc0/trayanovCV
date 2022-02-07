import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
     name: 'theme',
     initialState: { color: 'light' },
     reducers: {
          TOGGLE_THEME(state) {
               state.color = state.color === 'dark' ? 'light' : 'dark'
          }
     }
});

export const themeActions = themeSlice.actions;

export default themeSlice;


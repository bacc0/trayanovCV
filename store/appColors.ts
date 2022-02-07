import { createSlice } from '@reduxjs/toolkit';

const color_1 = '#FFFFFF';
const color_2 = '#FAFAFA'; // F2F2F2
const color_3 = '#636189';  
const color_4 = '#3F3D56'; //#040F1B
const color_5 = '#2F2E41';
const color_6 = '#8D30FE';
const color_7 = '#CF68FE';

const initialState = {
     hrColor: color_2,
     bodyColor: color_5,
     strongText: color_3,
     footerColor: color_4,
     hrColorMain: color_5,
     thirdLogoColor: color_6,
     secLettersColor: color_3,
     footerTextColor: color_1,
     backgroundColor: color_5,
     separationsColor: color_1,
     primeLettersColor: color_1,
     thirdLettersColor: color_6,
     backgroundColor_2: color_2,
     AppBackgroundColor: color_1,
};

const appColorsSlice = createSlice({
     name: 'app-colors',
     initialState: { value : initialState },
     reducers: {
          UPDATE_APP_COLORS(state, action) {  // action.payload  === theme
               state.value = {
                    hrColor: action.payload === 'light' ? 'transparent' : 'transparent',
                    bodyColor: action.payload === 'light' ? color_5 : color_1,
                    strongText: action.payload === 'light' ? color_3 : color_2,
                    footerColor: action.payload === 'light' ? color_4 : color_4,
                    hrColorMain: action.payload === 'light' ? color_5 : color_1,
                    thirdLogoColor: action.payload === 'light' ? color_6 : color_6,
                    secLettersColor: action.payload === 'light' ? color_3 : color_2,
                    footerTextColor: action.payload === 'light' ? color_1 : color_1,
                    backgroundColor: action.payload === 'light' ? color_5 : color_1,
                    separationsColor: action.payload === 'light' ? color_1 : color_3,
                    primeLettersColor: action.payload === 'light' ? color_1 : color_5,
                    thirdLettersColor: action.payload === 'light' ? color_6 : color_7,
                    backgroundColor_2: action.payload === 'light' ? color_2 : color_4,
                    AppBackgroundColor: action.payload === 'light' ? color_1 : color_4,
               }
          }
     }
});

export const appColorsActions = appColorsSlice.actions;

export default appColorsSlice;


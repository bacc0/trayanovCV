import { createSlice, configureStore } from '@reduxjs/toolkit';

import scrollDirectionSlice from './scrollDirection'
import Y_PositionSlice from './positionY'
import themeSlice from './themeState'
import windowSlice from './windowSize'
import min_width_600px from './minWidth'


import appColorsSlice from './appColors'





const store = configureStore({
     reducer: {
          scrollDirectionReducer: scrollDirectionSlice.reducer,
          Y_PositionSliceReducer: Y_PositionSlice.reducer,
          themeReducer: themeSlice.reducer,
          windowSizeReducer: windowSlice.reducer,
          min_width_600px_Reducer: min_width_600px.reducer,
          
          appColorsReducer: appColorsSlice.reducer
     }
});




export default store;
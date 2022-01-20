import { configureStore } from '@reduxjs/toolkit';

import appColorsSlice from './appColors'
import min_width_600px from './minWidth'
import Y_PositionSlice from './PositionY'
import scrollDirectionSlice from './scrollDirection'
import themeSlice from './themeState'
import windowSlice from './windowSize'


const store = configureStore({
     reducer: {
          appColorsReducer: appColorsSlice.reducer,
          min_width_600px_Reducer: min_width_600px.reducer,
          Y_PositionSliceReducer: Y_PositionSlice.reducer,
          scrollDirectionReducer: scrollDirectionSlice.reducer,
          themeReducer: themeSlice.reducer,
          windowSizeReducer: windowSlice.reducer,
     }
});


export default store;
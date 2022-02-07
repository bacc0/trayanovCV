import { configureStore } from '@reduxjs/toolkit';

import appColorsSlice from './appColors';
import min_width_600px from './minWidth';
import Y_PositionSlice from './PositionY';
import scrollDirectionSlice from './scrollDirection';
import themeSlice from './themeState';
import windowSlice from './windowSize';
import CurrentBrowserSlice from './CurrentBrowser';

const reducers = {
     appColorsReducer: appColorsSlice.reducer,
     min_width_600px_Reducer: min_width_600px.reducer,
     Y_PositionReducer: Y_PositionSlice.reducer,
     scrollDirectionReducer: scrollDirectionSlice.reducer,
     themeReducer: themeSlice.reducer,
     windowSizeReducer: windowSlice.reducer,
     currentBrowserReducer: CurrentBrowserSlice.reducer,
};

const store = configureStore({ reducer: reducers });

// export type TState = ReturnType<typeof store.getState>;

export default store;
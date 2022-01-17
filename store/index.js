import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { scrollDirection: 'down' }

const scrollDirectionSlice = createSlice({
     name: 'scroll-direction',
     initialState: initialState,
     reducers: {
          UP(state) {
               state.scrollDirection ='up'
          },
          DOWN(state) {
               state.scrollDirection = 'down'
          },
          // TEST(state, action) {
          //      state.scrollDirection = action.payload
          // },
     }
})

const store = configureStore({
     reducer: {scrollDirectionReducer: scrollDirectionSlice.reducer}
});



// const scrollDirectionReducer = (state = initialState, action) => {

//      if (action.type === 'UP') {
//           return { scrollDirection: 'up' }
//      };
//      if (action.type === 'DOWN') {
//           return { scrollDirection: 'down' }
//      };

//      return state;
// }




export const scrollDirectionActions = scrollDirectionSlice.actions;

export default store;
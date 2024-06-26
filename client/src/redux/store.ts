import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cart.slice';
import cardSlice from './slices/card.slice';

const rootReducer = combineReducers({
    cartSlice,
    cardSlice
});
export const store = configureStore({
  reducer: rootReducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
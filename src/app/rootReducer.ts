import { combineReducers } from '@reduxjs/toolkit';
import studiesReducer from '../features/studies/studiesSlice';

export const rootReducer = combineReducers({
  studies: studiesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

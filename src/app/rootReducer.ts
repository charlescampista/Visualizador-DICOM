import { combineReducers } from '@reduxjs/toolkit';
import studiesReducer from '../features/studies/studiesSlice';
import patientsReducer from '../features/patients/patientsSlice'

export const rootReducer = combineReducers({
  studies: studiesReducer,
  patients: patientsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

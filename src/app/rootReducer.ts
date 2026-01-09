import { combineReducers } from '@reduxjs/toolkit';
import studiesReducer from '../features/studies/studiesSlice';
import seriesReducer from '../features/series/seriesSlice';
import patientsReducer from '../features/patients/patientsSlice'
import instancesReducer from '../features/instances/instanceSlice'

export const rootReducer = combineReducers({
  studies: studiesReducer,
  patients: patientsReducer,
  series: seriesReducer,
  instances: instancesReducer
});

export type RootState = ReturnType<typeof rootReducer>;

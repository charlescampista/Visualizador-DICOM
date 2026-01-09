import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { WorklistPatient } from '../../types/WorklistPatient';

type PatientsState = {
  list: WorklistPatient[];
  selectedPatient: WorklistPatient | null;
};

const initialState: PatientsState = {
  list: [],
  selectedPatient: null,
};

const patientsSlice = createSlice({
  name: 'patients',
  initialState,
  reducers: {
    setPatients(state, action: PayloadAction<WorklistPatient[]>) {
      state.list = action.payload;
    },
    selectPatient(state, action: PayloadAction<WorklistPatient>) {
      state.selectedPatient = action.payload;
    },
  },
});

export const { setPatients, selectPatient } = patientsSlice.actions;

export default patientsSlice.reducer;

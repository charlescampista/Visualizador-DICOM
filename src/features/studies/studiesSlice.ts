import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Study } from '../../types/Study';

type StudiesState = {
  list: Study[];
  selectedStudy: Study | null;
};

const initialState: StudiesState = {
  list: [],
  selectedStudy: null,
};

const studiesSlice = createSlice({
  name: 'studies',
  initialState,
  reducers: {
    setStudies(state, action: PayloadAction<Study[]>) {
      state.list = action.payload;
    },
    selectStudy(state, action: PayloadAction<Study>) {
      state.selectedStudy = action.payload;
    },
  },
});

export const { setStudies, selectStudy } = studiesSlice.actions;

export default studiesSlice.reducer;

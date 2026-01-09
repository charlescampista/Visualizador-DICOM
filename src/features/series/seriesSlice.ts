import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Serie } from '../../types/Serie';

type SerieState = {
  list: Serie[];
  selectedSerie: Serie | null;
};

const initialState: SerieState = {
  list: [],
  selectedSerie: null,
};

const seriesSlice = createSlice({
  name: 'serie',
  initialState,
  reducers: {
    setSeries(state, action: PayloadAction<Serie[]>) {
      state.list = action.payload;
    },
    selectSerie(state, action: PayloadAction<Serie>) {
      state.selectedSerie = action.payload;
    },
  },
});

export const { setSeries, selectSerie } = seriesSlice.actions;

export default seriesSlice.reducer;

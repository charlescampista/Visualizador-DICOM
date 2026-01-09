import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Instance } from '../../types/Instance'; // seu tipo Instance

type InstanceState = {
  list: Instance[];
  selectedInstance: Instance | null;
};

const initialState: InstanceState = {
  list: [],
  selectedInstance: null,
};

const instanceSlice = createSlice({
  name: 'instances',
  initialState,
  reducers: {
    setInstances(state, action: PayloadAction<Instance[]>) {
      state.list = action.payload;
    },
    selectInstance(state, action: PayloadAction<Instance>) {
      state.selectedInstance = action.payload;
    },

  },
});

export const { setInstances, selectInstance } = instanceSlice.actions;

export default instanceSlice.reducer;

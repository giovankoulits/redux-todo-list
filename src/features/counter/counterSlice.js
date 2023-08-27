import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value > 0) state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      if (!Number.isNaN(action.payload))
        state.value += parseInt(action.payload);
    },
  },
});

export const getCounterValue = (state) => state.counter.value;

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;

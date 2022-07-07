import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'

const initialState: string = 'standby';

const checkStatusSlice = createSlice({
  name: 'checkStatus',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<string>) => action.payload
  }
});

const store = configureStore({
  reducer: checkStatusSlice.reducer
});

export const setCheckStatus = checkStatusSlice.actions.set;

export type RootState = ReturnType<typeof store.getState>

export default store;
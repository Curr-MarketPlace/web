import { createSlice } from '@reduxjs/toolkit';

const addressSlice = createSlice({
  name: 'address',
  initialState: {
    value: '',
  },
  reducers: {
    updateString: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateString } = addresSlice.actions;
export default addresSlice.reducer;
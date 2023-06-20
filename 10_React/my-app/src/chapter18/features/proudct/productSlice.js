import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  value: [],
}


export const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    addList: (state, action) => {
      state.value.push(action.payload);
    }
  }
});


export const { addList } = productSlice.actions

export default productSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "GPT-Search",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    gptToggle: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});
export const { gptToggle } = gptSlice.actions;
export default gptSlice.reducer;

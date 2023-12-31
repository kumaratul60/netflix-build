import { createSlice } from "@reduxjs/toolkit";

const watchLaterSlice = createSlice({
  name: "watchlater",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const itemId = action.payload.id;

      const index = state.items.findIndex((item) => {
        return item.id === itemId;
      });
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export default watchLaterSlice.reducer;
export const { addItem, removeItem, clearCart } = watchLaterSlice.actions;

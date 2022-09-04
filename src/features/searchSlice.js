import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: "",
  allCountry: "",
};
export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateSearch: (state, payload) => {
      state.value = payload;
    },
    updateAllCountry: (state, payload) => {
      state.allCountry = payload;
    },
  },
});

export const { updateSearch, updateAllCountry } = searchSlice.actions;
export default searchSlice.reducer;

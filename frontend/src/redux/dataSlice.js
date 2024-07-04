import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "myData",
  initialState: {
    allIndiData: null,
    openDialog: false,
    allData: [],
    updated: false,
  },
  reducers: {
    setData: (state, action) => {
      state.allIndiData = action.payload;
    },

    setOpenDialog: (state, action) => {
      state.openDialog = action.payload;
    },

    setAllData: (state, action) => {
      state.allData = action.payload;
    },
    setUpdated: (state, action) => {
      state.updated = action.payload;
    },
  },
});

export const { setData, setOpenDialog, setAllData, setUpdated } =
  dataSlice.actions;
export default dataSlice.reducer;

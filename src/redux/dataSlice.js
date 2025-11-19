import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  data: [],
  loading: false,
  error: null,
};
export const getAllData = createAsyncThunk("data/getData", async () => {
    const allData = [];
  try {
    const querySnapshot = await getDocs(collection(db, "todolist"));
    querySnapshot.forEach((doc) => {
      allData.push({ id: doc.id, ...doc.data() });
    });
    return allData;
  } catch (error) {
    throw error;
  }});


export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {


  },
  extraReducers: (builder) => {
    builder
    .addCase(getAllData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAllData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {} = dataSlice.actions;
export default dataSlice.reducer;
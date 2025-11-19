import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getAllData = createAsyncThunk("data/getAllData", async () => {
  const allData = [];
  try {
    const querySnapshot = await getDocs(collection(db, "todolist"));
    querySnapshot.forEach((doc) => {
      allData.push({ id: doc.id, ...doc.data() });
    });
    return allData;
  } catch (error) {
    throw error;
  }
});
export const saveData = createAsyncThunk("data/saveData", async (value) => {
  try {
    const docRef = await addDoc(collection(db, "todolist"), {
      content: value,
    });

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
});

const initialState = {
  data: [],
  userInput: null,
  loading: false,
  isSaved: false,
  error: null,
};
export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setUserInput: (state, action) => {
      state.userInput = action.payload;
    },
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
      })
      .addCase(saveData.pending, (state) => {
        state.loading = true;
      })
      .addCase(saveData.fulfilled, (state) => {
        state.loading = false;
        state.isSaved = !state.isSaved;
        state.userInput = null;
      })
      .addCase(saveData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setUserInput } = dataSlice.actions;
export default dataSlice.reducer;

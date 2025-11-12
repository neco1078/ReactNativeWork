import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }) => {
    // console.log(email);
    // console.log(password);
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const token = user.stsTokenManager.accessToken;
      const userData = { token, user: user };
      return userData;
    } catch (error) {
      console.log("userSlice 21 line:", error);
      throw error;
    }
  }
);

const initialState = {
  // email: null,
  // password: null,
  isLoading: false,
  isAuth: false,
  token: null,
  user: null,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    // setLogin: (state, action) => {
    //   if (
    //     state.email === state.User.userEmail &&
    //     state.password === state.User.userPassword
    //   ) {
    //     state.isAuth = true;
    //   } else {
    //     state.isAuth = false;
    //   }
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuth = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuth = false;
        state.error = action.error.message;
      });
  },
});

// Action creators are generated for each case reducer function
export const { setEmail, setPassword, setIsLoading } = userSlice.actions;

export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  password: null,
  isLoading: false,
  isAuth: false,
  User: {
    userEmail: "test@test.com",
    userPassword: "1234",
  },
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
    setLogin: (state, action) => {
      if(state.email === state.User.userEmail && state.password === state.User.userPassword){
        state.isAuth = true;
      } else {
        state.isAuth = false;
      }
    }
  },
});

// Action creators are generated for each case reducer function
export const { setEmail, setPassword, setIsLoading,setLogin } = userSlice.actions;

export default userSlice.reducer;

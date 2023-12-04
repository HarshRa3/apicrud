import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";
import Instance from "../Axios/Instance";

const initialState = {
  loading: false,
  isError: false,
  isSuccess: false,
  data: [],
};

const signUp = createSlice({
  name: "signup",
  initialState: initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
      state.isError = false;
    },
    loginSuccessful: (state, action) => {
      state.loading = false;
      state.isError = false;
      state.isSuccess = true;
      state.data = { ...action.payload };
    },
    hasError: (state, action) => {
      state.loading = false;
      state.isError = true;
      state.isSuccess = false;
      state.errorMessage = action.payload;
    },
    resetReducer(state) {
      state.isError = false;
      state.loading = false;
      state.isSuccess = false;
      state.data = {};
    },
  },
});

export const signUpApi = async (payload) => {
  dispatch(startLoading());
  try {
    let response = await Instance.post(
      `add_user?username=${payload.name}&password=${payload.password}&role=${payload.role}`
    );
    dispatch(signUp.actions.loginSuccessful(response.data));
    console.log(response.data);
  } catch (e) {
    dispatch(signUp.actions.hasError(e));
  }
};
export const { startLoading, loginSuccessful, hasError, resetReducer } =
  signUp.actions;

export default signUp.reducer;

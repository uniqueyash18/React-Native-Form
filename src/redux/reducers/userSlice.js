import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "User",
  initialState:{value:[] },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.value.splice(action.payload, 1);
}
  } 
});

export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;

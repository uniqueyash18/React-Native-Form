import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import userSlice from "./reducers/userSlice";
const middlewares = [thunk]
export const store=configureStore({
    reducer:{
        users:userSlice,
    }
},applyMiddleware(...middlewares)
)
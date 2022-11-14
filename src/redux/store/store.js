import { configureStore } from "@reduxjs/toolkit";
import reminderReducer from "../reducer/reminderReducer";
import userReducer from "../reducer/userReducer";

export const store = configureStore({
    reducer: {
        reminderReducer: reminderReducer,
        userReducer: userReducer,
    }
});
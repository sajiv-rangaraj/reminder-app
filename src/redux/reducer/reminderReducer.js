import { createSlice } from "@reduxjs/toolkit";
import { setDataToLocal, getDataFromLocal } from "../../utils/LocalStorage";

const reminderSlicer = createSlice({
    name: "reminderList",
    initialState: getDataFromLocal("reminderList"),
    reducers: {
        addreminder: (state, action) => {
            state.push(action.payload);
            setDataToLocal("reminderList", state);
        },
        
        deleteReminder: (state, action) => {
            console.log(state, action);
            state?.forEach(data => {
                if(data.id === action.payload.id){
                    state.splice(state.indexOf(action.payload.id), 1);
                }
            })
            setDataToLocal("reminderList", state);
        },
        
        updateReminder: (state, action) => {
            console.log(state, action.payload);
            state.forEach(data => {
                if( data.id === action.payload.id ) {
                    data.description = action.payload.description;
                    data.date = action.payload.date;
                }
            });
            setDataToLocal("reminderList", state);
        }
    }
});

const reminderReducer = reminderSlicer.reducer;

export const { addreminder, deleteReminder, updateReminder } = reminderSlicer.actions;
export default reminderReducer; 

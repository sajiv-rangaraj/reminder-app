import { createSlice } from "@reduxjs/toolkit";
import { setDataToLocal, getDataFromLocal } from "../../utils/LocalStorage";

const userSlicer = createSlice({
    name: "userList",
    initialState: {
        alluser: getDataFromLocal('userList'),
        currentUser: {},
        checkUser: false
    },
    reducers: {
        setUser: (state, action) => {
            state.currentUser = action.payload;
        },

        allUser: (state, action) => {
            let userArray = state.alluser;
            userArray.push(action.payload)
            state.alluser = userArray;
            setDataToLocal("userList", state.alluser);
        },
        
        checkUser: (state, action) => {
            state.alluser.forEach(user => {
                if(user.userName === action.payload.userName){ 
                    state.checkUser = true;
                    setDataToLocal("checkUser", state.checkUser);
                    setDataToLocal("currentUser", user);
                }
             });
        }
    }
});

const userReducer = userSlicer.reducer;

export const { setUser, allUser, checkUser } = userSlicer.actions;
export default userReducer;
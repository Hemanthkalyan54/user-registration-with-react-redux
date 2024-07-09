import { createSlice } from "@reduxjs/toolkit";

const Userslice = createSlice({
    name: 'Userslice',
    initialState: {
        userInput: {
            userName: "",
            userEmail: "",
        },
        userList: [],
    },
    reducers: {
        onInputchange(state, action) {
            //action == type ,payload
            let { name, value } = action.payload;
            state.userInput[name] = value;
        },
        saveUser(state) {
            state.userList.push({...state.userInput});
            state.userInput = {
                userName: "",
                userEmail: "",
            }

        },
    },
});
export default Userslice;
export const { onInputchange, saveUser } = Userslice.actions;
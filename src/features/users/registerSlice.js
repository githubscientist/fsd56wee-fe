import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
    name: 'register',
    initialState: {
        name: '',
        username: '',
        password: '',
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
    }
});

export const { setName, setUsername, setPassword } = registerSlice.actions;

export const selectName = state => state.register.name;
export const selectUsername = state => state.register.username;
export const selectPassword = state => state.register.password;

export default registerSlice.reducer;
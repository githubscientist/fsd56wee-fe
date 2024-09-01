import { createSlice } from "@reduxjs/toolkit";

export const reviewSlice = createSlice({
    name: "reviews",
    initialState: {
        content: ""
    },
    reducers: {
        setContent: (state, action) => {
            state.content = action.payload;
        }
    }
});

export const { setContent } = reviewSlice.actions;

export const selectContent = (state) => state.reviews.content;

export default reviewSlice.reducer;
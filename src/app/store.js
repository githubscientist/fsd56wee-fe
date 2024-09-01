import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../features/users/registerSlice";
import loginReducer from "../features/users/loginSlice";
import reviewReducer from "../features/reviews/reviewSlice";

const store = configureStore({
    reducer: {
        register: registerReducer,
        login: loginReducer,
        reviews: reviewReducer
    }
});

export default store;
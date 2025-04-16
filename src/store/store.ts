import { configureStore } from "@reduxjs/toolkit";
import genresSlice from "./Slices/genresslice";
import globalSlice from "./Slices/globalslice";
import filmsSlice from "./Slices/filmsslice";

export const store = configureStore({
    reducer: {
        genresData: genresSlice,
        globalData : globalSlice,
        filmsData : filmsSlice
    }
})



// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
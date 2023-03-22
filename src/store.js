import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { itemApi } from "./services/data";

export const store = configureStore ({
    reducer: {
        [itemApi.reducerPath]: itemApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(itemApi.middleware),
})

setupListeners(store.dispatch)
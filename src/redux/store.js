import { configureStore } from '@reduxjs/toolkit';
import Setting from './useSetting';
import Music from './useMusic';
import ListProduct from './useListProduct';
export default configureStore({
    reducer: {
        Setting, Music, ListProduct
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})
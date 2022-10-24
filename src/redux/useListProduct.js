import { createSlice } from '@reduxjs/toolkit';
import { ListWebsite } from '../data/ListWebiste';
import FilterListProduct from '../common/filterListProduct';
export const useListProduct = createSlice({
    name: "useListProduct",
    initialState: {
        data: ListWebsite,
        list: [],
        page: 1,
        search: "",
    },
    reducers: {
        get: (state, action) => {
            state.list = state.data.slice(0, 4);
        },
        nextPage: (state, action) => {
            state.page = state.page + 1;
            state.list = FilterListProduct(state.data, state.search).slice((state.page - 1) * 4, state.page * 4);
        },
        prevPage: (state, action) => {
            state.page = state.page - 1;
            state.list = FilterListProduct(state.data, state.search).slice((state.page - 1) * 4, state.page * 4);
        },
        search: (state, action) => {
            state.search = action.payload === "All" ? "" : action.payload;
            state.page = 1;
            state.list = FilterListProduct(state.data, state.search).slice((state.page - 1) * 4, state.page * 4);
        },
    }
})
export const {
    get, nextPage, prevPage, search
} =
    useListProduct.actions;
export default useListProduct.reducer;
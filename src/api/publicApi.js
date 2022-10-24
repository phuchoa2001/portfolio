import axiosClient from './axiosClient';

export const publicApi = {
    getApp(params) {
        return axiosClient.post("/public/app", { params, filter: "showProfolio" });
    },
    getCategory() {
        return axiosClient.get("/public/category");
    }
};

// import { instance } from "@/axios/config";

// export const fetchProducts = () => async (dispatch: any) => {
//     try {
//         // call api
//         const data = await instance.get(`/products`);
//         // rerender
//         dispatch({ type: "product/fetchProducts", payload: data });
//     } catch (error: any) {
//     } finally {
//     }
// };

import { instance } from "@/axios/config";
import { pause } from "@/utils/pause";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchProducts = () => async (dispatch: any) => {
//     dispatch({ type: "product/fetching" }) // isloading true
//     try {
//         await pause(1000);
//         const data = await instance.get(`/products`);
//         dispatch({ type: "product/fetchingSuccess", payload: data });
//     } catch (error: any) {
//         dispatch({ type: "product/fetchingFailed", payload: error.message })
//     } finally {
//         dispatch({ type: "product/fetchingFinally" })
//     }
// };

// export const addProduct = (product: any) => async (dispatch: any) => {
//     try {
//         const data = await instance.post(`/products`, product);
//         dispatch({ type: "product/addProduct", payload: data });
//     } catch (error: any) {
//     } finally {
//     }
// };
// export const removeProduct = (product: any) => async (dispatch: any) => {
//     try {
//         await instance.delete(`/products/${product.id}`);
//         dispatch({ type: "product/deleteProduct", payload: product.id });
//     } catch (error: any) {
//     } finally {
//     }
// };
// export const updateProduct = (product: any) => async (dispatch: any) => {
//     try {
//         const data = await instance.put(`/products/${product.id}`, product);
//         dispatch({ type: "product/updateProduct", payload: data });
//     } catch (error: any) {
//     } finally {
//     }
// };

export const getProduct = createAsyncThunk(
    'product/getProduct',
    async () => {
        try {
            const data = await instance.get(`/products`);
            return data;
        } catch (error) {

        }
    }
);
export const addProduct = createAsyncThunk(
    'product/addProduct',
    async (product) => {
        try {
            const data = await instance.post(`/products`, product);
            return data;
        } catch (error) {

        }
    }
);
export const updateProduct = createAsyncThunk(
    'product/updateProduct',
    async (product) => {
        try {
            const data = await instance.patch(`/products/${product.id}`, product);
            return data;
        } catch (error) {

        }
    }
);
export const removeProduct = createAsyncThunk(
    'product/fetchProducts',
    async (id) => {
        try {
            await instance.delete(`/products/${id}`);
            return id;
        } catch (error) {

        }
    }
);
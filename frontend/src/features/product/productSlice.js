import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import productService from "./productService";



/// product initial state
const initialState = {
    products: [],
    product: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",


    addProduct: false,
}




//// save product thunk
export const save = createAsyncThunk("product/save", async (product, thunkAPI) => {
try {
    return await productService.save(product);
} catch (error) {
    console.log("save product thunk error");
    console.log(error);
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    console.log(message);
    return thunkAPI.rejectWithValue(message);
   
}

})


export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false
            state.isLoading = false
            state.isSuccess = false
            state.message = ""
            // state.products = []
        },
        setAddProduct: (state) => {
            state.addProduct = true;
            console.log(state.addProduct)
        },
        resetAddProduct: (state) => {
            state.addProduct = false;
            console.log(state.addProduct)
        },

    },
    extraReducers: (builder)=> {
            builder
            .addCase(save.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(save.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.products.push(action.payload);
            })
            .addCase(save.rejected, (state, action) => {
                state.isLoading = false;
                state.isError= true;
                state.message= action.payload;
            })
    }
})
export const {reset, setAddProduct, resetAddProduct} = productSlice.actions;
export default productSlice.reducer;
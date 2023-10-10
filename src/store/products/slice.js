import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProducts, getSingleProduct, removeProduct } from 'api/products';

const initialState = {
  products: null,
  error: '',
  isLoading: false,
  singleProduct: null,
};
// export const getAllProducts = () => async dispatch => {
//   try {
//     dispatch(productsSlice.actions.pending());
//     const data = await getProducts();
//     dispatch(productsSlice.actions.fulfilled(data));
//   } catch (error) {
//     dispatch(productsSlice.actions.rejected(error));
//   }
// };

// export const getAllProducts = createAsyncThunk(
//   'products/getAllProducts',
//   async (_, { rejectWithValue }) => {
//     try {
//       const data = await getProducts();
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

export const getAllProducts = createAsyncThunk('products/getAllProducts', () =>
  getProducts()
);

export const getProduct = createAsyncThunk('products/getProduct', async id => {
  return await getSingleProduct(id);
});

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async () => {
    return await removeProduct();
  }
);

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload, error }) => {
    state.isLoading = false;
    state.error = error.message;
//     with --// rejectWithValue
//   state.error = payload.message;
};

const handleFullfilled = state => {
  state.isLoading = false;
};

const handleFullfilledAll = (state, { payload }) => {
  state.products = payload;
};

const handleFullfilledSingle = (state, { payload }) => {
  state.singleProduct = payload;
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: builder => {
    builder
      //   .addCase(getAllProducts.pending, handlePending)
      .addCase(getAllProducts.fulfilled, handleFullfilledAll)
      //   .addCase(getAllProducts.rejected, handleRejected)
      //   .addCase(getProduct.pending, handlePending)
      .addCase(getProduct.fulfilled, handleFullfilledSingle)
      //   .addCase(getProduct.rejected, handleRejected)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        handleFullfilled
      );
  },
  //   extraReducers: {
  //     [getAllProducts.pending]: state => {
  //       state.isLoading = true;
  //     },
  //     [getAllProducts.fulfilled]: (state, { payload }) => {
  //       state.isLoading = false;
  //       state.products = payload;
  //     },
  //     [getAllProducts.rejected]: (state, { payload }) => {
  //       state.isLoading = false;
  //       state.error = payload.message;
  //     },
});

export const productsReducer = productsSlice.reducer;

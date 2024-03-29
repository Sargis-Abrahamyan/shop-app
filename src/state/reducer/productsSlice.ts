import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ProductInitialState, ProductData } from '../interface';
import { Product } from 'types/global';
import { Api } from 'service/api';

const initialState: ProductInitialState = {
	products: [],
	loading: false,
	error: null,
};

export const Get_Product = createAsyncThunk<Product[]>(
	'Get/products',
	async (_, { rejectWithValue }) => {
		try {
			const {
				data: { products },
			} = await Api.get<ProductData>(`/products/?&limit=${100}`);

			return products;
		} catch (error) {
			console.error(error);
			return rejectWithValue('Failed to fetch products');
		}
	}
);

const productsSlice = createSlice({
	name: 'shop',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(Get_Product.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(Get_Product.fulfilled, (state, { payload }) => {
				state.loading = false;
				state.products = payload;
			})
			.addCase(Get_Product.rejected, (state, { error }) => {
				state.error = error.message || 'Failed to fetch Products';
			});
	},
});

export default productsSlice.reducer;

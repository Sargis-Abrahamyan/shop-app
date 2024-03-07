import { configureStore } from '@reduxjs/toolkit';
import shopSlice from './reducer/shopSlice';
import cartSlice from './reducer/cartSlice';

export const store = configureStore({
	reducer: {
		shop: shopSlice,
		cart: cartSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

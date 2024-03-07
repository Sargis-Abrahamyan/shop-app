import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from 'types/global';
import { CartInitialState } from 'state/interface';

const initialState: CartInitialState = {
	carts: [],
	totalPrice: 0,
	totalQuantity: 0,
};

const cartSlice = createSlice({
	name: 'carts',
	initialState,
	reducers: {
		addCart: (state, { payload }: PayloadAction<Product>) => {
			const existingICart = state.carts.findIndex((cart: { id: number }) => cart.id === payload.id);
			if (existingICart >= 0) {
				state.carts[existingICart].quantity++;
			} else {
				state.carts.push({ ...payload, quantity: 1 });
			}
			state.totalPrice += payload.price;
		},
		getCartTotal: (state) => {
			let { totalQuantity, totalPrice } = state.carts.reduce(
				(
					cartTotal: { totalPrice: number; totalQuantity: number },
					cartItem: { price: any; quantity: any }
				) => {
					const { price, quantity } = cartItem;
					const itemTotal = price * quantity;
					cartTotal.totalPrice += itemTotal;
					cartTotal.totalQuantity += quantity;
					return cartTotal;
				},
				{
					totalPrice: 0,
					totalQuantity: 0,
				}
			);
			state.totalPrice = parseInt(totalPrice.toFixed(2));
			state.totalQuantity = totalQuantity;
		},
		removedCart: (state, { payload }: PayloadAction<number>) => {
			state.carts = state.carts.filter((item) => item.id !== payload);
		},
		incrementQuantity: (state, { payload }: PayloadAction<number>) => {
			const { carts } = state;
			const cartIncrement = carts.findIndex((cart) => cart.id === payload);
			if (cartIncrement !== -1) {
				carts[cartIncrement].quantity++;
			}
		},
		decrementQuantity: (state, { payload }: PayloadAction<number>) => {
			const { carts } = state;
			const cartDecrement = carts.findIndex((cart) => cart.id === payload);

			if (cartDecrement !== -1 && carts[cartDecrement].quantity > 1) {
				carts[cartDecrement].quantity--;
			}
		},
	},
});

export const { addCart, removedCart, incrementQuantity, decrementQuantity, getCartTotal } =
	cartSlice.actions;
export default cartSlice.reducer;

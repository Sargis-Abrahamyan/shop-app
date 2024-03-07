import { Cart, Product } from 'types/global';

export interface ProductData {
	limit: number;
	products: Product[];
	skip: number;
	total: number;
}

export interface ProductInitialState {
	products: Product[];
	loading: boolean;
	error: null | string;
}

export interface CartInitialState {
	carts: Cart[];
	totalPrice: number;
	totalQuantity: number;
}

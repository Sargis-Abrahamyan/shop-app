import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getCartTotal } from 'store/reducer/cartSlice';

export const useCart = () => {
	const dispatch = useAppDispatch();
	const { totalPrice, carts, totalQuantity } = useAppSelector((state) => state.cart);

	useEffect(() => {
		dispatch(getCartTotal());
	}, [dispatch, carts]);

	return {
		totalPrice,
		carts,
		totalQuantity,
	};
};

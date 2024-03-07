import { useAppDispatch } from 'hooks';
import { decrementQuantity, incrementQuantity, removedCart } from 'store/reducer/cartSlice';

export const useCartItem = () => {
	const dispatch = useAppDispatch();

	const handelRemoveCart = (id: number) => {
		dispatch(removedCart(id));
	};

	const handelIcrementQuantity = (id: number) => {
		dispatch(incrementQuantity(id));
	};

	const handelDecrementQuantity = (id: number) => {
		dispatch(decrementQuantity(id));
	};

	return {
		handelRemoveCart,
		handelIcrementQuantity,
		handelDecrementQuantity,
	};
};

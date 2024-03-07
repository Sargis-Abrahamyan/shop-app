import { useCartModal } from 'context/useCartModal';
import { useAppDispatch } from 'hooks';
import { Product } from 'global';
import { addCart } from 'store/reducer/cartSlice';

export const useCartItem = () => {
	const { openCart } = useCartModal();
	const dispatch = useAppDispatch();

	const handelAddCart = (card: Product) => {
		openCart();
		dispatch(addCart(card));
	};

	return {
		handelAddCart,
	};
};

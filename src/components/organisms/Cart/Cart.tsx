import { FC, memo, useEffect } from 'react';
import { Button, Title } from 'components/Atoms';
import { CartItem } from 'components/Molecules';
import { CloseButton, CartContent, CartWrapper } from './cartStyled';
import { getCartTotal } from 'state/reducer/cartSlice';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useCart } from 'context/UseCart';

const Cart: FC = () => {
	const dispatch = useAppDispatch();
	const { totalPrice, carts, totalQuantity } = useAppSelector((state) => state.cart);
	const {  isOpenCart,  closeCart } = useCart();

	useEffect(() => {
		dispatch(getCartTotal());
	}, [dispatch, carts]);


	return (
		<>
			{carts.length > 0 && isOpenCart && (
				<CartWrapper>
					<Title text={` totalPrice : ${totalPrice}$ totalQuantity:${totalQuantity}`} />
					<CloseButton>
						<Button buttonText='X' width={'20px'} onClick={closeCart} />
					</CloseButton>
					<CartContent>
						{carts.map((cart) => (
							<CartItem key={cart.id} cart={cart} />
						))}
					</CartContent>
				</CartWrapper>
			)}
		</>
	);
};

export default memo(Cart);

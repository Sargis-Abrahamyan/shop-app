import { FC, memo } from 'react';
import { Button, Title } from 'components/Atoms';
import { CartItem } from 'components/Molecules';
import { useCartModal } from 'context/useCartModal';
import { useCart } from './useCart';
import { CloseButton, CartContent, CartWrapper } from './cartStyled';

const Cart: FC = () => {
	const { isOpenCart, closeCart } = useCartModal();
	const { totalPrice, carts, totalQuantity } = useCart();

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

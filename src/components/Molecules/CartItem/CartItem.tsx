import { FC } from 'react';
import { Button, Image } from 'components/Atoms';
import { useCartItem } from './useCartItem';
import * as Styled from './cartItemStyled';
import { Cart } from 'global';

interface CartItemProps {
	cart: Cart;
}

const CartItem: FC<CartItemProps> = ({ cart }) => {
	const { id, price, quantity, thumbnail, title } = cart;
	const { handelRemoveCart, handelIcrementQuantity, handelDecrementQuantity } = useCartItem();

	return (
		<Styled.StyledCartItem>
			<Styled.LeftBlock>
				<Image src={thumbnail} alt={title} maxWidth='90px' />
				<Styled.ButtonBlock>
					<Button
						buttonText={'+'}
						width={'10px'}
						bgColor='red'
						onClick={() => handelIcrementQuantity(id)}
					/>
					<Styled.QuantityText>{quantity}</Styled.QuantityText>
					<Button
						buttonText={'-'}
						width={'10px'}
						bgColor='green'
						onClick={() => handelDecrementQuantity(id)}
					/>
				</Styled.ButtonBlock>
			</Styled.LeftBlock>
			<Styled.RightBlock>
				<Styled.Price>{price}$</Styled.Price>
				<Button
					buttonText={'X'}
					width={'40px'}
					bgColor='red'
					onClick={() => handelRemoveCart(id)}
				/>
			</Styled.RightBlock>
		</Styled.StyledCartItem>
	);
};

export default CartItem;

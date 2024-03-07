import { FC } from 'react';
import { Button, Image } from 'components/Atoms';
import { Product } from 'types/global';
import { useAppDispatch } from 'hooks';
import { addCart } from '../../../state/reducer/cartSlice';
import { addCartText } from './../../../constants';
import * as Styled from './cardItemStyled';
import { useCart } from 'context/UseCart';

interface CardItemProps {
	card: Product;
}

const CardItem: FC<CardItemProps> = ({ card }) => {
	const { title, price, category, thumbnail } = card;
	const dispatch = useAppDispatch();

	const { openCart } = useCart();

	// Function to handle adding item to the cart
	const handleAddCart = (card: Product): void => {
		dispatch(addCart(card));
		openCart(); // Attempt to open the cart modal
	};

	return (
		<Styled.CardItem>
			<Styled.CardHeader>
				<Image src={thumbnail} alt={title} />
				<Styled.CardTitle>{title}</Styled.CardTitle>
			</Styled.CardHeader>
			<Styled.CardContent>
				<Styled.CardContentText>
					<Styled.CardContentCategory>{category}</Styled.CardContentCategory>
				</Styled.CardContentText>
			</Styled.CardContent>
			<Styled.CardFooter>
				<Styled.Price>{price} $</Styled.Price>
				<Button buttonText={addCartText} onClick={() => handleAddCart(card)} />
			</Styled.CardFooter>
		</Styled.CardItem>
	);
};

export default CardItem;

import { FC } from 'react';
import { Button, Image } from 'components/Atoms';
import { addCart } from '../../../constants/Constants';
import { CardItemProps } from './CardItemProps';
import { useCartItem } from './useCartItem';
import * as Styled from './cardItemStyled';

const CardItem: FC<CardItemProps> = ({ card }) => {
	const { title, price, category, thumbnail } = card;
	const { handelAddCart } = useCartItem();

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
				<Button buttonText={addCart} onClick={() => handelAddCart(card)} />
			</Styled.CardFooter>
		</Styled.CardItem>
	);
};

export default CardItem;

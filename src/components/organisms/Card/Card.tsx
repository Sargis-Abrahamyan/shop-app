import { FC } from 'react';
import { CardItem } from 'components/Molecules';
import { useAppSelector } from 'hooks';
import { CardContainer } from './cardStyled';

const Card: FC = () => {
	const { products } = useAppSelector((state) => state.products);
	return (
		<CardContainer>
			{products.map((card) => (
				<CardItem key={card.id} card={card} />
			))}
		</CardContainer>
	);
};

export default Card;

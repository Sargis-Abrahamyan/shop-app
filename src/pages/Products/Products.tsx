import { FC } from 'react';
import { Card, Cart } from 'components/organisms';
import { ProductsContainer } from './productsStyled';

const Products: FC = () => {
	return (
		<ProductsContainer>
			<Card />
			<Cart />
		</ProductsContainer>
	);
};

export default Products;

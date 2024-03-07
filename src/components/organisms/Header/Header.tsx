import { FC } from 'react';
import Logo from 'components/Atoms/Logo/Logo';
import { MenuItem } from 'components/Molecules';
import { route } from '../../../mockData/route/route';
import { useAppSelector } from 'hooks';
import { Menu, HeaderContainer, QuantityText, RightBlock } from './headerStyled';

const Header: FC = () => {
	const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);

	return (
		<HeaderContainer>
			<Logo />

			<Menu>
				{route.map((route) => (
					<MenuItem key={route.id} {...route} />
				))}
			</Menu>
			<RightBlock>
				<QuantityText>totalQuantity : {totalQuantity}</QuantityText>
			</RightBlock>
		</HeaderContainer>
	);
};

export default Header;

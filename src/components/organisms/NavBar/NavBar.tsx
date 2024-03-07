import { FC } from 'react';
import Logo from 'components/Atoms/Logo/Logo';
import { MenuItem } from 'components/Molecules';
import { route } from '../../../MockData/route/route';
import { Menu, NavBarContainer } from './navBarStyled';

const NavBar: FC = () => {
	return (
		<NavBarContainer>
			<Logo />
			<Menu>
				{route.map((route) => (
					<MenuItem key={route.id} {...route} />
				))}
			</Menu>
		</NavBarContainer>
	);
};

export default NavBar;

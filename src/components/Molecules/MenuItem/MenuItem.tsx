import { FC } from 'react';
import { Item, MenuLink } from './menuItemStyled';

interface MenuItemProps {
	title?: string;
	path: string;
}

const MenuItem: FC<MenuItemProps> = ({ path, title }) => {
	return (
		<Item>
			<MenuLink to={path}>{title}</MenuLink>
		</Item>
	);
};

export default MenuItem;

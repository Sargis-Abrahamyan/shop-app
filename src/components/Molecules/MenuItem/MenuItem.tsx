import { FC } from 'react';
import { Item, MenuLink } from './menuItemStyled';
import { MenuItemProps } from './MenuItemProps';

const MenuItem: FC<MenuItemProps> = ({ path, title }) => {
	return (
		<Item>
			<MenuLink to={path}>{title}</MenuLink>
		</Item>
	);
};

export default MenuItem;

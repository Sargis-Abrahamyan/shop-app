import { styled } from '../../../module/styled';
import { NavLink as Link } from 'react-router-dom';

export const Item = styled.li``;

export const MenuLink = styled(Link)`
	position: relative;
	color: var(--black-color);

	&.active {
		color: var(--secondary-color);
	}
	&::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -2px;
		width: 0;
		height: 2px;
		background-color: var(--secondary-color);
		transition: width 0.4s;
	}

	&.active::after {
		width: 100%;
	}

	&:hover::after {
		width: 100%;
	}
`;

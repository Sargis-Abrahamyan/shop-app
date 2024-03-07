import { v4 as uuidv4 } from 'uuid';
import { Route } from '../../global';

export const route: Route[] = [
	{
		id: uuidv4(),
		title: 'Home',
		path: '/',
	},
	{
		id: uuidv4(),
		title: 'Products',
		path: '/products',
	},
	{
		id: uuidv4(),
		title: 'contacts',
		path: '/contacts',
	},
];

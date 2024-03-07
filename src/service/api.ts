import axios from 'axios';

const apiUrl = ' https://dummyjson.com';

export const Api = axios.create({
	baseURL: apiUrl,
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json',
	},
});

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { store } from './store';
import { CartProvider } from 'context/CartContext';

import { GlobalStyles } from './globalStyles/globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<GlobalStyles />
			<Provider store={store}>
				<CartProvider>
					<App />
				</CartProvider>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);

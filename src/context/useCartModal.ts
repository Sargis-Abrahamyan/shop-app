import { useContext } from 'react';
import { ModalContext } from './CartContext';

export const useCartModal = () => {
	const context = useContext(ModalContext);

	if (!context) {
		throw new Error('useModal must be used within a ModalProvider');
	}

	return context;
};
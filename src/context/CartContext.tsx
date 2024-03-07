import { useState, createContext } from 'react';
import { ModalContextProps, ModalContextType } from './CartContextProps';

export const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const CartProvider = ({ children }: ModalContextProps) => {
	const [isOpenCart, setIsOpenModal] = useState<boolean>(false);

	const openCart = (): void => {
		setIsOpenModal(true);
		console.log('saq');
	};

	const closeCart = (): void => {
		setIsOpenModal(false);
	};

	return (
		<ModalContext.Provider value={{ isOpenCart, openCart, closeCart }}>
			{children}
		</ModalContext.Provider>
	);
};

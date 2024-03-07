import { createContext, useContext, useState,  ReactNode ,FC} from 'react';

interface ModalContextType {
	isOpenCart: boolean;
	openCart: () => void;
	closeCart: () => void;
}

interface ModalProviderProps {
	children: ReactNode;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const CartProvider : FC <ModalProviderProps> = ({ children }) => {
	const [isOpenCart, setIsOpenCart] = useState<boolean>(false);

	const openCart = (): void => setIsOpenCart(true);
	const closeCart = (): void => setIsOpenCart(false);

	return (
		<ModalContext.Provider value={{ isOpenCart, openCart, closeCart }}>
			{children}
		</ModalContext.Provider>
	);
};

export const useCart = (): ModalContextType => {
	const context = useContext(ModalContext);
	if (!context) {
		throw new Error('useModal must be used within a ModalProvider');
	}
	return context;
};

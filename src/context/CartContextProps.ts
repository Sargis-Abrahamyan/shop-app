import { ReactNode } from 'react';

export type ModalContextType = {
	isOpenCart: boolean;
	openCart: () => void;
	closeCart: () => void;
};

export interface ModalContextProps {
	children: ReactNode;
}

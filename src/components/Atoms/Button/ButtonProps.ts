export interface ButtonProps {
	buttonText: string;
	width?: string | number;
	height?: string;
	type?: 'button' | 'submit';
	size?: 'small' | 'large';
	bgColor?: string;
	onClick?: () => void;
}

import { FC } from 'react';
import { StyledButton } from './buttonStyled';

interface ButtonProps {
	buttonText: string;
	width?: string | number;
	height?: string;
	type?: 'button' | 'submit';
	size?: 'small' | 'large';
	bgColor?: string;
	onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
	buttonText,
	width,
	height,
	type = 'button',
	bgColor,
	size = 'large',
	onClick,
}) => {
	return (
		<StyledButton
			$width={width}
			$height={height}
			$bgColor={bgColor}
			$size={size}
			type={type}
			onClick={onClick}>
			{buttonText}
		</StyledButton>
	);
};

export default Button;

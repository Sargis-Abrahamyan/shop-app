import { FC } from 'react';
import { ButtonProps } from './ButtonProps';
import { StyledButton } from './buttonStyled';

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

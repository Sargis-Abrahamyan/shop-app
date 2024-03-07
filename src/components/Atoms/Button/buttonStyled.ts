import styled from 'styled-components';

export const StyledButton = styled.button<{
	$width?: string | number;
	$height?: string;
	$bgColor?: string;
	$size?: string;
}>`
	width: ${({ $width }) => ($width ? $width : '128.78px')};
	height: ${({ $height }) => ($height ? $height : '2rem')};
	color: var(--primary-color);
	background-color: ${({ $bgColor }) => ($bgColor ? $bgColor : 'var(--secondary-color)')};
	display: flex;
	justify-content: center;
	align-items: center;
	padding-left: 1.3rem;
	padding-right: 1.3rem;
	border-radius: 0.5rem;
	font-size: 1.125rem;
	transition: transform 0.4s;

	&:hover {
		transform: scale(1.1);
		cursor: pointer;
	}

	@media screen and (max-width: 768px) {
		width: ${({ $width }) => $width === 'large' && '100px'};
		font-size: 0.8rem;
	}
`;

import { styled } from '../../../module/styled';

export const FooterContainer = styled.footer`
	position: fixed;
	bottom: 0;
	padding: 1.2rem;
	background-color: bisque;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--secondary-color);
	width: 100%;
	padding: 25px 0;
`;

export const FooterInfo = styled.span`
	position: absolute;
	left: 0;
	right: 0;
	top: 10px;
	text-align: center;
	font-weight: bold;
	color: var(--color-black);
`;

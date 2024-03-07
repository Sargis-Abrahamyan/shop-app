import { styled } from '../../../module/styled';

export const StyledCartItem = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem;
	border-bottom: 2px solid var(--secondary-color);
`;

export const LeftBlock = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const QuantityText = styled.p`
	font-size: 0.8em;
	padding: 0.3rem;
`;

export const ButtonBlock = styled.div`
	display: flex;
	margin-top: 1rem;
`;

export const RightBlock = styled.div`
	display: flex;
	gap: 1rem;
`;

export const Price = styled.p`
	font-size: 0.8em;
`;

import styled from 'styled-components';

export const HeaderContainer = styled.header`
	border-bottom: 1px solid var(--secondary-color);
	padding: 1.2rem;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media screen and (min-width: 768px) {
		padding-left: 3.5rem;
		padding-right: 3.5rem;
	}

	@media screen and (max-width: 635px) {
		flex-direction: column;
		gap: 1.5rem;
	}
`;

export const Menu = styled.ul`
	display: flex;
	gap: 1rem;
`;

export const RightBlock = styled.div``;

export const QuantityText = styled.h4`
	margin-left: 1.3rem;
`;

import { styled } from 'module/styled';

export const NavBarContainer = styled.nav`
	border-bottom: 1px solid var(--secondary-color);
	padding: 1.2rem;
	display: flex;
	align-items: center;

	@media screen and (min-width: 768px) {
		padding-left: 3.5rem;
		padding-right: 3.5rem;
	}

	@media screen and (max-width: 478px) {
		flex-direction: column;
		gap: 1.5rem;
	}
`;

export const Menu = styled.ul`
	display: flex;
	gap: 1rem;
`;

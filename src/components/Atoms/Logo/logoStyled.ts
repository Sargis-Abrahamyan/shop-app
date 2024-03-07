import { styled } from '../../../module/styled';

export const LogoWrapper = styled.div`
	flex: 0 0 55%;

	@media screen and (min-width: 580px) {
		flex: 0 0 40%;
	}
`;

export const LogoTitle = styled.h1`
	font-weight: 700;
	color: var(--secondary-color);
`;

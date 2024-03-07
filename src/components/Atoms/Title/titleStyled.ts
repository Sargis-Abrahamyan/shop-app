import styled from 'styled-components';

export const StyledTitle = styled.h2`
	padding: 1rem;
	text-align: center;

	@media screen and (max-width: 768px) {
		text-align: left;
		font-size: 16px;
	}
`;

export const StyledChangeColorWord = styled.span`
	color: var(--secondary-color);
	margin-left: 10px;
`;

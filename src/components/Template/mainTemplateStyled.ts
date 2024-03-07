import styled from 'styled-components';

export const MainTemplateContainer = styled.main`
	max-width: 1480px;
	min-height: calc(100vh - 151px);
	padding: 0.75rem 1rem;
	margin: auto;

	@media screen and (min-width: 768px) {
		padding-left: 3.5rem;
		padding-right: 3.5rem;
	}
`;

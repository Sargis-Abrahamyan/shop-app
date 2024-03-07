import styled from 'styled-components';

export const CardItem = styled.div`
	width: 11.875em;
	height: 385px;
	box-shadow: var(--box-Shodow);
	cursor: pointer;
	transition: transform 120ms ease-in;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: var(--primary-color);
	padding: 0.5rem;
	border-radius: 5px;
	text-align: left;

	&:hover {
		transform: scale(1.1);
	}

	@media screen and (max-width: 768px) {
		height: 335px;
	}
`;

export const CardHeader = styled.div`
	width: 100%;
	max-width: 298px;
	height: 240px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-direction: column;
	text-align: center;
	box-shadow: var(--box-Shodow);
`;

export const CardTitle = styled.h6``;

export const CardContent = styled.div`
	padding: 25px;
`;

export const CardContentCategory = styled.p`
	color: var(--gray-color);
`;

export const CardContentText = styled.div``;

export const CardFooter = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-right: 0.5rem;

	@media screen and (max-width: 768px) {
		padding-right: 0;
	}
`;

export const Price = styled.span`
	color: var(--gray-color);
`;

import { styled } from 'module/styled';

export const CartWrapper = styled.div`
	position: fixed;
	right: 0;
	top: 0;
	width: 22em;
	height: 100vh;
	background-color: #fff;
	border-left: 1px solid;
	overflow-y: scroll;

	&::-webkit-scrollbar {
		width: 10px;
	}

	&::-webkit-scrollbar-track {
		background: transparent; /* Change this value to adjust the track color */
	}

	&::-webkit-scrollbar-thumb {
		background: green; /* Change this value to adjust the handle color */
	}

	@media screen and (max-width: 768px) {
		width: 16em;
	}
`;

export const CloseButton = styled.div`
	position: absolute;
	right: 1rem;
	top: 1rem;
`;

export const CartContent = styled.div`
	width: 100%;
	height: auto;
`;

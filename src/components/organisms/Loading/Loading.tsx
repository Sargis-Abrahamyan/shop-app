import { FC } from 'react';
import { LoadingContainer, LoadingSpiner } from './loadingStyled';

const Loading: FC = () => {
	return (
		<LoadingContainer>
			<LoadingSpiner />
		</LoadingContainer>
	);
};

export default Loading;

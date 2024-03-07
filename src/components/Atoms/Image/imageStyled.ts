import { styled } from 'module/styled';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const SharedImage = styled(LazyLoadImage)<{ $maxWidth?: string; $height?: string }>`
	width: 100%;
	height: ${({ $height }) => ($height ? $height : '100%')};
	max-width: ${({ $maxWidth }) => ($maxWidth ? $maxWidth : '160px')};
	height: 100px;
	object-fit: contain;
`;

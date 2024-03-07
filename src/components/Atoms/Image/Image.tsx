import { FC } from 'react';
import { SharedImage } from './imageStyled';

interface ImageProps {
	src: string;
	maxWidth?: string;
	height?: string;
	alt: string;
}

const Image: FC<ImageProps> = ({ src, maxWidth, height, alt }) => {
	return <SharedImage src={src} alt={alt} effect='blur' $maxWidth={maxWidth} $height={height} />;
};

export default Image;

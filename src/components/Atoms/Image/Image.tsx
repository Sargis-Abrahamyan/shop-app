import { FC } from 'react';
import { ImageProps } from './ImageProps';
import { SharedImage } from './imageStyled';

const Image: FC<ImageProps> = ({ src, maxWidth, height, alt }) => {
	return <SharedImage src={src} alt={alt} effect='blur' $maxWidth={maxWidth} $height={height} />;
};

export default Image;

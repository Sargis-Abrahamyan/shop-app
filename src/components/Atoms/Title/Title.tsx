import { FC } from 'react';
import { StyledTitle, StyledChangeColorWord } from './titleStyled';

interface TitleProps {
	text: string;
	changeColorText?: string;
}

const Title: FC<TitleProps> = ({ text, changeColorText }) => {
	return (
		<StyledTitle>
			{text}
			{changeColorText && <StyledChangeColorWord>{changeColorText}</StyledChangeColorWord>}
		</StyledTitle>
	);
};

export default Title;

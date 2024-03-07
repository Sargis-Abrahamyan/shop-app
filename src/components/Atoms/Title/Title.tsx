import { FC } from 'react';
import { StyledTitle, StyledChangeColorWord } from './titleStyled';
import { TitleProps } from './TitleProps';



const Title: FC<TitleProps> = ({ text, changeColorText }) => {
	return (
		<StyledTitle>
			{text}
			{changeColorText && <StyledChangeColorWord>{changeColorText}</StyledChangeColorWord>}
		</StyledTitle>
	);
};

export default Title;

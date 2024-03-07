import { FC } from 'react';
import { Footer, NavBar } from 'components/organisms';
import { MainTemplateProps } from './MainTemplateProps';
import { MainTemplateContainer } from './mainTemplateStyled';

const MainTemplate: FC<MainTemplateProps> = ({ children }) => {
	return (
		<>
			<NavBar />
			<MainTemplateContainer>{children}</MainTemplateContainer>
			<Footer />
		</>
	);
};

export default MainTemplate;

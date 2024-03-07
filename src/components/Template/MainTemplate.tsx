import { FC, ReactNode } from 'react';
import { Footer, Header } from 'components/organisms';
import { MainTemplateContainer } from './mainTemplateStyled';

interface MainTemplateProps {
	children?: ReactNode;
}

const MainTemplate: FC<MainTemplateProps> = ({ children }) => {
	return (
		<>
			<Header />
			<MainTemplateContainer>{children}</MainTemplateContainer>
			<Footer />
		</>
	);
};

export default MainTemplate;

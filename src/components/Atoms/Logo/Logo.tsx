import { FC } from 'react';
import { logoTitle } from '../../../constants';
import { LogoWrapper, LogoTitle } from './logoStyled';

const Logo: FC = () => {
	return (
		<LogoWrapper>
			<LogoTitle>{logoTitle}</LogoTitle>
		</LogoWrapper>
	);
};

export default Logo;

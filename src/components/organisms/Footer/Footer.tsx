import React from 'react';
import { FooterContainer, FooterInfo } from './footerStyled';
import { modeYears } from 'constants/Constants';

const Footer = () => {
	return (
		<FooterContainer>
			<FooterInfo>{` Made in ${modeYears} years `} </FooterInfo>
		</FooterContainer>
	);
};

export default Footer;

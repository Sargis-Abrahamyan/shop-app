import { FC } from 'react';
import { Button, Title } from 'components/Atoms';
import { HomeButtonText, homeTilte, homeTitleLastWord } from '../../constants';
import { Link } from 'react-router-dom';
import { HomeWrapper } from './homeStyled';

const Home: FC = () => {
	return (
		<HomeWrapper>
			<Title text={homeTilte} changeColorText={homeTitleLastWord} />
			<Link to='/products'>
				<Button buttonText={HomeButtonText} height='3rem' />
			</Link>
		</HomeWrapper>
	);
};

export default Home;

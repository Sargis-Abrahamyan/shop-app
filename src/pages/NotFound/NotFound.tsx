import { FC } from 'react';
import { Button, Title } from 'components/Atoms';
import { notFound, backButtonText } from '../../constants';
import { NotFoundWrapper } from './notFoundStyled';
import { Link } from 'react-router-dom';

const NotFound: FC = () => {
	return (
		<NotFoundWrapper>
			<Title text={notFound} />
			<Link to='/'>
				<Button buttonText={backButtonText} height='3rem' width={'200'} />
			</Link>
		</NotFoundWrapper>
	);
};

export default NotFound;

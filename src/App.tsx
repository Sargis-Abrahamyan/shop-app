import { FC, Suspense, lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainTemplate from 'components/Template/MainTemplate';
import { Get_Product } from 'state/reducer/productsSlice';
import { useAppDispatch, useAppSelector } from 'hooks';
import { Cart, Loading } from './components/organisms';

const Home = lazy(() => import('./pages/Home/Home'));
const Products = lazy(() => import('./pages/Products/Products'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

const App: FC = () => {
	const dispatch = useAppDispatch();
	const { loading } = useAppSelector((state) => state.products);

	useEffect(() => {
		dispatch(Get_Product());
	}, [dispatch]);

	if (loading) return <Loading />;

	return (
		<MainTemplate>
			<Suspense fallback={<Loading />}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/products' element={<Products />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Suspense>
			<Cart />
		</MainTemplate>
	);
};

export default App;

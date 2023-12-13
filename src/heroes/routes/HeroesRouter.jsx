import { Navigate, Route, Routes } from 'react-router-dom';
import { NavBar } from '../../ui';
import { DcPage, HeroPage, MarvelPage, SearchHeroesPage } from '../pages';

const HeroesRouter = () => {
	return (
		<>
			<NavBar />

			<div className="container">
				<Routes>
					<Route path="marvel" element={<MarvelPage />} />
					<Route path="dc" element={<DcPage />} />

					<Route path="search" element={<SearchHeroesPage />} />
					{/* EN ESTA RUTA LLEGA EL PARAMETRO :id PARA SABER A QUE ID DE LOS HEROES SE DIRIGE */}
					<Route path="hero/:id" element={<HeroPage />} />

					<Route path="/" element={<Navigate to="/marvel" />} />
				</Routes>
			</div>
		</>
	);
};

export default HeroesRouter;

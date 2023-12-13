// ESTE COMPONENTE ES GENERALMENTE ES EL COMPONENTE PRINCIPAL DE LA APLICACION

import { Route, Routes } from 'react-router-dom';

import { LoginPage } from '../auth';

import { HeroesRouter } from '../heroes';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

const AppRouter = () => {
	return (
		<>
			<Routes>
				{/* aqui voy a poner mis rutas publicas */}
				<Route
					path="/login"
					element={
						<PublicRouter>
							<LoginPage />
						</PublicRouter>
					}
				/>

				{/* Aqui pongo en una ruta mi componente de proteccion de rutas y envuevlo al heroesRouter que seria lo que quiero que vea mi usuario que ta esta logeado y si no esta logeado lo regresar a la pagina del login */}
				<Route
					path="/*"
					element={
						<PrivateRouter>
							<HeroesRouter />
						</PrivateRouter>
					}
				/>
			</Routes>
		</>
	);
};

export default AppRouter;

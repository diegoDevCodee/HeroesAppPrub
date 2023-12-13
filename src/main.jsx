import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import './styles.css';
import HeroesApp from './HeroesApp';

// SE COLOCA EL <BROWSERROUTER></BROWSERROUTER> PARA QUE FUNCIONE EL ROUTER Y ESTE TIENE QUE ENVOLVER EL COMPONENTE PRINCIPAL NE ESTE CASO <HEROESAPP></HEROESAPP>
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<HeroesApp />
		</BrowserRouter>
	</React.StrictMode>
);

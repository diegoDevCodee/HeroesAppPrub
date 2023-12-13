import PropTypes from 'prop-types';
import { getHeroesByPublisher } from '../helpers';
import { HeroCard } from './';
import { useMemo } from 'react';

const HeroList = ({ publisher }) => {
	// ===***>>> ESTA FUNCION SE EJECUTA CUANDO EL COMPONENTE SE RENDERIZA POR PRIMERA VEZ Y CUANDO EL ID CAMBIA, SOLO SE EJECUTA CUANDO EL ID CAMBIA, PARA ESO SIRVE EL USEMEMO() PARA OPTIMIZAR EL CODIGO <<***===
	const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
	// ===***===***===***===***===***===***===***===***===***===***===***===***===***===***===***===***===***===***

	return (
		<div className="row rows-cols-1 row-cols-md-3 g-3">
			{heroes.map((hero) => (
				<HeroCard key={hero.id} {...hero} />
			))}
		</div>
	);
};

// ===***>> ESTOS SON LOS PROPS QUE SE LE PASAN AL COMPONENTE <<***===
HeroList.propTypes = {
	publisher: PropTypes.string.isRequired,
};
//===***===***===***===***===***===***===***===***===***===***===***===***===***===***===***===***===***===***===***
export default HeroList;

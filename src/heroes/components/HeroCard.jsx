import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// SE PUEDE HACER UN COMPONENTE FUNCIONAL PARA VALIDAR EL TEMA DE QUE SE VA A PINTAR EN EL CARD, SI ES EL ALTER EGO O LOS CHARACTERS Y SI ES EL MISMO ALTER EGO NO SE PINTA
const CharactersByHero = ({ alter_ego, characters }) => {
	if (alter_ego !== characters) {
		return <p className="card-text">{characters}</p>;
	}

	return null;
};

const HeroCard = ({
	id,
	superhero,
	// publisher,
	alter_ego,
	first_appearance,
	characters,
}) => {
	const heroImageUrl = `/assets/heroes/${id}.jpg`;

	return (
		<div className="col animate__animated animate__fadeIn">
			<div className="card">
				<div className="row no-gutters">
					<div className="col-4 ">
						<img src={heroImageUrl} className="card-img" alt={superhero} />
					</div>

					<div className="col-8">
						<div className="card-body">
							<h5 className="card-title">{superhero}</h5>
							<p className="card-text">{alter_ego}</p>

							{/* ===***>> ESTA ES LA FORMA MAS TRACIONAL <<***=== */}
							{/* {alter_ego !== characters && (
								<p className="card-text">{characters}</p>
							)} */}

							{/* ===***===***===***===***===***===***===***===***===***===*** */}

							{/* ===***>> ESTA ES LA FORMA CON UN COMPONENTE DENTRO DE ESTE COMPONENTE <<***=== */}
							<CharactersByHero alter_ego={alter_ego} characters={characters} />

							{/* ===***===***===***===***===***===***===***===***===***===*** */}
							<p className="card-text">
								<small className="text-muted">{first_appearance}</small>
							</p>

							<Link to={`/hero/${id}`}>Más...</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

HeroCard.propTypes = {
	id: PropTypes.string.isRequired,
	superhero: PropTypes.string.isRequired,
	publisher: PropTypes.string.isRequired,
	alter_ego: PropTypes.string.isRequired,
	first_appearance: PropTypes.string.isRequired,
	characters: PropTypes.string.isRequired,
};

CharactersByHero.propTypes = {
	alter_ego: PropTypes.string.isRequired,
	characters: PropTypes.string.isRequired,
};

export default HeroCard;

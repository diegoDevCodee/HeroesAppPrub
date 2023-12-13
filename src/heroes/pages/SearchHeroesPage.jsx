import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components';

import queryString from 'query-string';
import { getHeroByName } from '../helpers';

const SearchHeroesPage = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const { q = '' } = queryString.parse(location.search);
	const heroesFiltered = getHeroByName(q);

	// ===***>> ESTAS VARIABLES ME AYUDAN CON LA VALIDACION DE SI SE MUESTRA EL BUSCA UN HEROE O SI HAY UN ERROR EN LA BUSQUEDA <<***=== //
	const showSearch = q === '';
	const showError = q !== '' && heroesFiltered.length === 0;
	// ===***===***===***===***===***===***===***===***===***===***===***===***===***===***===***===***===*** //

	const { searchText, onInputChange } = useForm({
		searchText: q,
	});

	const handleSearchSubmit = (e) => {
		e.preventDefault();
		// if (searchText.trim().length <= 1) return;

		navigate(`?q=${searchText.toLowerCase().trim()}`);
	};

	return (
		<>
			<h1>Search</h1>
			<hr />
			<div className="row">
				<div className="col-5">
					<h4>Searching</h4>
					<hr />
					<form onSubmit={handleSearchSubmit}>
						<input
							type="text"
							placeholder="Find your hero"
							className="form-control"
							autoComplete="off"
							name="searchText"
							value={searchText}
							onChange={onInputChange}
						/>
						<button
							type="submit"
							className="btn mt-1 btn-block btn-outline-primary"
						>
							Search...
						</button>
					</form>
				</div>

				<div className="col-7">
					<h4>Results</h4>
					<hr />

					{/* ===***>> AQUI HAGO LAS VALIDADCIONES DE LA BUSQUEDA<<***=== */}

					{/* SI EL Q ES UN STRING VACIO ENTONCES REGRESO EL SERACH A HERO */}
					{/* {q === '' && <div className="alert alert-info">Search a hero</div>} */}
					{/* ===***===***===***===***===***===***===***===***===***===*** */}

					{/* ===***>> SI EL Q NO ES UN STRING VACIO Y EL HEROESFILTERED ES IGUAL A 0 ENTONCES REGRESO EL SERACH A HERO <<***=== */}
					{/* {q !== '' && heroesFiltered.length === 0 && (
						<div className="alert alert-danger">
							No hero with <b>{q}</b>
						</div>
					)} */}
					{/* ===***===***===***===***===***===***===***===***===***===*** */}

					{/* ===***>> ESTA ES OTRA FORMA DE MOSTRAR EL ERROR O MOSTRAR QUE SE BUSQUE SI ESTA VACIO <<***=== */}
					<div
						className="alert alert-primary animate__animated animate__fadeIn"
						style={{ display: showSearch ? '' : 'none' }}
					>
						Search a hero
					</div>

					<div
						className="alert alert-danger animate__animated animate__fadeIn"
						style={{ display: showError ? '' : 'none' }}
					>
						No hero with <b>{q}</b>
					</div>
					{/* ===***===***===***===***===***===***===***===***===***===***===***===***===***===***===*** */}

					{heroesFiltered.map((hero) => (
						<HeroCard key={hero.id} {...hero} />
					))}

					{/* <HeroCard /> */}
				</div>
			</div>
		</>
	);
};

export default SearchHeroesPage;

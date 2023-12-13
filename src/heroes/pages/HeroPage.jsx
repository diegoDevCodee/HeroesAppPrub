import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';
import { useMemo } from 'react';

const HeroPage = () => {
	// ===***>> AQUI VIENE EL ID DEL HEROE QUE SE QUIERE VER EN LA PAGINA DE DETALLE DEL HEROE EL NOMBRE ES EL MISMO QUE SE PUSO EN EL ROUTER :heroId <<***===
	const { id } = useParams();
	const navigate = useNavigate();
	// ===***===***===***===***===***===***===***===***===***===***===***===***===***===***===***===***===*** //

	// ===***>> ESTA FUNCION SE EJECUTA CUANDO EL COMPONENTE SE RENDERIZA POR PRIMERA VEZ Y CUANDO EL ID CAMBIA, SOLO SE EJECUTA CUANDO EL ID CAMBIA, PARA ESO SIRVE EL USEMEMO() PARA OPTIMIZAR EL CODIGO <<***===
	const hero = useMemo(() => getHeroById(id), [id]);
	// ===***===***===***===***===***===***===***===***===***===***===***===***===***===***===***===***===*** //

	const onNavigateBack = () => {
		navigate(-1);
	};

	if (!hero) {
		return <Navigate to="/marvel" />;
	}

	return (
		<div className="row mt-5">
			<div className="col-4">
				<img
					src={`/assets/heroes/${id}.jpg`}
					alt={hero.superhero}
					// ===***>> AQUI HAY UNA ANIMACION DE LA LIBRERIA ANIMATE.CSS QUE SE LE PUSO AL IMG CON UNA CLASE DE BOOTSTRAP QUE HACE QUE SEA UNA ENTRADA SUAVE DE LA IMAGEN DE IZQUIERDA A DERECHA CON UNA DURACION DE 1 SEGUNDO <<***===
					className="img-thumbnail animate__animated animate__fadeInLeft"
					// ===***===***
				/>
			</div>
			<div className="col-8">
				<h3>{hero.superhero}</h3>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<b>Ater ego:</b> {hero.alter_ego}
					</li>
					<li className="list-group-item">
						<b>Publisher:</b> {hero.publisher}
					</li>
					<li className="list-group-item">
						<b>Firts apparence:</b> {hero.first_appearance}
					</li>
				</ul>

				<h5 className="mt-3">Characters</h5>
				<p>{hero.characters}</p>

				<button className="btn btn-outline-primary" onClick={onNavigateBack}>
					Back
				</button>
			</div>
		</div>
	);
};

export default HeroPage;

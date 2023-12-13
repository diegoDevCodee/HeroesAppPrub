import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context';

const NavBar = () => {
	// Utiliza el hook useContext para obtener las funciones y valores del contexto de autenticación (AuthContext). En este caso, se extrae la propiedad user y la función logout.
	const { user, logout } = useContext(AuthContext);

	// Utiliza el hook useNavigate para obtener la función navigate, que se utiliza para realizar la navegación en la aplicación.
	const navigate = useNavigate();

	// Define una función onLogout que utiliza la función logout del contexto de autenticación para cerrar sesión. Luego, utiliza la función navigate para redirigir a la ruta '/login' y utiliza la opción { replace: true } para reemplazar la entrada actual en el historial de navegación.
	const onLogout = () => {
		logout();

		navigate('/login', { replace: true });
	};

	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
			<Link className="navbar-brand" to="/">
				Asociaciones
			</Link>

			<div className="navbar-collapse">
				<div className="navbar-nav">
					<NavLink
						className={({ isActive }) =>
							`nav-item nav-link ${isActive && 'active'}`
						}
						to="/marvel"
					>
						Marvel
					</NavLink>

					<NavLink
						className={({ isActive }) =>
							`nav-item nav-link ${isActive && 'active'}`
						}
						to="/dc"
					>
						DC
					</NavLink>

					<NavLink
						className={({ isActive }) =>
							`nav-item nav-link ${isActive && 'active'}`
						}
						to="/search"
					>
						Search
					</NavLink>
				</div>
			</div>

			<div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
				<ul className="navbar-nav ml-auto">
					<span className="nav-item nav-link text-primary">{user?.name}</span>

					<button onClick={onLogout} className="nav-item nav-link btn">
						Logout
					</button>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;

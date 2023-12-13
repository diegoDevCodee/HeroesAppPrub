import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const LoginPage = () => {
	// Utiliza el hook useContext para obtener las funciones y valores del contexto de autenticación (AuthContext). En este caso, se extrae la función login del contexto.
	const { login } = useContext(AuthContext);

	// Utiliza el hook useNavigate para obtener la función navigate, que se utiliza para realizar la navegación en la aplicación.
	const navigate = useNavigate();

	// Utiliza localStorage para obtener la última ruta visitada por el usuario. Si no hay ninguna ruta, se utiliza '/' como ruta por defecto.
	const lastPath = localStorage.getItem('lastPath') || '/';

	// Define una función onLogin que utiliza la función login del contexto de autenticación para iniciar sesión con el nombre 'Ronny Valdiviezo'. Luego, utiliza la función navigate para redirigir a la ruta '/' y utiliza la opción { replace: true } para reemplazar la entrada actual en el historial de navegación.
	const onLogin = () => {
		login('Jenny Perez');

		// aqui va el lastPath que es la ultima ruta que visito el usuario
		navigate(lastPath, { replace: true });
	};

	return (
		<div className="container mt-5">
			<h1>Login</h1>

			<hr />

			<button onClick={onLogin} className="btn btn-primary">
				Login
			</button>
		</div>
	);
};

export default LoginPage;

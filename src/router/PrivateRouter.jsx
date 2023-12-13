import { useContext } from 'react';
import { AuthContext } from '../auth';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PrivateRouter = ({ children }) => {
	// ? lUtiliza useContext para obtener el estado de autenticación (logged) del contexto de autenticación (AuthContext).
	const { logged } = useContext(AuthContext);

	// ? Utiliza useLocation para obtener la ruta actual del usuario. Luego, utiliza localStorage para almacenar la ruta actual en el localStorage con el nombre lastPath.
	const { pathname, search } = useLocation();
	const lastPath = `${pathname}${search}`;
	localStorage.setItem('lastPath', lastPath);

	//? Realiza un renderizado condicional: Si el usuario está autenticado (logged es true), se renderizan los children (los componentes hijos del PrivateRouter). Si el usuario no está autenticado (logged es false), se utiliza <Navigate to="/login" /> para redirigir al usuario a la ruta '/login'.
	return logged ? children : <Navigate to="/login" />;
};

PrivateRouter.propTypes = {
	children: PropTypes.node.isRequired,
};

// TODO n resumen, este componente PrivateRouter actúa como un enrutador privado que condicionalmente renderiza sus componentes hijos solo si el usuario está autenticado. Si el usuario no está autenticado, se redirige automáticamente a la página de inicio de sesión (/login).

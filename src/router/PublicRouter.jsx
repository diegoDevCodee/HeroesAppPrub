//? Aqui voy a crear un componente que va a ser el encargado de manejar las rutas publicas de mi aplicacion

import { useContext } from 'react';
import { AuthContext } from '../auth';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

// ? Este componente PublicRouter actúa como un enrutador público que condicionalmente renderiza sus componentes hijos solo si el usuario no está autenticado. Si el usuario está autenticado, se redirige automáticamente a la página de inicio de la aplicación (/marvel).
export const PublicRouter = ({ children }) => {
	// ? Utiliza useContext para obtener el estado de autenticación (logged) del contexto de autenticación (AuthContext).
	const { logged } = useContext(AuthContext);

	// ? Realiza un renderizado condicional: Si el usuario no está autenticado (logged es false), se renderizan los children (los componentes hijos del PublicRouter). Si el usuario está autenticado (logged es true), se utiliza <Navigate to="/marvel" /> para redirigir al usuario a la ruta '/marvel'.
	return !logged ? children : <Navigate to="/marvel" />;
};

PublicRouter.propTypes = {
	children: PropTypes.node.isRequired,
};

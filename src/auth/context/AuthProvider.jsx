import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import { types } from '../types/types';
import PropTypes from 'prop-types';

//? Define una función init que se utiliza como argumento inicial para useReducer. Lee el objeto del usuario desde el almacenamiento local y devuelve un estado inicial con la información de autenticación.
const init = () => {

	// ? Lee el objeto del usuario desde el almacenamiento local y devuelve un estado inicial con la información de autenticación.
	const user = JSON.parse(localStorage.getItem('user'));

	//? Retorna un objeto que representa el estado inicial del contexto de autenticación. logged: !!user evalúa la existencia del objeto user y convierte el resultado en un booleano. En otras palabras, logged será true si user existe, y false si user es null. user contiene el objeto del usuario si existe, o es null si no existe.
	return {
		logged: !!user,
		user,
	};
	// TODO En resumen, la función init se utiliza para establecer el estado inicial del contexto de autenticación. Comprueba si hay información de usuario en el Local Storage, y si la encuentra, inicializa el estado con la propiedad logged basada en la existencia de un usuario y la propiedad user con el objeto del usuario si existe.
};

//? El componente AuthProvider es un componente de orden superior que envuelve la aplicación y proporciona el contexto de autenticación a todos los componentes de la aplicación. Declara el componente AuthProvider que utiliza el hook useReducer. authReducer es la función reductora que gestionará los cambios de estado, y init es la función que proporciona el estado inicial.
export const AuthProvider = ({ children }) => {
	const [authState, dispatch] = useReducer(authReducer, {}, init);

	//? Define funciones login y logout que modifican el estado a través de dispatch. login guarda la información del usuario en el almacenamiento local y actualiza el estado, mientras que logout elimina la información del usuario y actualiza el estado para indicar que el usuario ha cerrado sesión.
	const login = (name = '') => {
		const action = {
			type: types.login,
			payload: {
				id: '123456',
				name: name,
			},
		};

		localStorage.setItem('user', JSON.stringify(action.payload));

		dispatch(action);
	};

	const logout = () => {
		localStorage.removeItem('user');

		const action = {
			type: types.logout,
		};

		dispatch(action);
	};

	//? Renderiza el componente AuthContext.Provider proporcionando el valor del contexto, que incluye el estado de autenticación (authState) y los métodos login y logout. Los componentes secundarios (children) se renderizan dentro del proveedor de contexto. El authState tiene un spread operator (...) para que sus propiedades se puedan acceder directamente desde el contexto de autenticación.
	return (
		<AuthContext.Provider
			value={{
				...authState,

				// ? Metodos
				login,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

//? Define las restricciones de tipo para las propiedades (children) del componente utilizando PropTypes.
AuthProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

//TODO En resumen, este componente AuthProvider establece y gestiona el estado de autenticación utilizando useReducer y proporciona un contexto de autenticación a través de AuthContext.Provider. Las funciones login y logout permiten realizar acciones relacionadas con la autenticación, y se utiliza localStorage para persistir la información del usuario entre sesiones.

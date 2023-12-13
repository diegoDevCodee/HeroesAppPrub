// Importa los tipos de acción desde el módulo ../types/types. Estos tipos suelen ser constantes que representan las distintas acciones que pueden ocurrir en la aplicación.
import { types } from '../types/types';

// Importa los tipos de acción desde el módulo ../types/types. Estos tipos suelen ser constantes que representan las distintas acciones que pueden ocurrir en la aplicación.
export const authReducer = (state = {}, action) => {
	//Utiliza un statement switch para manejar diferentes tipos de acciones.En el caso de types.login, devuelve un nuevo estado que incluye las propiedades logged establecida como true y user con los datos proporcionados en action.payload. En el caso de types.logout, devuelve un nuevo estado con logged establecida como false. En el caso por defecto, devuelve el estado actual sin cambios
	switch (action.type) {
		case types.login:
			return {
				...state,
				logged: true,
				user: action.payload,
			};
		case types.logout:
			return {
				logged: false,
			};

		default:
			return state;
	}
};
//? Los reducers no llaman ninguna acción, solo modifican el estado y lo retorna, no deben llamar a ninguna función asíncrona ni hacer llamadas a APIs externas, solo deben hacer operaciones síncronas y retornar el nuevo estado.

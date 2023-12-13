import { useState } from 'react';
// ===***===***===***===***===***===***===***===***===***===***===***===***===***===***===***===***===*** //
// ?>>> Declara y exporta una función llamada useForm. Esta función acepta un parámetro opcional initialForm, que representa el estado inicial del formulario y se establece por defecto como un objeto vacío.<<<//
export const useForm = (initialForm = {}) => {
	// ===***===***===***===***===***===***===***===***===***===***===***===***===***===***===***===***===*** //

	// ===***===***===***===***===***===***===***===***===***===***===***===***===***===***===***===***===*** //
	// ?>>> Utiliza el hook useState para declarar una variable de estado llamada formState y una función setFormState para actualizar este estado. initialForm se utiliza como el estado inicial del formulario.<<<//
	const [formState, setFormState] = useState(initialForm);
	// ===***===***===***===***===***===***===***===***===***===***===***===***===***===***===***===***===*** //

	// ===***===***===***===***===***===***===***===***===***===***===***===***===***===***===***===***===*** //
	// ?>>> Define una función onInputChange que se utilizará como manejador de eventos para cambios en los elementos del formulario. Extrae el nombre (name) y el valor (value) del elemento del formulario y utiliza setFormState para actualizar el estado del formulario. Se utiliza el spread operator (...) para mantener el estado existente y solo actualizar la propiedad correspondiente al elemento modificado.<<<//
	const onInputChange = ({ target }) => {
		const { name, value } = target;
		setFormState({
			...formState,
			[name]: value,
		});
	};
	// ===***===***===***===***===***===***===***===***===***===***===***===***===***===***===***===***===*** //

	// ===***===***===***===***===***===***===***===***===***===***===***===***===***===***===***===***===*** //
	//?>>> Define una función onResetForm que se utiliza para resetear el formulario a su estado inicial. Utiliza setFormState con initialForm para restablecer el estado del formulario.<<<//
	const onResetForm = () => {
		setFormState(initialForm);
	};
	// ===***===***===***===***===***===***===***===***===***===***===***===***===***===***===***===***===*** //

	// ===***===***===***===***===***===***===***===***===***===***===***===***===***===***===***===***===*** //
	// ? Todas las propiedades del estado del formulario (...formState).//
	// ? formState: una redundancia que proporciona acceso directo al estado del formulario.//
	// ? onInputChange: la función para manejar cambios en los elementos del formulario. //
	// ? onResetForm: la función para resetear el formulario.//
	return {
		...formState,
		formState,
		onInputChange,
		onResetForm,
	};
	// ===***===***===***===***===***===***===***===***===***===***===***===***===***===***===***===***===*** //
};

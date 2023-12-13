//? Este fragmento de código define un objeto llamado types que contiene constantes utilizadas para identificar las acciones en un patrón de diseño de Redux o en un sistema de gestión de estado similar. En este caso, parece estar relacionado con acciones de autenticación. Aquí hay una explicación:
export const types = {
	login: '[Auth] Login',
	logout: '[Auth] Logout',
};

//? login y logout: Estas son las dos acciones definidas en el objeto types. Cada acción tiene un nombre descriptivo que indica la acción que representa. En este caso, login representa la acción de inicio de sesión, y logout representa la acción de cierre de sesión. Formato de las Constantes: Ambas constantes están en un formato que incluye corchetes y una palabra clave [Auth]. Este formato es comúnmente utilizado para organizar y agrupar las acciones de Redux u otros sistemas de gestión de estado. En este caso, parece indicar que estas acciones pertenecen al contexto de autenticación (Auth). Cuando se utilizan estas constantes en el código, proporcionan una manera clara y consistente de identificar y manejar diferentes tipos de acciones relacionadas con la autenticación en la aplicación. Por ejemplo, podrían ser utilizadas en las funciones reductoras que gestionan el estado de autenticación.

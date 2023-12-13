import { createContext } from 'react';

//? Utiliza la función createContext para crear un contexto llamado AuthContext. Este contexto se exporta para que pueda ser utilizado en otros componentes de la aplicación.
export const AuthContext = createContext();

// TODO >>> El contexto AuthContext puede ser utilizado para pasar información de autenticación a través del árbol de componentes sin necesidad de pasar explícitamente las props a través de cada nivel. Los componentes que necesiten acceder a la información de autenticación pueden suscribirse a este contexto y consumir los valores proporcionados por el proveedor de contexto asociado.

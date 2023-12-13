import { heroes } from "../data/heroes";

const getHeroById = (id) => {
  // AQUI SE BUSCA EL HEROE POR ID
    return heroes.find((hero) => hero.id === id);
}

export default getHeroById;
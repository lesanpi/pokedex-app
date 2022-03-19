import { POKEMON_TYPE_COLORS } from './constants'

export const getColorByPokemonType = (type) => POKEMON_TYPE_COLORS[type.toLowerCase()]

export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);


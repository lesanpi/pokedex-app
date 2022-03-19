import { API_HOST } from '../utils/constants';

export const getPokemonApi = async (endpointUrl) => {
    try {
        const url = endpointUrl || `${API_HOST}/pokemon?limit=40&offset=0`;
        const response = await fetch(url);
        const result = await response.json();
        return result;

    } catch (error) {
        throw error;
    }
}

export const getPokemonDetailsByUrlApi = async (url) => {
    try {
        const response = await fetch(url);
        const result = await response.json();
        return result
    } catch (error) {
        throw error;
    }
}

export const getPokemonDetailsByIdApi = async (id) => {
    try {
        const url = `${API_HOST}/pokemon/${id}`
        const response = await fetch(url);
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}
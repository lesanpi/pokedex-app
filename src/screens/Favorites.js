import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getPokemonsFavoriteApi } from '../api/favorite';
import { getPokemonDetailsByIdApi, getPokemonDetailsByUrlApi } from '../api/pokemon';
import PokemonList from '../components/PokemonList';

export default function Favorite() {

    const [pokemons, setPokemons] = useState([])

    useFocusEffect(() => {
        (async () => {
            const response = await getPokemonsFavoriteApi()
            const pokemonsArray = []

            for (const pokemonId of response) {
                const pokemonDetails = await getPokemonDetailsByIdApi(pokemonId)
                pokemonsArray.push({
                    id: pokemonDetails.id,
                    name: pokemonDetails.name,
                    type: pokemonDetails.types[0].type.name,
                    order: pokemonDetails.order,
                    image: pokemonDetails.sprites.other['official-artwork'].front_default
                })
            }
            setPokemons(pokemonsArray)

        })();


    })

    return (
        <SafeAreaView>
            {/* <Text>Favorites</Text> */}
            <PokemonList pokemons={pokemons} />
        </SafeAreaView>
    );
}

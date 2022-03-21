import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getPokemonApi, getPokemonDetailsByUrlApi } from '../api/pokemon';
import PokemonList from '../components/PokemonList';
import { StatusBar } from "expo-status-bar";

export default function Pokedex() {

    const [pokemons, setPokemons] = useState([])
    const [nextUrl, setNextUrl] = useState(null)

    useEffect(() => {
        (async () => {
            await loadPokemons();
        })();

    }, [])

    const loadPokemons = async () => {
        try {
            const response = await getPokemonApi(nextUrl);
            setNextUrl(response.next)
            const { results } = response
            const pokemonsArray = []

            for (const pokemon of results) {
                const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url)
                pokemonsArray.push({
                    id: pokemonDetails.id,
                    name: pokemonDetails.name,
                    type: pokemonDetails.types[0].type.name,
                    order: pokemonDetails.order,
                    image: pokemonDetails.sprites.other['official-artwork'].front_default
                })
            }

            setPokemons([...pokemons, ...pokemonsArray])
            // console.log(pokemons)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <SafeAreaView>
            <StatusBar style="dark" />
            <PokemonList pokemons={pokemons} loadPokemons={loadPokemons} isNext={nextUrl} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

})

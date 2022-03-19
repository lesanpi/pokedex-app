import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getPokemonDetailsByIdApi } from '../api/pokemon';

export default function Pokemon(props) {
    const { route: { params }, navigation } = props
    const [pokemon, setPokemon] = useState(null)

    const getPokemon = async () => {
        try {
            const response = await getPokemonDetailsByIdApi(params.id)
            console.log(response)
            setPokemon(response)
        } catch (error) {
            navigation.goBack();
        }
    }

    useEffect(() => {
        (async () => {
            await getPokemon()
        })()
    }, [params])

    if (!pokemon) return null

    return (
        <Text>{pokemon.name}</Text>
    );
}

import React, { useState, useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { getPokemonDetailsByIdApi } from '../api/pokemon';
import PokemonHeader from '../components/PokemonHeader';
import PokemonType from '../components/PokemonType';
import PokemonStats from '../components/PokemonStats';
import Favorite from '../components/Favorite';

export default function Pokemon(props) {
    const { route: { params }, navigation } = props
    const [pokemon, setPokemon] = useState(null)

    const getPokemon = async () => {
        try {
            const response = await getPokemonDetailsByIdApi(params.id)
            setPokemon(response)
        } catch (error) {
            r
            navigation.goBack();
        }
    }

    useEffect(() => {
        (async () => {
            await getPokemon()
        })()
    }, [params])

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (<Favorite pokemonId={pokemon?.id} />),
            headerLeft: () =>
            (<Icon
                name="arrow-left"
                color="#fff"
                size={20}
                style={{ marginLeft: 20 }}
                onPress={navigation.goBack}
            />)

        })
    }, [navigation, params, pokemon])



    if (!pokemon) return null

    return (
        <ScrollView>
            <PokemonHeader
                name={pokemon.name}
                order={pokemon.order}
                image={pokemon.sprites.other["official-artwork"].front_default}
                type={pokemon.types[0].type.name}
            />
            <PokemonType types={pokemon.types} />
            <PokemonStats stats={pokemon.stats} />
        </ScrollView>
    );
}

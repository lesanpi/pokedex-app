import React, { useState, useEffect } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { removePokemonFavoriteApi, addPokemonFavoriteApi, isPokemonFavoriteApi } from '../api/favorite';

export default function Favorite({ pokemonId }) {

    const [isFavorite, setIsFavorite] = useState(undefined)
    const [reloadCheck, setReloadCheck] = useState(false)
    const Icon = isFavorite ? FontAwesome : FontAwesome5

    useEffect(() => {
        (async () => {
            try {
                const response = await isPokemonFavoriteApi(pokemonId);
                setIsFavorite(response);

            } catch (error) {
                console.log(error)
                setIsFavorite(false)
            }
        })()

    }, [pokemonId, reloadCheck])

    const onReloadCheckFavorite = () => {
        setReloadCheck(prev => !prev);
    }

    const addFavorite = async () => {
        try {
            await addPokemonFavoriteApi(pokemonId)
            onReloadCheckFavorite()
        } catch (error) {
            console.log(error)
        }
    }

    const removeFavorite = async () => {
        try {
            await removePokemonFavoriteApi(pokemonId)
            onReloadCheckFavorite()
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <Icon
            name='heart'
            color='#fff'
            size={20}
            onPress={isFavorite ? removeFavorite : addFavorite}
            style={{ marginRight: 20 }}
        />
    )

}

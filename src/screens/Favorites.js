import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getPokemonsFavoriteApi } from '../api/favorite';

export default function Favorite() {

    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        (async () => {
            const response = await getPokemonsFavoriteApi()
            console.log(response)
        })();

    }, [])
    return (
        <SafeAreaView>
            <Text>Favorite</Text>
        </SafeAreaView>
    );
}

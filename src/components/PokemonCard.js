import React from 'react';
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { getColorByPokemonType, capitalize } from '../utils/pokemonUtils';
import { useNavigation } from "@react-navigation/native"

export default function PokemonCard({ pokemon }) {

    const navigation = useNavigation();
    const bgStyles = { backgroundColor: getColorByPokemonType(pokemon.type), ...styles.bgStyles }
    const goToPokemon = () => {
        navigation.navigate("Pokemon", { id: pokemon.id })
    }

    return (
        <TouchableWithoutFeedback onPress={goToPokemon}>
            <View style={styles.card}>
                <View style={styles.spacing}>
                    <View style={bgStyles}>
                        <Text style={styles.pokemonOrder} >#{`${pokemon.order}`.padStart(3, 0)}</Text>
                        <Text style={styles.pokemonName} >{capitalize(pokemon.name)}</Text>
                        <Image source={{ uri: pokemon.image }} style={styles.pokemonImage} />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 130
    },
    spacing: {
        flex: 1,
        padding: 5
    },
    bgStyles: {
        flex: 1,
        borderRadius: 10,
        padding: 10
    },
    pokemonImage: {
        height: 90,
        width: 90,
        position: 'absolute',
        bottom: 2,
        right: 2
    },
    pokemonName: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 15,
        paddingTop: 10
    },
    pokemonOrder: {
        position: 'absolute',
        right: 10,
        top: 10,
        color: "#fff",
        fontSize: 11
    }
})

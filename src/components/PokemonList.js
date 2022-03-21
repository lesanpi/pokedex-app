import React, { useState } from "react";
import { StyleSheet, Text, FlatList, ActivityIndicator, Platform } from "react-native";
import PokemonCard from "./PokemonCard";

export default function PokemonList(props) {
    const { pokemons, loadPokemons, isNext } = props;
    const [loading, setLoading] = useState(false)
    const loadMore = () => {
        if (!loading) {
            setLoading(true)
            loadPokemons();
            setLoading(false)
        }
    }

    return (
        <FlatList
            data={pokemons}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(pokemon) => String(pokemon.id)}
            renderItem={({ item }) => <PokemonCard pokemon={item} />}
            contentContainerStyle={styles.flatListContentContainer}
            onEndReached={isNext && loadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={
                isNext && (<ActivityIndicator
                    size="large"
                    style={styles.spinner}
                    color="#AEAEAE"
                />)
            }
        />
    );
}

const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5,
        paddingTop: Platform.OS === 'android' ? 10 : 0,
    },
    spinner: {
        marginTop: 20,
        marginBottom: Platform.OS === 'android' ? 30 : 60
    }
});
import React from 'react';
import { View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Account from '../screens/Account';
import Favorite from '../screens/Favorite';
import PokedexNavigation from './PokedexNavigation';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator()

export default function Navigation() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: { height: 60 },
            }}
        >
            <Tab.Screen
                name="Favorite"
                component={Favorite}
                options={{
                    headerTitleAlign: "center",
                    tabBarLabel: "Favoritos",
                    tabBarIcon: ({ color, size }) => <Icon name="heart" color={color} size={size} />
                }}
            />
            <Tab.Screen
                name="Pokedex"
                component={PokedexNavigation}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: () => renderPokeball(),
                }}
            />
            <Tab.Screen
                name="Account"
                component={Account}
                options={{
                    tabBarLabel: "Mi Cuenta",
                    tabBarIcon: ({ color, size }) => <Icon name="user" color={color} size={size} />
                }}
            />
        </Tab.Navigator>
    );
}

function renderPokeball() {
    return (
        <Image
            source={require("../assets/pokeball.png")}
            style={{ width: 75, height: 75, top: -15 }}
        />
    );
}

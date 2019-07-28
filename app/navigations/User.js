import React from 'react';
import { Icon } from 'react-native-elements'

import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator
} from "react-navigation";

//Screens
import HomeScreen from "../screens/Home";
import TopFiveScreen from "../screens/TopFive";
import SearchScreen from "../screens/Search";
import MyAccountScreen from "../screens/MyAccount";

//Stacks
const homeScreenStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            title: "Home"
        })
    }
});
const TopFiveScreenStack = createStackNavigator({
    TopFive: {
        screen: TopFiveScreen,
        navigationOptions: ({ navigation }) => ({
            title: "Top 5 Restaurantes"
        })
    }
});
const SearchScreenStack = createStackNavigator({
    Search: {
        screen: SearchScreen,
        navigationOptions: ({ navigation }) => ({
            title: "Buscar"
        })
    }
});
const MyAccountScreenStack = createStackNavigator({
    MyAccount: {
        screen: MyAccountScreen,
        navigationOptions: ({ navigation }) => ({
            title: "Mi cuenta"
        })
    }
});

//RootStack

const RootStack = createBottomTabNavigator({
    Home: {
        screen: homeScreenStack,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: "Home",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name='compass-outline'
                    type="material-community"
                    size={22}
                    color={tintColor}
                />
            )

        })
    },
    TopFive: {
        screen: TopFiveScreenStack,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: "Top 5",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name='star-outline'
                    type="material-community"
                    size={22}
                    color={tintColor}
                />
            )
        })

    },
    Search: {
        screen: SearchScreenStack,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: "Buscar",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name='magnify'
                    type="material-community"
                    size={22}
                    color={tintColor}
                />
            )
        })
    },
    MyAccount: {
        screen: MyAccountScreenStack,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: "Mi cuenta",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name='home-outline'
                    type="material-community"
                    size={22}
                    color={tintColor}
                />
            )
        })
    }
},
    {
        initialRouteName: "TopFive",
        order: ['Home', 'TopFive', 'Search', 'MyAccount'],
        tabBarOptions: {
            inactiveTintColor: "#646464",
            activeTintColor: "#00a680"
        }
    }
);

//AppContainer

export default createAppContainer(RootStack);
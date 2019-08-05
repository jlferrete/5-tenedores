import React, { Component } from 'react';
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";

import * as firebase from 'firebase';

import MyAccountGuest from '../../components/MyAccount/MyAccountGuest';

export default class MyAccount extends Component {


    constructor() {
        super();

        this.state = {
            login: false
        };
    }

    async componentDidMount() {
        await firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    login: true
                });
            } else {
                this.setState({
                    login: false
                });
            }
        });
    }

    goToScreen = nameScreen => {
        this.props.navigation.navigate(nameScreen)
    };

    logout = () => {
        firebase.auth().signOut();
    };

    render() {

        const { login } = this.state;

        if (login) {
            return (
                <View style={styles.viewBody}>
                    <Text>Estás logueado correctamente</Text>
                    <Button title="Cerrar sesión" onPress={() => this.logout()} />
                </View>
            );

        } else {
            return (
                <MyAccountGuest />
            );
        }
    }
}

const styles = StyleSheet.create({
    viewBody: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",

    }
});
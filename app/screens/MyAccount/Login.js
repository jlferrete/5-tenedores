import React, { Component } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';

import { Image } from "react-native-elements";

export default class Login extends Component {
    render() {
        return (
            <View style={styles.viewBody}>
                <Image
                    source={require('../../../assets/img/5-tenedores-letras-icono-logo.png')}
                    style={styles.logo}
                    PlaceholderContent={<ActivityIndicator />}
                    resizeMode="contain"
                />
                <Text>Login Screen...</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewBody: {
        flex: 1,
        marginLeft: 40,
        marginRight: 40,
        marginTop: 40,
        alignItems: "center"
    },
    logo: {
        width: 300,
        height: 150
    }
});
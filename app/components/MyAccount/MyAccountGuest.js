import React, { Component } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Button, Image } from "react-native-elements";
import { bold } from 'ansi-colors';

export default class MyAccountGuest extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { goToScreen } = this.props;

        return (
            <View style={styles.viewBody}>
                <Image
                    source={require("../../../assets/img/image-my-account-guest-01.jpg")}
                    style={styles.image}
                    PlaceholderContent={<ActivityIndicator />}
                    resizeMode="contain"
                />
                <Text style={styles.title}>Consulta tu perfil de 5 Tenedores</Text>
                <Text style={styles.description}>
                    ¿Cómo describirías tu mejor restaurante? Busca y visualiza los
                    mejores restaurantes de una forma sencilla. Vota cuál te ha gustado
                    más y comenta como ha sido tu experiencia.
                </Text>
                <Button buttonStyle={styles.btnViewProfile} title="Ver tu perfil" onPress={() => goToScreen("Login")} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewBody: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 30,
        paddingRight: 30
    },
    image: {
        height: 250,
        marginBottom: 30,
    },
    title: {
        fontWeight: "bold",
        fontSize: 19,
        marginBottom: 10
    },
    description: {
        textAlign: "center",
        marginBottom: 20
    },
    btnViewProfile: {
        width: 200,
        backgroundColor: "#00a680",
        justifyContent: "center"

    }
});
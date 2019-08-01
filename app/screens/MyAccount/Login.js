import React, { Component } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { Image, Button } from "react-native-elements";

import t from 'tcomb-form-native';

const Form = t.form.Form;
import { LoginStruct, LoginOptions } from '../../forms/Login';

export default class Login extends Component {

    constructor() {
        super();

        this.state = {
            loginStruct: LoginStruct,
            loginOptions: LoginOptions
        };
    }

    render() {

        const { loginStruct, loginOptions } = this.state;

        return (
            <View style={styles.viewBody}>
                <Image
                    source={require('../../../assets/img/5-tenedores-letras-icono-logo.png')}
                    style={styles.logo}
                    PlaceholderContent={<ActivityIndicator />}
                    resizeMode="contain"
                />

                <View style={styles.viewForm}>
                    <Form ref="loginForm" type={loginStruct} options={loginOptions} />
                    <Button buttonStyle={styles.buttonLoginContainer} title="Login" />
                </View>
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
    },
    logo: {
        width: 300,
        height: 150
    },
    viewForm: {
        marginTop: 50
    },
    buttonLoginContainer: {
        backgroundColor: "#00a680",
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10
    }
});
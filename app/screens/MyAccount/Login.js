import React, { Component } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { Image, Button, SocialIcon, Divider } from "react-native-elements";
import Toast, { DURATION } from "react-native-easy-toast";

import t from 'tcomb-form-native';

const Form = t.form.Form;
import { LoginStruct, LoginOptions } from '../../forms/Login';

import * as firebase from 'firebase';
import * as Facebook from "expo-facebook"; const { type, token } = await Facebook.logInWithReadPermissionsAsync(FacebookApi.application_id, { permissions: FacebookApi.permissions });

export default class Login extends Component {

    constructor() {
        super();

        this.state = {
            loginStruct: LoginStruct,
            loginOptions: LoginOptions,
            loginData: {
                email: "",
                password: ""
            },
            loginErrorMessage: ""
        };
    }

    login = () => {
        const validate = this.refs.loginForm.getValue();

        if (!validate) {
            this.setState({
                loginErrorMessage: "Los datos del formulario son erróneos"
            });
        } else {
            this.setState({ loginErrorMessage: "" });

            firebase
                .auth()
                .signInWithEmailAndPassword(validate.email, validate.password)
                .then(() => {
                    this.refs.toastLogin.show("Login correcto", 200, () => {
                        this.props.navigation.goBack();
                    })
                })
                .catch(error => {
                    this.refs.toastLogin.show("Login incorrecto. Revise sus datos", 2500);
                });
        }
    };

    loginFacebook = async () => {
        const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
            FacebookApi.application_id,
            { permissions: FacebookApi.permissions }
        );

        if (type == "success") {
            const credentials = firebase.auth.FacebookAuthProvider.credential(token);
            firebase
                .auth()
                .signInWithCredential(credentials)
                .then(() => {
                    console.log('Login correcto');
                    this.props.navigation.goBack();
                })
                .catch(err => {
                    console.log('Erro accediendo con Facebook, intentelo mas tarde');
                });
        } else if (type == "cancel") {
            console.log('Inicio de sesion cancelad');
        } else {
            console.log('Error desconocido, intentelo mas tarde');
        }
    };

    onChangeFormLogin = (formValue) => {
        this.setState({
            loginData: formValue
        });
    };

    render() {

        const { loginStruct, loginOptions, loginErrorMessage } = this.state;

        return (
            <View style={styles.viewBody}>
                <Image
                    source={require('../../../assets/img/5-tenedores-letras-icono-logo.png')}
                    containerStyle={styles.containerLogo}
                    style={styles.logo}
                    PlaceholderContent={<ActivityIndicator />}
                    resizeMode="contain"
                />

                <View style={styles.viewForm}>
                    <Form ref="loginForm"
                        type={loginStruct}
                        options={loginOptions}
                        value={this.state.loginData}
                        onChange={(formValue) => this.onChangeFormLogin(formValue)}
                    />
                    <Button buttonStyle={styles.buttonLoginContainer}
                        title="Login"
                        onPress={() => this.login()}
                    />

                    <Text style={styles.loginErrorMessage}>{loginErrorMessage}</Text>

                    <Divider style={styles.divider} />

                    <SocialIcon
                        title='Iniciar sesión con Facebook' button type='facebook' onPress={() => this.loginFacebook()} />
                </View>
                <Toast
                    ref="toastLogin"
                    position="bottom"
                    positionValue={250}
                    fadeInDuration={1000}
                    fadeOutDuration={1000}
                    opacity={0.8}
                    textStyle={{ color: "#fff" }}
                />
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
    containerLogo: {
        alignItems: "center"
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
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    },
    loginErrorMessage: {
        color: "#f00",
        textAlign: "center",
        marginTop: 20
    },
    divider: {
        backgroundColor: "#00a680",
        marginBottom: 10
    }
});
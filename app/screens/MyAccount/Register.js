import React, { Component } from 'react';
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-elements";

import t from 'tcomb-form-native';
const Form = t.form.Form;
import { RegisterStruct, RegisterOptions } from '../../forms/Register';



export default class Register extends Component {
    constructor() {
        super();

        this.state = {
            registerStruct: RegisterStruct,
            registerOptions: RegisterOptions,
            formData: {
                name: "",
                email: "",
                password: "",
                passwordConfirmation: ""
            },
            formErrorMessage: ""
        };
    }

    register = () => {

        const { password, passwordConfirmation } = this.state.formData;

        if (password == passwordConfirmation) {
            const validate = this.refs.registerForm.getValue();

            if (validate) {
                this.setState({
                    formErrorMessage: ""
                })
            } else {
                this.setState({
                    formErrorMessage: "Formulario Invalido"
                })
            }

        } else {
            this.setState({
                formErrorMessage: "Las contraseñas no son iguales"
            })
        }
    };

    onChangeFormRegister = (formValue) => {
        this.setState({
            formData: formValue
        });
    };


    render() {

        const { registerStruct, registerOptions, formErrorMessage } = this.state;

        return (
            <View style={styles.viewBody}>
                <Form
                    ref="registerForm"
                    type={registerStruct}
                    options={registerOptions}
                    value={this.state.formData}
                    onChange={(formValue) => this.onChangeFormRegister(formValue)}
                />
                <Button buttonStyle={styles.buttonRegisterContainer} title="Unirse" onPress={() => this.register()} />
                <Text style={styles.formErrorMessage}>{formErrorMessage}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewBody: {
        flex: 1,
        justifyContent: "center",
        marginLeft: 40,
        marginRight: 40

    },
    buttonRegisterContainer: {
        backgroundColor: "#00a680",
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
    },
    formErrorMessage: {
        color: "#f00",
        textAlign: "center",
        marginTop: 30

    }
});
import React from 'react';

import t from 'tcomb-form-native';
import formValidation from "../utils/Validation";

export const RegisterStruct = t.struct({
    name: t.String,
    email: formValidation.email,
    password: formValidation.password,
    passwordConfirmation: formValidation.password
});

export const RegisterOptions = {
    fields: {
        name: {
            label: "Nombre (*)",
            placeholder: "Escribe tu nombre y apellidos",
            error: "Nombre invalido"
        },
        email: {
            label: "Email (*)",
            placeholder: "Escribe tu email",
            error: "Email invalido"
        },
        password: {
            label: "Contraseña (*)",
            placeholder: "Escribe tu contraseña",
            error: "Contraseña invalida",
            password: true,
            secureTextEntry: true
        },
        passwordConfirmation: {
            label: "Repetir Contraseña",
            placeholder: "Repite tu contraseña",
            error: "Contraseña invalida",
            password: true,
            secureTextEntry: true
        }
    }
}
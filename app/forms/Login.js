import React from "react";
import t from 'tcomb-form-native';

import formValidation from '../utils/Validation';

export const LoginStruct = t.struct({
    email: formValidation.email,
    password: formValidation.password
});

export const LoginOptions = {
    fields: {
        email: {
            placeholder: "Escribe tu email"
        },
        password: {
            placeholder: "Escribe tu contraseña"
        }
    }
};
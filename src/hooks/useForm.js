import React from 'react'

const msg = (type) => `Por favor, digite um ${type} válido!`;
const types = {
    name: {
        regex: /[a-z]/gi,
        message: msg("nome"),
    },
    email: {
        regex: /[a-z]/gi,
        message: msg("e-mail"),
    },
    tel: {
        regex: /\d/g,
        message: msg("número de telefone"),
    }
}

export default function useForm(type) {
    const [value, setValue] = React.useState("");
    const [error, setError] = React.useState("");
    const change = ({ target: { value } }) => {
        setValue(value);
        if (error) setError(null);
    };
    const validate = ()  => {
        if (!type) return true;

        if (!value.length) {
            setError("Este campo é obrigatório!");
            return false;
        } else if (types[type] && !types[type].regex.test(value)) {
            setError(types[type].message);
            return false;
        } else {
            setError(null);
            return true;
        }
    }

    return {
        value,
        setValue,
        change,
        error,
        validate: () => validate()
    };
}

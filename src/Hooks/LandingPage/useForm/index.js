import { useState } from 'react';

export function validateInfo(values) {
    let errors = {};

    if (!values.Nick.trim()) {
      errors.Nick = 'Login obrigatório';
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }

    if (!values.Email) {
      errors.Email = 'Email obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(values.Email)) {
      errors.Email = 'Email inválido';
    }

    return errors;
  }

const useForm = (validate) => {
    const [values, setValues] = useState({
        nome: '',
        email: '',
        genero: '',
        idade: '',
        cep: '',
        estado: '',
        cidade: '',
        estadoCivil: '',
        filhos: '',
        parentes: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));
    };


    return { handleChange, handleSubmit, values, errors };
};

export default useForm;

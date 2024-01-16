import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function CrearEncuesta() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        navigate('/encuestas');
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                <input type="text" {...register("nombre")} />
            </label>
            <input type="submit" />
        </form>
    );
};
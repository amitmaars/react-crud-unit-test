import React from "react";
import { useForm } from "react-hook-form";

const FormComponent = (props) => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data);
        props.handleSubmitInParent(data);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>{props.type} User</div>
            <input type="text" name="userId" placeholder="userId" ref={register({ required: true })} />
            <input type="text" name="name" placeholder="name" ref={register({ required: true })} />
            <input type="text" name="email" placeholder="email" ref={register({ required: true })} />
            
            <input type="submit" />
        </form>
    )
}

export default FormComponent;



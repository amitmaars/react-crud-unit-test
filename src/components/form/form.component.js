import React from "react";
import { useForm } from "react-hook-form";

const FormComponent = (props) => {
    const {preloadData, type} = props;
    const { register, handleSubmit, reset } = useForm({
        defaultValues:type=='Update'?preloadData:{}
    });
    const onSubmit = data => {
        // console.log(data);
        props.handleSubmitInParent(data);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>{props.type} User</div>
            <input type="text" name="id" placeholder="id" ref={register({ required: true })} />
            <input type="text" name="first_name" placeholder="first_name" ref={register({ required: true })} />
            <input type="text" name="email" placeholder="email" ref={register({ required: true })} />
            
            <input type="submit" />
        </form>
    )
}

export default FormComponent;



import React from "react";
import { useForm } from "react-hook-form";

function Registration(){
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("firstName")); 

    return (
        
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>Registration</div>
            <input name="firstName" ref={register({ required: true, maxLength: 20 })} />
            <select name="gender" ref={register}>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
            </select>

            {errors.gender && <span>This field is required</span>}
            <input type="submit" />
        </form>

    )
}

export default Registration;
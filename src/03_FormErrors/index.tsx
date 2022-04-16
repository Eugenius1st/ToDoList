import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function ToDoList() {
    const { register, handleSubmit, formState } = useForm();
    const onValid = (data: any) => {
        console.log(data);
    };
    console.log(formState.errors);
    return (
        <div>
            <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit(onValid)}>
                <input {...register("firstName", { required: true, minLength: 10 })} placeholder="First Name" />
                <input
                    {...register("lastName", {
                        required: true,
                        minLength: {
                            value: 5,
                            message: "Your password is too short",
                        },
                    })}
                    placeholder="Last Name"
                />
                <input {...register("email", { required: true })} placeholder="Email" />
                <input {...register("passWord", { required: true })} placeholder="Password" />
                <input {...register("passwordConfirm", { required: "Password is required" })} placeholder="Password Confirm" />
                <button>Add</button>
            </form>
        </div>
    );
}

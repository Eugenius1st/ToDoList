import React from "react";
import { useForm } from "react-hook-form";

export default function FormErrors() {
    interface IForm {
        email: string;
        firstName: string;
        lastName: string;
        username: string;
        password: string;
        passwordConfirm: string;
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IForm>({
        defaultValues: {
            email: "@naver.com",
        },
    });

    const onValid = (data: any) => {
        console.log(data);
    };
    console.log(errors);

    return (
        <div>
            <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit(onValid)}>
                <input
                    {...register("email", {
                        required: "email is required",
                        pattern: {
                            value: /^[A-Za-z0-9._%+-]+@naver.com$/,
                            // ^ :문장의 시작
                            // [] : 문자셋 안의 아무문자
                            // + : 하나 또는 많이
                            message: "Only naver.com emails allowed",
                        },
                    })}
                    placeholder="Email"
                />
                <input {...register("firstName", { required: true, minLength: 10 })} placeholder="First Name" />
                <span>{errors.firstName?.message}</span>
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
                <span>{errors?.lastName?.message}</span>

                <span>{errors?.email?.message}</span>
                <input {...register("password", { required: true })} placeholder="Password" />
                <span>{errors?.password?.message}</span>
                <input {...register("passwordConfirm", { required: "Password is required" })} placeholder="Password Confirm" />
                <span>{errors?.passwordConfirm?.message}</span>
                <button>Add</button>
            </form>
        </div>
    );
}

import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Forms() {
    const { register, watch } = useForm();
    console.log(watch());
    return (
        <div>
            <form>
                <input {...register("firstName")} placeholder="First Name" />
                <input {...register("lastName")} placeholder="Last Name" />
                <input {...register("email")} placeholder="Email" />
                <input {...register("passWord")} placeholder="Password" />
                <input {...register("passwordConfirm")} placeholder="Password Confirm" />
                <button>Add</button>
            </form>
        </div>
    );
}

/* function ToDoList() {
  const [toDo, setToDo] = useState("");
  const [toDoError, setToDoError] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDoError("");
    setToDo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (toDo.length < 10) {
      return setToDoError("To do should be longer");
    }
    console.log("submit");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} placeholder="Write a to do" />
        <button>Add</button>
        {toDoError !== "" ? toDoError : null}
      </form>
    </div>
  );
} */

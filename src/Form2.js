import React from "react";
import { useForm } from "react-hook-form";

export default function Form2() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => alert(values.email + " " + values.password);

  return (
    <div className="app">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Register</h1>
        <section>
          <label>Email</label>
          <input
            type="email"  
            {...register("email", {
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
          />
          {errors.email && (
            <span style={{ color: "red" }}>{errors.email.message}</span>
          )}
        </section>

        <section>
          <label>Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Required",
              pattern: {
                value:
                  /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
                message:
                  "Password requirements :8-20 characters,1 number,1 letter,1 symbol.",
              },
            })}
          />

          {errors.password && (
            <span style={{ color: "red" }}>{errors.password.message}</span>
          )}
        </section>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
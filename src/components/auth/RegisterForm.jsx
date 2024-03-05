import { useContext } from "react";
import Field from "../common/Field";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
const RegisterForm = () => {
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (formData) => {
    const { email, password, name, photo } = formData;
    createUser(email, password, name, photo)
      .then((result) => {
        navigate(location?.state ? location.state : "/");
      })

      .catch((error) => console.log(error));
  };

  return (
    <form className='flex gap-5 flex-col' onSubmit={handleSubmit(submitForm)}>
      <Field label='name' error={errors.name}>
        <input
          {...register("name", { required: "Name is Required" })}
          className={`bg-[#F3F3F3] flex gap-3 w-full p-3 flex-col outline-none border ${
            errors.name ? "border-red-500" : "border-gray-200"
          }`}
          type='text'
          name='name'
          id='name'
          placeholder='Enter your Name'
        />
      </Field>
      <Field label='photo URL' error={errors.photo}>
        <input
          {...register("photo", { required: "Photo URL is Required" })}
          className={`bg-[#F3F3F3] flex gap-3 w-full p-3 flex-col outline-none border ${
            errors.photo ? "border-red-500" : "border-gray-200"
          }`}
          type='text'
          name='photo'
          id='photo'
          placeholder='Enter your Photo URL'
        />
      </Field>
      <Field label='Email' error={errors.email}>
        <input
          {...register("email", { required: "Email ID is Required" })}
          className={`bg-[#F3F3F3] flex gap-3 w-full p-3 flex-col outline-none border ${
            errors.email ? "border-red-500" : "border-gray-200"
          }`}
          type='email'
          name='email'
          id='email'
          placeholder='Enter your email address'
        />
      </Field>

      <Field label='Password' error={errors.password}>
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Your password must be at least 8 characters",
            },
          })}
          className={`bg-[#F3F3F3] flex gap-3 w-full p-3 flex-col outline-none border ${
            errors.password ? "border-red-500" : "border-gray-200"
          }`}
          type='password'
          name='password'
          id='password'
          placeholder='Enter your password'
        />
      </Field>

      <Field>
        <button className='bg-[#403F3F] flex gap-3 w-full items-center text-white p-3 flex-col outline-none '>
          Register
        </button>
      </Field>
    </form>
  );
};

export default RegisterForm;

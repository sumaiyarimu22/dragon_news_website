import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Field from "../common/Field";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
const LoginForm = () => {
  const navigate = useNavigate();
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (formData) => {
    const { email, password } = formData;

    signInUser(email, password)
      .then((result) => {
        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .then((error) => console.log(error));
  };

  return (
    <form className='flex gap-5 flex-col' onSubmit={handleSubmit(submitForm)}>
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
          Login
        </button>
      </Field>
    </form>
  );
};

export default LoginForm;

import React from "react";
import { useForm } from "react-hook-form"; // Import useForm from React Hook Form
import '../assets/Styles/Form.css';

function LoginPage() {
  // Initialize useForm hook
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        // Handle success
        console.log("Login success:", result);
      } else {
        throw new Error(result.message || "Login failed");
      }
    } catch (error) {
      // Handle error
      console.error("Login failed:", error.message);
    }
    reset();
  };

  return (
    <div className="form-wrapper login-form-wrapper">
      <div className="shadow-3xl rounded-xl">
        <h1 class="form-title">LOGIN</h1>
        <form onSubmit={handleSubmit(onSubmit)} >
        <div className="form-group flex flex-col">
          <div className="flex items-center text-lg">
            <svg className="form-icon absolute ml-3" width="24" viewBox="0 0 24 24" fill="#e31e24">
              <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
            </svg>
            <input
              type="email" 
              id="email" 
              className="bg-gray-200 rounded pl-12 py-2 focus:outline-none w-full"
              placeholder="Email"
              {...register('email', { required: 'Email is required' })} // Registering email field
            />
            </div>
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>} {/* Display error message */}
            </div>
            <div className="form-group flex flex-col">
          <div className="flex items-center text-lg">
            <svg className="form-icon absolute ml-3" viewBox="0 0 24 24" width="24" fill="#e31e24">
              <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z" />
            </svg>
            <input
              type="password"
              id="password"
              className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full"
              placeholder="Password"
              {...register('password', { required: 'Password is required' })} // Registering password field
            />
            </div>
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>} {/* Display error message */}
          </div>
          <button type="submit" className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;

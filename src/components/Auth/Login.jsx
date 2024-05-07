'use client';

import React from 'react';
import {TextInput} from '../general/TextInput';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {loginSchema} from '@/schemas/auth';
import axios from 'axios';
import {toast} from 'react-toastify';
import {useRouter} from 'next/navigation';
import SelectInput from '../general/Select';

const Login = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: {errors},
  } = useForm({resolver: yupResolver(loginSchema)});

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        'http://localhost:3001/api/v1/users/login',
        data
      );
      if (res) {
        toast.success(res.data.message);
        router.push('/');
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="w-full sm:w-[500px] flex flex-col gap-3 py-6 items-center justify-center bg-white">
      <h1>Login</h1>
      <form
        className="grid grid-cols-1 gap-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextInput
          label="Email"
          errors={errors}
          placeholder="Enter email address"
          {...register('email')}
        />
        <TextInput
          label="Password"
          errors={errors}
          placeholder="Enter your password"
          {...register('password')}
        />
        <SelectInput />
        <button
          className="w-full bg-blue-400 h-8 text-white"
          type="submit"
          data-testid="loginButton"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

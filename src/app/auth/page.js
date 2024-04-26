import dynamic from 'next/dynamic';
import React from 'react';
const Login = dynamic(() => import('@/components/Auth/Login'), {ssr: false});

const page = () => {
  return (
    <div className="min-h-screen flex bg-blue-400 justify-center items-center">
      <Login />
    </div>
  );
};

export default page;

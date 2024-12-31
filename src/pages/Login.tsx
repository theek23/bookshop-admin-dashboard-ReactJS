import React from 'react';
import { BookOpen } from 'lucide-react';
import LoginForm from '../components/Auth/LoginForm';

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-500" />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">BookShop</span>
          </div>
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Welcome back</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Sign in to your account</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
// src/components/auth/Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaGoogle, FaApple, FaEye, FaEyeSlash } from 'react-icons/fa';
import toast from 'react-hot-toast';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Login = () => {
  const [formData, setFormData] = useState({
    identifier: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.identifier) {
      newErrors.identifier = 'Email or phone number is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.identifier) && !/^[0-9]{10}$/.test(formData.identifier)) {
      newErrors.identifier = 'Please enter a valid email or 10-digit phone number';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error on typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fix all errors');
      return;
    }

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Get users from localStorage
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      
      // Find user
      const user = users.find(u => 
        (u.email === formData.identifier || u.phone === formData.identifier) && 
        u.password === formData.password
      );

      if (user) {
        // Store user session
        const { password, ...userWithoutPassword } = user;
        localStorage.setItem('user', JSON.stringify(userWithoutPassword));
        toast.success('Login successful! 🎉');
        setTimeout(() => navigate('/home'), 1000);
      } else {
        toast.error('Invalid credentials. Please sign up first.');
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div><Navbar></Navbar>
    <div className="n bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center ">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 hover:shadow-3xl transition-shadow duration-300">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:scale-110 transition-transform duration-300">
              <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
            </div>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900">Welcome Back</h2>
          <p className="mt-2 text-sm text-gray-600">Sign in to your account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Email/Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email or Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-400" />
              </div>
              <input
                type="text"
                name="identifier"
                value={formData.identifier}
                onChange={handleChange}
                placeholder="Enter your email or phone number"
                className={`
                  w-full pl-10 pr-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  ${errors.identifier ? 'border-red-500' : 'border-gray-300'}
                  transition-all duration-200 outline-none hover:border-blue-400
                `}
              />
            </div>
            {errors.identifier && (
              <p className="mt-1 text-sm text-red-500 animate-pulse">{errors.identifier}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-gray-400" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className={`
                  w-full pl-10 pr-10 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  ${errors.password ? 'border-red-500' : 'border-gray-300'}
                  transition-all duration-200 outline-none hover:border-blue-400
                `}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-500 animate-pulse">{errors.password}</p>
            )}
          </div>

          {/* Forgot Password & Sign Up Links */}
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link to="/forgot-password" className="text-blue-600 hover:text-blue-800 font-medium hover:underline transition-all duration-200">
                Forgot password?
              </Link>
            </div>
            <div className="text-sm">
              <span className="text-gray-600">Don't have an account? </span>
              <Link to="/signup" className="text-blue-600 hover:text-blue-800 font-medium hover:underline transition-all duration-200">
                Sign up
              </Link>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`
              w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg text-white
              bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700
              focus:outline-none focus:ring-4 focus:ring-blue-300
              transition-all duration-200 hover:shadow-lg hover:scale-[1.02]
              ${loading ? 'opacity-50 cursor-not-allowed' : ''}
            `}
          >
            {loading ? (
              <div className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Logging in...
              </div>
            ) : (
              'Log in'
            )}
          </button>
        </form>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Login;
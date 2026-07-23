// src/components/auth/ForgotPassword.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaLock, FaArrowLeft, FaCheckCircle, FaEye, FaEyeSlash } from 'react-icons/fa';
import toast from 'react-hot-toast';
import Navbar from '../Navbar/Navbar';

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    identifier: '',
    otp: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [generatedOTP, setGeneratedOTP] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();

  // Generate OTP
  const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  // Step 1: Send OTP
  const handleSendOTP = (e) => {
    e.preventDefault();
    
    if (!formData.identifier) {
      setErrors({ identifier: 'Email or phone number is required' });
      toast.error('Please enter your email or phone number');
      return;
    }

    setLoading(true);
    
    setTimeout(() => {
      // Check if user exists
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(u => u.email === formData.identifier || u.phone === formData.identifier);
      
      if (!user) {
        toast.error('No account found with this email or phone number');
        setLoading(false);
        return;
      }

      // Generate OTP
      const otp = generateOTP();
      setGeneratedOTP(otp);
      setUserEmail(user.email);
      
      // Console log OTP
      console.log('='.repeat(50));
      console.log('🔐 PASSWORD RESET OTP');
      console.log('='.repeat(50));
      console.log(`📧 Email: ${user.email}`);
      console.log(`📱 Phone: ${user.phone}`);
      console.log(`🔑 OTP: ${otp}`);
      console.log(`⏰ Expires in: 5 minutes`);
      console.log('='.repeat(50));
      
      setOtpSent(true);
      setStep(2);
      toast.success(`OTP sent to ${formData.identifier}. Check console for OTP.`);
      setLoading(false);
    }, 1500);
  };

  // Step 2: Verify OTP
  const handleVerifyOTP = (e) => {
    e.preventDefault();
    
    if (!formData.otp) {
      setErrors({ otp: 'OTP is required' });
      toast.error('Please enter the OTP');
      return;
    }
    
    if (formData.otp.length !== 6) {
      setErrors({ otp: 'OTP must be 6 digits' });
      toast.error('OTP must be 6 digits');
      return;
    }

    setLoading(true);
    
    setTimeout(() => {
      if (formData.otp === generatedOTP) {
        setOtpVerified(true);
        setStep(3);
        toast.success('OTP verified successfully! ✅');
        setLoading(false);
      } else {
        toast.error('Invalid OTP. Please try again.');
        setLoading(false);
      }
    }, 1000);
  };

  // Step 3: Reset Password
  const handleResetPassword = (e) => {
    e.preventDefault();
    
    const newErrors = {};
    
    if (!formData.newPassword) {
      newErrors.newPassword = 'New password is required';
    } else if (formData.newPassword.length < 6) {
      newErrors.newPassword = 'Password must be at least 6 characters';
    } else if (!/(?=.*[A-Z])/.test(formData.newPassword)) {
      newErrors.newPassword = 'Password must contain at least one uppercase letter';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error('Please fix all errors');
      return;
    }

    setLoading(true);
    
    setTimeout(() => {
      // Update password in localStorage
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const userIndex = users.findIndex(u => u.email === userEmail || u.phone === formData.identifier);
      
      if (userIndex !== -1) {
        users[userIndex].password = formData.newPassword;
        users[userIndex].updatedAt = new Date().toISOString();
        localStorage.setItem('users', JSON.stringify(users));
        
        toast.success('Password reset successfully! 🎉');
        setTimeout(() => navigate('/login'), 1500);
      } else {
        toast.error('User not found');
      }
      setLoading(false);
    }, 1500);
  };

  // Resend OTP
  const handleResendOTP = () => {
    const otp = generateOTP();
    setGeneratedOTP(otp);
    
    console.log('='.repeat(50));
    console.log('🔄 NEW OTP GENERATED');
    console.log('='.repeat(50));
    console.log(`📧 Email: ${userEmail}`);
    console.log(`🔑 New OTP: ${otp}`);
    console.log(`⏰ Expires in: 5 minutes`);
    console.log('='.repeat(50));
    
    toast.success(`New OTP sent. Check console.`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div><Navbar></Navbar>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 hover:shadow-3xl transition-shadow duration-300">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className={`p-3 rounded-full transition-all duration-300 ${
              step === 1 ? 'bg-gradient-to-r from-blue-500 to-purple-500' :
              step === 2 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
              'bg-gradient-to-r from-green-500 to-teal-500'
            } hover:scale-110`}>
              {step === 1 && (
                <FaLock className="h-10 w-10 text-white" />
              )}
              {step === 2 && (
                <FaEnvelope className="h-10 w-10 text-white" />
              )}
              {step === 3 && (
                <FaCheckCircle className="h-10 w-10 text-white" />
              )}
            </div>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900">
            {step === 1 ? 'Forgot Password' :
             step === 2 ? 'Verify OTP' :
             'Reset Password'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {step === 1 ? "We'll help you reset your password" :
             step === 2 ? 'Enter the 6-digit code sent to your email' :
             'Create a new password for your account'}
          </p>
          {step === 2 && (
            <p className="mt-1 text-xs text-gray-500">
              OTP expires in 5 minutes
            </p>
          )}
        </div>

        {/* Step Indicators */}
        <div className="flex justify-center items-center gap-3">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
                transition-all duration-300
                ${step === s ? 'bg-blue-600 text-white scale-110' :
                  step > s ? 'bg-green-500 text-white' :
                  'bg-gray-200 text-gray-500'}
              `}>
                {step > s ? '✓' : s}
              </div>
              {s < 3 && (
                <div className={`
                  w-8 h-0.5 transition-all duration-300
                  ${step > s ? 'bg-green-500' : 'bg-gray-200'}
                `} />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Send OTP */}
        {step === 1 && (
          <form onSubmit={handleSendOTP} className="mt-8 space-y-6">
            <div className="text-center mb-6">
              <p className="text-gray-600">
                Enter your email address or phone number to receive a password reset OTP.
              </p>
            </div>

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
                  Sending OTP...
                </div>
              ) : (
                'Send OTP'
              )}
            </button>

            <div className="text-center">
              <Link to="/login" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center hover:underline transition-all duration-200">
                <FaArrowLeft className="mr-2" size={14} />
                Back to Login
              </Link>
            </div>
          </form>
        )}

        {/* Step 2: Verify OTP */}
        {step === 2 && (
          <form onSubmit={handleVerifyOTP} className="mt-8 space-y-6">
            <div className="text-center mb-6">
              <p className="text-gray-600">
                Enter the 6-digit OTP sent to <span className="font-medium text-blue-600">{formData.identifier}</span>
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                OTP Code <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <input
                  type="text"
                  name="otp"
                  value={formData.otp}
                  onChange={handleChange}
                  placeholder="Enter 6-digit OTP"
                  maxLength={6}
                  className={`
                    w-full pl-10 pr-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent
                    ${errors.otp ? 'border-red-500' : 'border-gray-300'}
                    transition-all duration-200 outline-none hover:border-yellow-400 text-center text-2xl tracking-widest
                  `}
                />
              </div>
              {errors.otp && (
                <p className="mt-1 text-sm text-red-500 animate-pulse">{errors.otp}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`
                w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg text-white
                bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600
                focus:outline-none focus:ring-4 focus:ring-yellow-300
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
                  Verifying...
                </div>
              ) : (
                'Verify OTP'
              )}
            </button>

            <div className="text-center space-y-3">
              <button
                type="button"
                onClick={handleResendOTP}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline transition-all duration-200"
                disabled={loading}
              >
                Resend OTP
              </button>
              <div>
                <Link to="/login" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center hover:underline transition-all duration-200">
                  <FaArrowLeft className="mr-2" size={14} />
                  Back to Login
                </Link>
              </div>
            </div>
          </form>
        )}

        {/* Step 3: Reset Password */}
        {step === 3 && (
          <form onSubmit={handleResetPassword} className="mt-8 space-y-6">
            <div className="text-center mb-6">
              <p className="text-gray-600">
                Create a new password for your account.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                New Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  placeholder="Enter new password (min 6 characters)"
                  className={`
                    w-full pl-10 pr-10 py-2.5 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent
                    ${errors.newPassword ? 'border-red-500' : 'border-gray-300'}
                    transition-all duration-200 outline-none hover:border-green-400
                  `}
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  {showNewPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                </button>
              </div>
              {errors.newPassword && (
                <p className="mt-1 text-sm text-red-500 animate-pulse">{errors.newPassword}</p>
              )}
              {formData.newPassword && !errors.newPassword && (
                <div className="mt-1 flex items-center gap-2">
                  <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-300 ${
                        formData.newPassword.length >= 6 ? 'bg-green-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${Math.min((formData.newPassword.length / 8) * 100, 100)}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-500">
                    {formData.newPassword.length >= 6 ? 'Strong ✓' : 'Weak'}
                  </span>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter new password"
                  className={`
                    w-full pl-10 pr-10 py-2.5 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent
                    ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}
                    transition-all duration-200 outline-none hover:border-green-400
                  `}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  {showConfirmPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-500 animate-pulse">{errors.confirmPassword}</p>
              )}
              {formData.confirmPassword && !errors.confirmPassword && formData.newPassword === formData.confirmPassword && (
                <p className="mt-1 text-sm text-green-500">✓ Passwords match</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`
                w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg text-white
                bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600
                focus:outline-none focus:ring-4 focus:ring-green-300
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
                  Resetting Password...
                </div>
              ) : (
                'Reset Password'
              )}
            </button>

            <div className="text-center">
              <Link to="/login" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center hover:underline transition-all duration-200">
                <FaArrowLeft className="mr-2" size={14} />
                Back to Login
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
    </div>
  );
};

export default ForgotPassword;
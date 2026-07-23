// src/utils/validation.js
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePhone = (phone) => {
  const re = /^[0-9]{10}$/;
  return re.test(phone);
};

export const validatePassword = (password) => {
  return password.length >= 6;
};

export const validateName = (name) => {
  return name.length >= 2;
};

export const validateSignup = (data) => {
  const errors = {};

  if (!validateName(data.firstName)) {
    errors.firstName = 'Please enter a Name';
  }

  if (!validateName(data.lastName)) {
    errors.lastName = 'Please enter a LastName';
  }

  if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!validatePhone(data.phone)) {
    errors.phone = 'Please enter a valid 10-digit phone number';
  }

  if (!data.gender) {
    errors.gender = 'Please select a gender';
  }

  if (!data.address || data.address.length < 5) {
    errors.address = 'Enter the Address';
  }

  if (!validatePassword(data.password)) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (data.password !== data.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return errors;
};

export const validateLogin = (identifier, password) => {
  const errors = {};

  if (!identifier) {
    errors.identifier = 'Email or phone number is required';
  } else if (!validateEmail(identifier) && !validatePhone(identifier)) {
    errors.identifier = 'Please enter a valid email or phone number';
  }

  if (!password) {
    errors.password = 'Password is required';
  } else if (!validatePassword(password)) {
    errors.password = 'Password must be at least 6 characters';
  }

  return errors;
};